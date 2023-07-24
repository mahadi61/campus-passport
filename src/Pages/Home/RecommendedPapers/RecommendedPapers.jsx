import { Link } from "react-router-dom";
import Container from "../../../Component/Container";

const RecommendedPapers = () => {
  const recommendedPapers = [
    {
      title: "Self-healing in CdTe nanostructures",
      link: "https://example.com/paper1",
      description:
        "Herein, we report a first-principle density functional theory-based study on CdTe nanostructures in 1D (nanorods and nanotubes) and 2D (ultra-thin slabs, monolayers) systems created within the top-down approach in terms of various properties, such as electronic structure, structural stability...",
    },
    {
      title: "DFT based investigation of bulk mechanical.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2352214323000503",
      description:
        "PbTaSe2 is a non-centrosymmetric topological semimetal. In this work we have explored the structural, elastic, mechanical, bonding, electronic, acoustic, thermal, and optical properties of PbTaSe2. The electronic bond structure calculations confirm semi-metallic character. Fermi surface topology shows both electron and...",
    },
    {
      title:
        "Band topology and phase stability of half-Heusler semiconductors.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0022369723003207",
      description:
        "In the previous studies, the topological insulators in the half-Heusler ternary structure are assumed to be in the-phase having the transition metal atom at the unique middle site. In contrast, the minimum-energy half-Heusler phase can well be the-phase with the highly electronegative anion positioned in between the electropositive metallic ions....",
    },
  ];
  return (
    <>
      <Container>
        <div>
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Recommended Research Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedPapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-[#ff7350]  hover:text-white rounded-lg shadow-md p-4"
                >
                  <h3 className="text-lg font-bold mb-2">{paper.title}</h3>
                  <p className="">{paper.description}</p>
                  <Link
                    to="https://www.sciencedirect.com/science/article/abs/pii/S0022369723003141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-blue-500 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RecommendedPapers;
