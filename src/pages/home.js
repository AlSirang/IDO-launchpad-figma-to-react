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

export const Home = () => {
  return (
    <RootLayout>
      <Container>
        <section className="mt-20">
          <div className="max-w-[600px]">
            <h2 className="text-4xl md:text-5xl leading-snug font-bold bg-gradient-to-b from-[#CC0695] to-[#EFD4E8]  bg-clip-text text-transparent">
              Your journey to decentralized success starts here
            </h2>

            <p className="font-bold text-gray-200 text-base md:text-lg leading-6 mt-5">
              A new way of investing:Our IDO launchpad offers you the
              opportunity to invest in a decentralized, secure and transparent
              manner.
            </p>
          </div>

          <div className="max-w-4xl m-auto w-full mt-20 md:mt-32">
            <div className="flex flex-col items-center justify-center ">
              <h3 className="text-xl md:text-2xl font-semibold">
                Easy to join with 5 steps
              </h3>
              <div className="border border-cpink-100 rounded mt-5">
                <div className="flex md:flex-nowrap flex-wrap md:justify-start justify-center gap-6 py-3 px-6">
                  <span className="col-span-2 self-center">
                    <h6 className="px-8 cursor-default whitespace-nowrap">
                      Stake
                    </h6>
                  </span>
                  <span className="col-span-2 self-center">
                    <h6 className="px-8 cursor-default whitespace-nowrap">
                      KYC
                    </h6>
                  </span>
                  <span className="col-span-2 self-center">
                    <h6 className="px-8 cursor-default whitespace-nowrap">
                      Apply whitelist
                    </h6>
                  </span>
                  <span className="col-span-2 self-center">
                    <h6 className="px-8 cursor-default whitespace-nowrap">
                      Swap
                    </h6>
                  </span>
                  <span className="col-span-2 self-center">
                    <h6 className="px-8 cursor-default whitespace-nowrap">
                      Claim
                    </h6>
                  </span>
                </div>
              </div>
            </div>

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
          </div>
        </section>
      </Container>
    </RootLayout>
  );
};
