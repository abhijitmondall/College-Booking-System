import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function ReviewSection() {
  const reviews = [
    {
      collegeName: "Harvard University",
      user: "John Doe",
      comment: "An amazing experience with top-notch facilities and faculty.",
      rating: 5,
    },
    {
      collegeName: "MIT",
      user: "Jane Smith",
      comment: "Great research opportunities and a vibrant campus life.",
      rating: 4,
    },
    {
      collegeName: "Stanford University",
      user: "Alex Johnson",
      comment: "The campus is beautiful, and the courses are very engaging.",
      rating: 4.5,
    },
    {
      collegeName: "Caltech",
      user: "Emily Davis",
      comment: "Incredible professors and cutting-edge research programs.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 pt-[60px] pb-[90px]">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-wide">
          User Reviews
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:shadow-xl hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {review.collegeName}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reviewed by {review.user}
                </p>
                <p className="text-base text-gray-700 mb-4">{review.comment}</p>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewSection;
