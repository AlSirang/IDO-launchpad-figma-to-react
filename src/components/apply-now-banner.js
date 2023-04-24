export const ApplyNowBanner = () => {
  return (
    <section className="max-w-6xl m-auto w-full mt-20 md:mt-32">
      <div className="bg-gradient-to-r from-cpink-dark to-cdark-light rounded mt-20">
        <div className="py-8 md:px-16 px-10">
          <div className="flex justify-between md:flex-nowrap flex-wrap gap-3">
            <p className="font-bold text-xl md:text-2xl flex items-center">
              Want to launch your project?
            </p>
            <button className="inline-block text-sm px-4 py-2 rounded transition-all text-white bg-cpink-100 hover:bg-pink-600 mt-4 lg:mt-0">
              <span className="font-bold text-base md:text-lg">Apply now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
