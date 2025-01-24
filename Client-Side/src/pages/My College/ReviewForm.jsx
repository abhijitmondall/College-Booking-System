import { useState } from "react";

function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch(
  //         `https://college-booking-system.vercel.app/api/v1/admissions/${admissionId}/review`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ rating, comment }),
  //         }
  //       );

  //       if (response.ok) {
  //         alert("Review added successfully");
  //         fetchAppliedColleges();
  //       } else {
  //         alert("Failed to add review");
  //       }
  //     } catch (error) {
  //       console.error("Error adding review:", error);
  //     }
  //   };

  return (
    <form className="mt-4">
      <label className="block mb-2">Rating:</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="mb-4 p-2 border rounded"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <label className="block mb-2">Review:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="p-2 border rounded w-full mb-4"
        placeholder="Add your review"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
