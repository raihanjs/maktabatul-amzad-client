import Carousel from "react-multi-carousel";
import useBanners from "../../hooks/useBanners";

export default function Hero() {
  const [banners, isLoading] = useBanners();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 320 },
      items: 1,
    },
  };

  if (isLoading) return <HeroSkeleton />;

  return (
    <section className="home-banner my-5 md:my-12">
      <div className="container">
        <div className="border hover:border-primary">
          <Carousel responsive={responsive} showDots>
            {banners.map((banner) => (
              <div key={banner._id} className="p-1 sm:p-4 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="w-8/12">
                    <h3 className="text-sm sm:text-lg leading-[1.2rem] md:leading-[3.5rem] md:text-xl lg:leading-[3.5rem] lg:text-2xl xl:leading-[3.5rem] xl:text-4xl font-bold line-clamp-1 ">
                      {banner?.title}
                    </h3>
                    <p className="text-xs sm:text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                      {banner?.text}
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

// Hero Skeletion
function HeroSkeleton() {
  return (
    <section className="home-banner my-5 md:my-12">
      <div className="container">
        <div className="border hover:border-primary">
          <div className="p-5 md:p-10 animate-pulse grid grid-cols-2">
            <div>
              <div className="h-3 bg-slate-200 rounded mt-12 sm:mt-16 md:mt-24 md:mt-32 xl:mt-40"></div>
              <div className="h-2 bg-slate-200 rounded mt-2"></div>
            </div>
            <div className="bg-slate-200 h-32 xs:h-40 sm:h-56 md:h-72 xl:h-96 w-32 xs:w-40 sm:w-56 md:w-72 xl:w-80 ml-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
