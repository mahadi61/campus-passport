import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../Component/Container";

const CollegeDetails = () => {
  const { id } = useParams();
  const [collegeDetailsData, setCollegeDetailsData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/college/${id}`)
      .then((res) => res.json())
      .then((data) => setCollegeDetailsData(data));
  }, []);

  const { name, _id, researchHistory, sports, image, events, admissionDates } =
    collegeDetailsData;

  return (
    <>
      <Container>
        <div className="flex gap-5">
          <div className="relative group w-1/2 overflow-hidden ">
            <img className="h-96 w-full" src={image} alt="img" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to={`/apply/${_id}/${name}`}
                className="text-white bg-[#ff7350] py-2 px-4 rounded-lg transform scale-0 group-hover:scale-100 transition-transform transition-delay-500"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold uppercase">{name}</h2>
            <h2 className="font-semibold">Admission Date: {admissionDates}</h2>
            <h2 className="font-semibold">Sports Category: {sports}</h2>
            <p className="font-semibold">{researchHistory}</p>
            <p className="font-semibold">Upcoming Events: {events}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CollegeDetails;
