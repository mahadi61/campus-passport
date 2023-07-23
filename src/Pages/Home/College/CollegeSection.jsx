import { useEffect, useState } from "react";
import Container from "../../../Component/Container";
import CollegeCard from "./CollegeCard";

const CollegeSection = () => {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featured-colleges")
      .then((res) => res.json())
      .then((data) => setCollegeData(data));
  }, []);

  return (
    <div>
      <Container>
        <h2 className="text-3xl font-bold mb-4">Featured Colleges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collegeData.map((college, index) => (
            <CollegeCard key={index} collegeData={college} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CollegeSection;
