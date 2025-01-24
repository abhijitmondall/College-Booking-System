import { Link } from "react-router";
import heroImg from "./../../assets/Img/Hero-Img.png";
import icon1 from "./../../assets/Img/icon-1.png";
import icon2 from "./../../assets/Img/icon-2.png";
import icon3 from "./../../assets/Img/icon-3.png";

function HeroSection() {
  return (
    <section className="pt-16 bg-gradient-to-b from-purple-800 to-purple-600 pb-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              The <span className="text-orange-500">Smart</span> <br />
              <span>
                Choice For Your <span className="text-orange-500">Future</span>
              </span>
            </h1>
            <p className="text-gray-200 mt-6 text-sm md:text-base lg:text-lg">
              CollegeHub is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the competition and help you achieve your dreams.
            </p>
            <div className="my-[30px]">
              <Link
                to="/Admission"
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md shadow-lg transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-md mx-auto md:max-w-lg"
            />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 bg-purple-700 bg-opacity-90 p-6 md:p-10 rounded-2xl shadow-lg absolute left-1/2 transform -translate-x-1/2 bottom-[-80px] w-[90%] max-w-6xl">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <img src={icon1} alt="Skill Icon" className="w-12 md:w-16" />
            <div className="text-white">
              <h3 className="text-lg font-semibold">Learn The Latest Skills</h3>
              <p className="text-sm text-gray-300 mt-2">
                Contrary to popular belief, Lorem Ipsum is not random text. It
                has roots in classical literature.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <img src={icon2} alt="Career Icon" className="w-12 md:w-16" />
            <div className="text-white">
              <h3 className="text-lg font-semibold">Get Ready For a Career</h3>
              <p className="text-sm text-gray-300 mt-2">
                Contrary to popular belief, Lorem Ipsum is not random text. It
                has roots in classical literature.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <img src={icon3} alt="Certificate Icon" className="w-12 md:w-16" />
            <div className="text-white">
              <h3 className="text-lg font-semibold">Earn a Certificate</h3>
              <p className="text-sm text-gray-300 mt-2">
                Contrary to popular belief, Lorem Ipsum is not random text. It
                has roots in classical literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
