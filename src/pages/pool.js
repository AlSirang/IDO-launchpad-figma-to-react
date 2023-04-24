import { Container } from "@/components/ui";
import { PoolCard, PoolCardLong } from "@/components/pool-card";
import { ApplyNowBanner } from "@/components/apply-now-banner";

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

        <ApplyNowBanner />
      </Container>
    </>
  );
}
