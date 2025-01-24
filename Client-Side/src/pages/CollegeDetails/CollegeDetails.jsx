import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CollegeDetails() {
  const { id } = useParams(); // Extract the college id from the URL
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    // Fetch college data from the API
    const fetchCollege = async () => {
      try {
        const res = await fetch(
          `https://college-booking-system.vercel.app/api/v1/colleges/${id}`
        );

        const data = await res.json();
        setCollege(data.college);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCollege();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-blue-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-red-500">College not found!</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-12 px-4 lg:px-16 bg-gray-50">
      <div className="mx-auto max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Banner Section */}
        <div className="relative">
          <img
            src={college.collegeImage}
            alt={college.collegeName}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
            {college.collegeName}
          </h2>
        </div>

        {/* Details Section */}
        <div className="p-6 lg:p-12">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Details
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              <strong>Rating:</strong>{" "}
              <span className="text-yellow-500">{college.rating} ★</span>
            </p>
            <p className="text-gray-600 text-lg mb-4">
              <strong>Admission Dates:</strong> {college.admissionDates}
            </p>
            <p className="text-gray-600 text-lg mb-4">
              <strong>Research Count:</strong> {college.researchCount}
            </p>
          </div>

          {/* Events and Sports */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Events</h4>
              <ul className="list-disc list-inside text-gray-600">
                {college.events.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Sports</h4>
              <ul className="list-disc list-inside text-gray-600">
                {college.sports.map((sport, index) => (
                  <li key={index}>{sport}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollegeDetails;
