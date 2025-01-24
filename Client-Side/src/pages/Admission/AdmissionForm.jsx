import { useState } from "react";

function AdmissionForm({ college, onClose }) {
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(`Admission form submitted for ${college.name}!`);
    onClose();
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
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
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
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          accept="image/*"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default AdmissionForm;
