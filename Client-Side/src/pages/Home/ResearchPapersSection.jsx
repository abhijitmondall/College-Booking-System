function ResearchPapersSection() {
  const papers = [
    {
      title: "Advancements in AI and Machine Learning",
      author: "John Doe",
      link: "https://example.com/ai-research",
    },
    {
      title: "Exploring Renewable Energy Resources",
      author: "Jane Smith",
      link: "https://example.com/renewable-energy",
    },
    {
      title: "The Future of Blockchain Technology",
      author: "Alex Johnson",
      link: "https://example.com/blockchain-research",
    },
  ];

  return (
    <div className="research-section bg-gray-50 py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-wide">
        Recommended Research Papers
      </h2>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {papers.map((paper, index) => (
            <li
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center transition-transform hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-600">By {paper.author}</p>
              </div>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-medium text-white bg-purple-800 rounded-md hover:bg-green-600 transition-all duration-300"
              >
                View Paper
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResearchPapersSection;
