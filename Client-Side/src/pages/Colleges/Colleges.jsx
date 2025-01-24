import { useEffect, useState } from "react";

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch college data from the API
    const fetchColleges = async () => {
      try {
        const res = await fetch(
          "https://college-booking-system.vercel.app/api/v1/colleges"
        );
        if (!res.ok) {
          console.log(res);
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setColleges(data.colleges);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Explore Our Colleges
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <div
              key={college._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={college.collegeImage}
                alt={college.collegeName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {college.collegeName}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-bold">Rating:</span>{" "}
                  <span className="text-yellow-500">{college.rating} ★</span>
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-bold">Admission Dates:</span>{" "}
                  {college.admissionDates}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-bold">Research Count:</span>{" "}
                  {college.researchCount}
                </p>
                <button
                  onClick={() =>
                    alert(
                      `Events: ${college.events.join(
                        ", "
                      )}\nSports: ${college.sports.join(", ")}`
                    )
                  }
                  className="bg-purple-600 text-white text-sm py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Colleges;
