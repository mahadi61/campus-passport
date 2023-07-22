import CollegeCard from "./CollegeCard";

const CollegeSection = () => {
  const collegeData = [
    {
      name: "Sample College 1",
      image: "/path/to/college1.jpg",
      admissionDates: "August 15 - August 30",
      events: "Annual Fest, Tech Symposium",
      researchHistory: "Founded in 1950, 500+ research publications",
      sports: "Football, Basketball, Swimming",
    },
    {
      name: "Sample College 2",
      image: "/path/to/college2.jpg",
      admissionDates: "September 1 - September 20",
      events: "Cultural Fest, Hackathon",
      researchHistory: "Established in 1975, 300+ research publications",
      sports: "Cricket, Volleyball, Tennis",
    },
    {
      name: "Sample College 3",
      image: "/path/to/college3.jpg",
      admissionDates: "October 1 - October 31",
      events: "Sports Meet, Entrepreneurship Summit",
      researchHistory: "Founded in 1990, 700+ research publications",
      sports: "Badminton, Table Tennis, Athletics",
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Featured Colleges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collegeData.map((college, index) => (
            <CollegeCard key={index} collegeData={college} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollegeSection;
