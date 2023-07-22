const CollegeCard = ({ collegeData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={collegeData.image}
        alt={collegeData.name}
        className="w-full h-32 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">{collegeData.name}</h2>
      <p>Admission Dates: {collegeData.admissionDates}</p>
      <p>Events: {collegeData.events}</p>
      <p>Research History: {collegeData.researchHistory}</p>
      <p>Sports: {collegeData.sports}</p>
    </div>
  );
};

export default CollegeCard;
