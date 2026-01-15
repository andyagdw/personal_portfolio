// Images
import HeroImage from "@/src/app/assets/hero-image.png";
import GeometricPatternsImage from "@/src/app/assets/abstract_geometric_patterns_with_paint_splashes.png";
// Next
import Image from "next/image";
// Components
import GetInTouchText from "../get-in-touch-text/get-in-touch-text";

export default function GetInTouch() {
  return (
    <section
      aria-labelledby="get-in-touch"
      style={{
        backgroundImage: `url(${GeometricPatternsImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="py-10"
        style={{
          background:
            "linear-gradient(rgb(255 255 255 / 0.8), rgb(0 0 0 / 0.9) ",
        }}
      >
        <div className="max-w-(--max-width) mx-auto px-4">
          {/* Contains text, form and image */}
          <div className="mb-8 md:hidden">
            <Image
              src={HeroImage}
              alt="Andy Agyei-Dwumah"
              // Show on screen sizes greater than medium
              className="mx-auto rounded-full w-[15em] hero-img-style"
            />
          </div>
          <div className="mx-auto rounded-4xl backdrop-blur-xs">
            <div className="text-center m-5 md:m-30 px-10 py-5">
              <h2 id="get-in-touch">
                Let&apos;s <span>Work Together</span>
              </h2>
              <GetInTouchText />
            </div>
            <form className="mx-auto max-w-2xl px-2" aria-label="Get In Touch">
              <div>
                <label htmlFor="fullName" className="block mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="w-full mb-8 px-2.5 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  inputMode="email"
                  className="w-full mb-8 px-2.5 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full mb-8 px-2.5 py-2 rounded-md"
                ></textarea>
              </div>
              <div className="mb-8">
                <button
                  type="button"
                  className="cursor-pointer bg-(--smart-blue) leading-10 px-6 text-(--ivory) hover:opacity-85 rounded-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
