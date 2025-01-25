import { useState } from "react";
import { FaEdit, FaSave, FaUniversity, FaHome } from "react-icons/fa";
import { MdEmail, MdPerson } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile } = useAuth();

  // Initial user data
  const [userData, setUserData] = useState({
    name: user?.displayName,
    email: user?.email,
    university: user?.college,
    address: user?.address,
  });

  // Editable form data
  const [formData, setFormData] = useState({ ...userData });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setUserData({ ...formData });
    await updateUserProfile(formData.name);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-10 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
          {isEditing ? "Edit Profile" : "Profile"}
        </h2>
        {isEditing ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MdPerson className="text-indigo-500 text-xl" />
              <label className="block font-medium text-gray-700">Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500"
            />

            <div className="flex items-center space-x-2">
              <MdEmail className="text-indigo-500 text-xl" />
              <label className="block font-medium text-gray-700">Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500"
            />

            <div className="flex items-center space-x-2">
              <FaUniversity className="text-indigo-500 text-xl" />
              <label className="block font-medium text-gray-700">
                University
              </label>
            </div>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500"
            />

            <div className="flex items-center space-x-2">
              <FaHome className="text-indigo-500 text-xl" />
              <label className="block font-medium text-gray-700">Address</label>
            </div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500"
            />

            <button
              onClick={handleSave}
              className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
            >
              <FaSave className="mr-2" />
              Save
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MdPerson className="text-indigo-500 text-xl" />
              <span className="font-medium text-gray-700">{userData.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-indigo-500 text-xl" />
              <span className="font-medium text-gray-700">
                {userData.email}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUniversity className="text-indigo-500 text-xl" />
              <span className="font-medium text-gray-700">
                {userData.university}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHome className="text-indigo-500 text-xl" />
              <span className="font-medium text-gray-700">
                {userData.address}
              </span>
            </div>

            <button
              onClick={handleEdit}
              className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
            >
              <FaEdit className="mr-2" />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
