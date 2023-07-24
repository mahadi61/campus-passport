import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { singUpWithEmail, profileUpdate, googleLogin, setObserverState } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoUrl;
    const email = data.email;
    const password = data.password;

    singUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          profileUpdate(name, photo)
            .then(() => {
              const user = { name: name, email: email, photoUrl: photo };
              // save user info in database
              fetch("https://campus-passport-server.vercel.app/add-user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                // TODO: alreat
                .then((data) => {
                  if (data.acknowledged) {
                    Swal.fire("SingIn Successful!", "", "success");
                    setObserverState(new Date());
                    navigate("/");
                  }
                });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: `${error?.message}`,
                text: "Please try again!",
              });
            });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err?.message}`,
          text: "Please try again!",
        });
      });
  };

  const googleSinIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire("SingIn Successful!", "", "success");
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error?.message}`,
          text: "Please try again!",
        });
      });
  };

  return (
    <>
      <div className="flex justify-center items-center py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photo
            </label>
            <Controller
              name="photoUrl"
              control={control}
              defaultValue=""
              rules={{ required: "Photo is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Photo Url"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={() => googleSinIn()}
            type="button"
            className="bg-blue-500 mt-2 flex items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <FaGoogle className="mr-2" /> Sign In with Google
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-500">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
