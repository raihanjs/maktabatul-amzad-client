export default function HeroSkeleton() {
  return (
    <section className="home-banner my-5 md:my-12">
      <div className="container">
        <div className="border hover:border-primary">
          <div className="p-5 md:p-10 animate-pulse grid grid-cols-2">
            <div>
              <div class="h-3 bg-slate-200 rounded mt-12 sm:mt-16 md:mt-24 md:mt-32 xl:mt-40"></div>
              <div class="h-2 bg-slate-200 rounded mt-2"></div>
            </div>
            <div class="bg-slate-200 h-32 xs:h-40 sm:h-56 md:h-72 xl:h-96 w-32 xs:w-40 sm:w-56 md:w-72 xl:w-80 ml-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
