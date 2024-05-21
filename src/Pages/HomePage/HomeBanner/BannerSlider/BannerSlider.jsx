import { useContext } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useBanner from "../../../../hooks/useBanner";
import { ThemeContext } from "../../../../Providers/ThemeProvider";

export default function BannerSlider() {
  const { language } = useContext(ThemeContext);
  const [banners, isLoading] = useBanner();
  const activeBanners = banners.filter((banner) => banner.isActive === true);
  const sliderBtns = useRef(null);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="border relative py-5 px-10 lg:px-20 flex flex-col justify-center">
      {isLoading ? (
        <>
          <div className="h-screen flex jutify-center items-center">
            <p className="md:text-xl">Loading Banners ...</p>
          </div>
        </>
      ) : (
        <>
          {activeBanners.length > 1 ? (
            <>
              <Slider ref={sliderBtns} {...settings}>
                {activeBanners.map((banner) => (
                  <div key={banner?._id}>
                    <div className="flex items-center justify-center">
                      <div className="w-8/12">
                        <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                          {banner?.title[language]}
                        </h3>
                        <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                          {banner?.text[language]}
                        </p>
                      </div>
                      <div className="w-4/12">
                        <div>
                          <img
                            src={banner?.thumb}
                            className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          ) : (
            <>
              {activeBanners.map((banner) => (
                <div key={banner?._id}>
                  <div className="flex items-center justify-center">
                    <div className="w-8/12">
                      <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                        {banner?.title[language]}
                      </h3>
                      <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                        {banner?.text[language]}
                      </p>
                    </div>
                    <div className="w-4/12">
                      <div>
                        <img
                          src={banner?.thumb}
                          className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {/* Slider buttons */}
          {activeBanners.length > 1 && (
            <div className="absolute top-3/5 left-0 w-full px-1 lg:px-2 flex justify-between">
              <button
                onClick={() => sliderBtns.current.slickPrev()}
                className="py-4 px-1 bg-gray-400 hover:bg-[#F0141E]"
              >
                <IoIosArrowBack className="text-white text-lg md:text-xl hover:text-black" />
              </button>
              <button
                onClick={() => sliderBtns.current.slickNext()}
                className="py-4 px-1 bg-gray-400 hover:bg-[#F0141E]"
              >
                <IoIosArrowForward className="text-white text-lg md:text-xl hover:text-black" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
