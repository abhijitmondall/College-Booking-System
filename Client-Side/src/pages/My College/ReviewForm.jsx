import { useState } from "react";

function ReviewForm({ admission, setRefetch }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const { collegeName, candidateName, collegeId, email } = admission;

  const data = {
    collegeName,
    userName: candidateName,
    collegeId,
    userEmail: email,
    rating,
    comment,
  };
  const ID = admission._id;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://college-booking-system.vercel.app/api/v1/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      await fetch(
        `https://college-booking-system.vercel.app/api/v1/admissions/${ID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify({
            review: { rating, comment, isReviewed: true },
          }),
        }
      );

      if (res.ok) {
        alert("Review added successfully");
        setRefetch((re) => !re);
      } else {
        alert("Failed to add review");
      }
    } catch (error) {
      console.error("Error adding review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h1 className="text-[18px]">Give a Feedback:</h1>
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
        disabled={loading}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer ${
          loading && "disabled"
        }`}
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
