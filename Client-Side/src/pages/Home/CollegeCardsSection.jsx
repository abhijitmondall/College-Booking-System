import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CollegeCardsSection() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/colleges/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    const fetchAppliedColleges = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://college-booking-system.vercel.app/api/v1/colleges?limit=3`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await response.json();

        setColleges(data.colleges);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch applied colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedColleges();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 pt-[60px] pb-[90px] text-center">
        <p className="text-lg text-gray-800">Loading reviews...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 pt-[60px] pb-[90px] text-center">
        <p className="text-lg text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="mt-[180px] mb-[100px]">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 tracking-wide">
          Explore Our Colleges
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {colleges?.map((college) => (
            <div
              key={college._id}
              className="flex flex-col justify-between border-2 border-gray-300 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:translate-y-2"
            >
              <img
                src={college.collegeImage}
                alt={college.collegeName}
                className="w-full h-44 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {college.collegeName}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Admission Dates:</strong> {college.admissionDates}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Events:</strong> {college?.events?.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Research History:</strong>{" "}
                {college?.researchHistory?.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Sports:</strong> {college?.sports?.join(", ")}
              </p>
              <button
                onClick={() => handleClick(college._id)}
                className="mt-auto px-6 py-3 text-lg font-medium text-white bg-purple-800 rounded-md hover:bg-green-600 transition-all duration-300 cursor-pointer"
              >
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
