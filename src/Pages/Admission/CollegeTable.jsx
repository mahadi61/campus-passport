import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Component/Container";

const CollegeTable = () => {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-colleges")
      .then((res) => res.json())
      .then((data) => {
        setCollegeData(data);
      });
  }, []);

  return (
    <>
      <Container>
        <h2 className="text-2xl font-bold mb-4">College Names</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="">S/L</th>
              <th className="px-4 py-2">College Name</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college, i) => (
              <tr key={college.id}>
                <td className="border text-center">{i + 1}</td>
                <td className="border px-4 py-2">
                  <Link to={`/apply/${college?._id}/${college?.name}`}>
                    {college.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default CollegeTable;
