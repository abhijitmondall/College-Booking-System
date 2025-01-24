function CollegeCardsSection() {
  const colleges = [
    {
      id: 1,
      name: "Green Valley College",
      image: "https://i.ibb.co.com/5jT94nY/clg3.jpg",
      admissionDates: "1st June - 30th June",
      events: ["Cultural Fest", "Science Fair", "Alumni Meet"],
      researchHistory: ["AI in Healthcare", "Quantum Computing"],
      sports: ["Football", "Basketball"],
    },
    {
      id: 2,
      name: "Blue Ocean University",
      image: "https://i.ibb.co.com/Z6jzckZ/clg-2.jpg",
      admissionDates: "15th July - 31st July",
      events: ["Tech Expo", "Art Workshop", "Startup Pitching"],
      researchHistory: ["Marine Biology", "Robotics"],
      sports: ["Swimming", "Badminton"],
    },
    {
      id: 3,
      name: "Sunrise Institute of Technology",
      image: "https://i.ibb.co.com/n7Wzngz/clg-1.jpg",
      admissionDates: "10th August - 25th August",
      events: ["Hackathon", "Music Fest", "Leadership Summit"],
      researchHistory: ["Blockchain Technology", "Renewable Energy"],
      sports: ["Cricket", "Volleyball"],
    },
  ];

  return (
    <section className="container">
      <div className="mt-[180px] mb-[100px]">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 tracking-wide">
          Explore Our Colleges
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="flex flex-col justify-between border-2 border-gray-300 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:translate-y-2"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-44 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {college.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Admission Dates:</strong> {college.admissionDates}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Events:</strong> {college.events.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Research History:</strong>{" "}
                {college.researchHistory.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Sports:</strong> {college.sports.join(", ")}
              </p>
              <button className="mt-auto px-6 py-3 text-lg font-medium text-white bg-purple-800 rounded-md hover:bg-green-600 transition-all duration-300 cursor-pointer">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollegeCardsSection;
