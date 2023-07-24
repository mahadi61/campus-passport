import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Container from "../../Component/Container";

const UserProfile = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://campus-passport-server.vercel.app/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Update Successful!", "", "success");
          reset();
        }
      });
  };

  return (
    <>
      <Container>
        <div className="">
          <h2 className="text-2xl text-center font-bold mb-4">
            Update User Profile
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mx-auto max-w-xl"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  User Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "User Name is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Your full name"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  User Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "User Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="john.doe@example.com"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="candidatePhone"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  University Name
                </label>
                <Controller
                  name="universityName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Candidate Phone number is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="University Name"
                    />
                  )}
                />
                {errors.universityName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.universityName.message}
                  </p>
                )}
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  htmlFor="address"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Address
                </label>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Address is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      placeholder="Address"
                      rows="3"
                    />
                  )}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
