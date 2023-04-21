import { Container } from "@/components/container";
import { PoolCard, PoolCardLong } from "@/components/pool-card";

export default function Pool() {
  return (
    <>
      <Container>
        <section className="mt-20">
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-bold">Upcoming Pool</h3>
          </div>

          <div className="grid grid-cols-9 gap-3">
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
            <span className="col-span-12 md:col-span-3 inline-grid">
              <PoolCard />
            </span>
          </div>
        </section>
      </Container>

      <div className="border-t border-cpink-100 mt-20" />

      <Container>
        <section className="mt-14">
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-bold">Completed pool</h3>
          </div>

          <div className="grid gap-3">
            <PoolCardLong />
            <PoolCardLong />
            <PoolCardLong />
            <PoolCardLong />
            <PoolCardLong />
          </div>
        </section>

        <section className="max-w-6xl m-auto w-full mt-20 md:mt-32">
          <div className="bg-gradient-to-r from-cpink-light to-cdark-light rounded mt-20">
            <div className="py-8 md:px-16 px-10">
              <div className="flex justify-between md:flex-nowrap flex-wrap gap-3">
                <p className="font-bold text-xl md:text-2xl flex items-center">
                  Want to launch your project?
                </p>
                <button className="inline-block text-sm px-4 py-2 rounded transition-all text-white bg-cpink-100 hover:bg-pink-600 mt-4 lg:mt-0">
                  <span className="font-bold text-base md:text-lg">
                    Apply now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
