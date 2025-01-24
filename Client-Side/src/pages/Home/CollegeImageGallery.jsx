function CollegeImageGallery() {
  const galleryImages = [
    "https://i.ibb.co.com/khdSWKk/pexels-pavel-danilyuk-7944181.jpg",
    "https://i.ibb.co.com/Phb7wnD/pexels-rdne-7713351.jpg",
    "https://i.ibb.co.com/3SX3NJc/pexels-joshua-mcknight-442355-1139317.jpg",
    "https://i.ibb.co.com/sKxFVfq/pexels-emily-ranquist-493228-1205651.jpg",
    "https://i.ibb.co.com/WzLdYQT/pexels-godisable-jacob-226636-901962.jpg",
    "https://i.ibb.co.com/n7Wzngz/clg-1.jpg",
  ];

  return (
    <section className="bg-gray-100 py-[90px]">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          College Graduation Gallery
        </h2>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Graduation group ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollegeImageGallery;
