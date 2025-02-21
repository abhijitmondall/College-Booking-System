import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

function MyCollege() {
  const [appliedColleges, setAppliedColleges] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true);
    const fetchAppliedColleges = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://college-booking-system.vercel.app/api/v1/admissions/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await response.json();
        setAppliedColleges(data?.data?.admissions);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch applied colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedColleges();
  }, [refetch]);

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

  return (
    <section className="py-6 bg-gray-100 min-h-screen">
      <div className=" container">
        <h1 className="text-center text-2xl font-bold mb-6">
          My Applied Colleges
        </h1>
        {appliedColleges?.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {appliedColleges?.map((admission) => (
              <div
                key={admission._id}
                className="bg-white shadow-lg rounded-lg p-6"
              >
                <img
                  src={admission.collegeImage}
                  alt={admission.collegeName}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold">{admission.collegeName}</h2>
                <p className="text-gray-600">
                  <strong>Candidate Name:</strong> {admission.candidateName}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {admission.email}
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> {admission.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Subject:</strong> {admission.subject}
                </p>

                {/* Review Section */}
                <div className="mt-4">
                  {admission?.review?.isReviewed ? (
                    <>
                      <p>
                        <strong>Review:</strong> {admission.review.comment}
                      </p>
                      <p>
                        <strong>Rating:</strong> {admission.review.rating} ★
                      </p>
                    </>
                  ) : (
                    <ReviewForm admission={admission} setRefetch={setRefetch} />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No applied colleges found.</p>
        )}
      </div>
    </section>
  );
}

export default MyCollege;
