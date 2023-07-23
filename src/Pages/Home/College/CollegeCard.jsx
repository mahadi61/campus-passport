import { Link } from "react-router-dom";

const CollegeCard = ({ collegeData }) => {
  return (
    <div className="bg-[#b6d1fa40]   relative">
      <img
        src={collegeData.image}
        alt={collegeData.name}
        className="w-full h-72 object-cover"
      />
      <div className="w-36 flex justify-center items-center  h-20  bg-[#ff7350] text-white absolute top-4 right-3 ">
        <p className="font-bold text-xl text-center">Apply by 20 July</p>
      </div>
      <div className="px-5 py-5">
        <h2 className="text-2xl font-bold mb-2">{collegeData.name}</h2>
        <p>Admission Dates: {collegeData.admissionDates}</p>
        <p>Events: {collegeData.events}</p>
        <p>Research History: {collegeData.researchHistory}</p>
        <p>Sports: {collegeData.sports}</p>
        <Link
          to={`/${collegeData?._id}`}
          className="btn btn-outline border-none hover:bg-[#052c65] w-full bg-[#ff7350] text-white hover:text-white text-xl font-semibold mt-3"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
