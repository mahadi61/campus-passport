import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Container from "../../Component/Container";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [collegeDetailsData, setCollegeDetailsData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/my-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCollegeDetailsData(data));
  }, [user]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const rating = event.target.rating.value;
    const data = { review, rating };
    console.log(data);
    fetch(`http://localhost:5000/review/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Review added successful!", "", "success");
          event.target.reset();
        }
      });
  };

  return (
    <>
      <Container>
        {collegeDetailsData.map((collegeData) => (
          <div key={collegeData?._id} className="flex gap-5">
            <div className="group w-1/2 overflow-hidden ">
              <img className="h-96 w-full" src={collegeData?.image} alt="img" />
            </div>
            <div>
              <h2 className="text-4xl font-bold uppercase">
                {collegeData?.name}
              </h2>
              <h2 className="font-semibold">
                Admission Date: {collegeData?.admissionDates}
              </h2>
              <h2 className="font-semibold">
                Sports Category: {collegeData?.sports}
              </h2>
              <p className="font-semibold">{collegeData?.researchHistory}</p>
              <p className="font-semibold">
                Upcoming Events: {collegeData?.events}
              </p>
              <form
                onSubmit={handleAddReview}
                className="flex flex-col gap-3 mt-6"
              >
                <textarea
                  name="review"
                  className="textarea textarea-warning"
                  placeholder="Review"
                ></textarea>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered  max-w-xs"
                />
                <button
                  onClick={() => setId(collegeData?._id)}
                  className="btn bg-[#ff7350]  text-white border-none btn-primary"
                >
                  Add Review
                </button>
              </form>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default MyCollege;
