import { Link } from "react-router-dom";
import Container from "../../Component/Container";

const collegeData = [
  { id: 1, name: "Willowbrook University" },
  { id: 2, name: "Evergreen College" },
  { id: 3, name: "Crescent University" },
  { id: 4, name: "Magnolia State University" },
  { id: 5, name: "Azure Hills College" },
  { id: 6, name: "Golden Oak University" },
  { id: 7, name: "Harmony University" },
  { id: 8, name: "Ivywood College" },
  { id: 9, name: "Sapphire University" },
  { id: 10, name: "Cedarwood Institute" },
];

const CollegeTable = () => {
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
            {collegeData.map((college) => (
              <tr key={college.id}>
                <td className="border text-center">{college.id}</td>
                <td className="border px-4 py-2">
                  <Link to="/apply">{college.name}</Link>
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
