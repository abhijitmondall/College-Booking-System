import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import AdmissionForm from "./AdmissionForm";

function Admission() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleApplyClick = (college) => {
    setSelectedCollege(college);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCollege(null);
  };

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
    // <section className="min-h-screen py-12 px-4 lg:px-16 bg-gray-50">
    //   <div className="container">
    //     <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
    //       College Admissions
    //     </h2>
    //     <ul className="sm:max-w-[80%] m-auto grid grid-cols-1 gap-6">
    //       {colleges.map((college) => (
    //         <li
    //           key={college._id}
    //           className="sm:flex justify-between items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all"
    //         >
    //           <h3 className="text-lg font-bold text-gray-800 mb-4">
    //             {college.collegeName}
    //           </h3>
    //           <Link
    //             to={`/admission/${college.id}`}
    //             className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
    //           >
    //             Apply Now
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
    <section className="min-h-screen py-12 px-4 lg:px-16 bg-gray-50">
      <div className="container relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
          College Admissions
        </h2>
        <ul className="sm:max-w-[80%] m-auto grid grid-cols-1 gap-6">
          {colleges.map((college) => (
            <li
              key={college._id}
              className="sm:flex justify-between items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {college.collegeName}
              </h3>
              <button
                onClick={() => handleApplyClick(college)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>

        {/* Modal */}
        {showModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
                Admission Form - {selectedCollege.collegeName}
              </h2>
              <AdmissionForm
                college={selectedCollege}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Admission;
