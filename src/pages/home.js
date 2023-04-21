import { Container } from "@/components/container";
import { RootLayout } from "@/layouts/root.layout";
import {
  ArbiIcon,
  AvalancheIcon,
  BinanceIcon,
  EthereumIcon,
  MoonbeamIcon,
  PolkadotIcon,
} from "@/icons";
import { PoolCard } from "@/components/pool-card";

export const Home = () => {
  return (
    <RootLayout>
      <Container>
        <section className="mt-20 max-w-[600px]">
          <h2 className="text-4xl md:text-5xl leading-snug font-bold bg-gradient-to-b from-[#CC0695] to-[#EFD4E8]  bg-clip-text text-transparent">
            Your journey to decentralized success starts here
          </h2>

          <p className="font-bold text-gray-200 text-base md:text-lg leading-6 mt-5">
            A new way of investing:Our IDO launchpad offers you the opportunity
            to invest in a decentralized, secure and transparent manner.
          </p>
        </section>
        <section className="max-w-4xl m-auto w-full mt-20 md:mt-32">
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-xl md:text-2xl font-semibold">
              Easy to join with 5 steps
            </h3>
            <div className="border border-cpink-100 rounded mt-5">
              <div className="grid grid-cols-10 gap-6 py-3 px-6">
                <span className="md:col-span-2 col-span-5 self-center">
                  <h6 className="px-8 cursor-default whitespace-nowrap">
                    Stake
                  </h6>
                </span>
                <span className="md:col-span-2 col-span-5 self-center">
                  <h6 className="px-8 cursor-default whitespace-nowrap">KYC</h6>
                </span>
                <span className="md:col-span-2 col-span-5 self-center">
                  <h6 className="px-8 cursor-default whitespace-nowrap">
                    Apply whitelist
                  </h6>
                </span>
                <span className="md:col-span-2 col-span-5 self-center">
                  <h6 className="px-8 cursor-default whitespace-nowrap">
                    Swap
                  </h6>
                </span>
                <span className="md:col-span-2 col-span-full self-center">
                  <h6 className="px-8 cursor-default whitespace-nowrap">
                    Claim
                  </h6>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl m-auto w-full mt-20 md:mt-32">
          <div className="bg-gradient-to-b from-cdark-normal to-cdark-light rounded mt-20">
            <div className="py-8 px-5">
              <div className="grid grid-cols-12 gap-6">
                <span className="col-span-6 md:col-span-2 self-center">
                  <BinanceIcon />
                </span>
                <span className="col-span-6 md:col-span-2 self-center">
                  <MoonbeamIcon />
                </span>
                <span className="col-span-6 md:col-span-2 self-center">
                  <PolkadotIcon />
                </span>
                <span className="col-span-6 md:col-span-2 self-center">
                  <ArbiIcon />
                </span>
                <span className="col-span-6 md:col-span-2 self-center">
                  <AvalancheIcon />
                </span>
                <span className="col-span-6 md:col-span-2 self-center">
                  <EthereumIcon />
                </span>
              </div>
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

        <section className="max-w-7xl m-auto w-full mt-20 md:mt-32">
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-bold">Partners</h3>
          </div>

          <div className="bg-gradient-to-r from-cpink-light to-cdark-light rounded">
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
    </RootLayout>
  );
};
