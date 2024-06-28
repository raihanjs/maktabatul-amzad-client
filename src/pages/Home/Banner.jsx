import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

export default function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("https://maktabatul-amzad-s-tan.vercel.app/api/banners")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, [banners]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 320 },
      items: 1,
    },
  };

  return (
    <section className="home-banner my-12">
      <div className="container">
        <div className="border hover:border-primary">
          <Carousel responsive={responsive}>
            {banners.map((banner) => (
              <div key={banner._id} className="p-1 sm:p-4 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="w-8/12">
                    <h3 className="text-sm sm:text-lg leading-[1.2rem] md:leading-[3.5rem] md:text-xl lg:leading-[3.5rem] lg:text-2xl xl:leading-[3.5rem] xl:text-4xl font-bold line-clamp-1 ">
                      {banner?.title[0]}
                    </h3>
                    <p className="text-xs sm:text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                      {banner?.text[0]}
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
          </Carousel>
        </div>
      </div>
    </section>
  );
}
