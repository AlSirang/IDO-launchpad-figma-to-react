import { Container, SupportedChains } from "@/components/ui";
import { PoolCard } from "@/components/pool-card";
import { ApplyNowBanner } from "@/components/apply-now-banner";
import { useScrollToTop } from "@/src/hooks/useScroll";

export default function Home() {
  useScrollToTop();
  return (
    <Container>
      <section className="mt-20 max-w-[600px]">
        <h2 className="text-4xl md:text-5xl leading-snug font-bold bg-gradient-to-b from-[#CC0695] to-[#EFD4E8]  bg-clip-text text-transparent">
          Your journey to decentralized success starts here
        </h2>

        <p className="font-bold text-gray-200 text-base md:text-lg leading-6 mt-5">
          A new way of investing:Our IDO launchpad offers you the opportunity to
          invest in a decentralized, secure and transparent manner.
        </p>
      </section>
      <section className="max-w-2xl m-auto w-full mt-20 md:mt-32">
        <div className="flex flex-col items-center justify-center ">
          <h3 className="text-xl md:text-2xl font-semibold">
            Easy to join with 5 steps
          </h3>
          <div className="border border-cpink-100 rounded mt-5">
            <div className="grid grid-cols-10 gap-1 md:gap-6 py-3 md:px-6 px-1">
              <span className="col-span-2 inline-grid place-content-center">
                <h6 className="md:px-8 text-sm cursor-default whitespace-nowrap">
                  Stake
                </h6>
              </span>
              <span className="col-span-2">
                <h6 className="md:px-8 text-sm cursor-default whitespace-nowrap">
                  KYC
                </h6>
              </span>
              <span className="col-span-2 inline-grid place-content-around">
                <h6 className="md:px-8 text-sm cursor-default whitespace-nowrap ">
                  Apply whitelist
                </h6>
              </span>
              <span className="col-span-2 inline-grid place-content-end">
                <h6 className="md:px-8 text-sm cursor-default whitespace-nowrap ">
                  Swap
                </h6>
              </span>
              <span className="col-span-2 inline-grid place-content-center">
                <h6 className="md:px-8 text-sm cursor-default whitespace-nowrap ">
                  Claim
                </h6>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl m-auto w-full mt-20 md:mt-32">
        <div className="bg-gradient-to-b from-cdark-normal to-cdark-light rounded mt-20 overflow-hidden">
          <div className="h-28 md:px-5 px-1 relative flex">
            <SupportedChains className="animate-move-top top-[25px]" />
            <SupportedChains className="animate-move-bottom top-[25px]" />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-32">
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
        </div>
      </section>

      <ApplyNowBanner />

      <section className="max-w-7xl m-auto w-full mt-20 md:mt-32">
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-bold">Partners</h3>
        </div>

        <div className="bg-gradient-to-r from-cpink-dark to-cdark-light rounded">
          <div className="py-8 md:px-16 px-10">
            <div className="flex justify-center">
              <p className="font-bold text-3xl md:text-6xl flex items-center">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
