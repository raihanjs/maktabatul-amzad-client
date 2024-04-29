import {} from "./HomeBanner";

import BannerSlider from "./BannerSlider/BannerSlider";
import Highlight from "./Highlight/Highlight";

export default function HomeBanner() {
  return (
    <section className="container my-10">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-6 xl:grid-cols-4 gap-y-5 gap-8 lg:gap-x-20">
        <BannerSlider />
        <Highlight />
      </div>
    </section>
  );
}
