const RecommendedPapers = () => {
  const recommendedPapers = [
    {
      title: "Research Paper 1",
      link: "https://example.com/paper1",
      description: "This is the first research paper description.",
    },
    {
      title: "Research Paper 2",
      link: "https://example.com/paper2",
      description: "This is the second research paper description.",
    },
    // Add more research papers as needed
  ];
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Research Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedPapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">{paper.title}</h3>
              <p className="text-gray-600">{paper.description}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPapers;
