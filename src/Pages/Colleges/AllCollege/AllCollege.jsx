import { useEffect, useState } from "react";
import Container from "../../../Component/Container";
import CollegeCard from "../../Home/College/CollegeCard";

const AllCollege = () => {
  const [allCollegeData, setAllCollegeData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/all-colleges")
      .then((res) => res.json())
      .then((data) => {
        setAllCollegeData(data);
        // setLoading(false);
      });
  }, []);
  // TODO: set loading need to fix
  //   if (loading) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allCollegeData.map((college, index) => (
            <CollegeCard key={index} collegeData={college} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllCollege;
