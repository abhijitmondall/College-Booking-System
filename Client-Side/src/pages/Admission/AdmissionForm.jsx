import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

function AdmissionForm({ college, onClose }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: user.email,
    phone: "",
    address: "",
    dob: "",
    collegeImage: college.collegeImage,
    collegeId: college._id,
    collegeName: college.collegeName,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,

      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        "https://college-booking-system.vercel.app/api/v1/admissions",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(res);
      if (res.ok) {
        await res.json();

        alert(`Admission form submitted for ${formData.candidateName}!`);
        navigate("/MyCollege", { replace: true });
        onClose();
        setLoading(false);
      } else {
        console.error("Failed to submit form:", res);
        alert("Failed to submit the admission form. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">Candidate Name</label>
        <input
          type="text"
          name="candidateName"
          value={formData.candidateName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Enter your full name"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Enter your subject"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          disabled
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 disabled"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Enter your address"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">College Image</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.collegeImage}
          className="w-full border border-gray-300 rounded-lg p-3 disabled"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all cursor-pointer ${
          loading && "disabled"
        }`}
      >
        Submit
      </button>
    </form>
  );
}

export default AdmissionForm;
