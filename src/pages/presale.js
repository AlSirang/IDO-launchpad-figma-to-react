import { Container } from "@/components/ui";
import cardImage from "@/assets/placeholders/png.png";
import {
  DiscordIcon,
  GlobalIcon,
  SvgTelegramIcon,
  SvgTwitterIcon,
} from "@/icons";
import { TimelineSectoin } from "@/components/presale-ui";
import { DarkBackground } from "@/components/ui";
import { ApplyNowBanner } from "@/components/apply-now-banner";

export default function Presale() {
  return (
    <>
      <Container>
        <section className="max-w-6xl mt-20 grid gap-3 md:flex md:justify-between m-auto items-center">
          <div className="flex gap-4 items-center">
            <img
              src={cardImage}
              alt="pool logo"
              className="object-cover w-full h-full max-h-[150px] max-w-[150px] rounded-lg"
            />
            <p className="font-bold text-lg md:text-xl">Project Name</p>
          </div>
          <div className="rounded-lg bg-cdark-500 inline-block h-fit w-fit">
            <div className="flex py-2 px-3 items-center gap-2">
              <GlobalIcon />
              <SvgTelegramIcon />
              <SvgTwitterIcon />
              <DiscordIcon />
            </div>
          </div>
        </section>

        <DarkBackground className="px-5 py-8 rounded-lg h-56 mt-8">
          <div className="grid grid-cols-12 border-b max-w-6xl m-auto">
            <span className="col-span-3 inline-grid place-content-center">
              <TimelineSectoin text="Whitelist start" />
            </span>
            <span className="col-span-3 inline-grid place-content-center">
              <TimelineSectoin text="Sale Start" />
            </span>
            <span className="col-span-3 inline-grid place-content-center">
              <TimelineSectoin text="FCFS start" />
            </span>
            <span className="col-span-3 inline-grid place-content-center">
              <TimelineSectoin text="End time" />
            </span>
          </div>
        </DarkBackground>

        <div className="grid grid-cols-12 gap-3 mt-4">
          <div className="col-span-12 md:col-span-8 grid gap-2">
            <DarkBackground className="px-8 py-6 rounded-lg">
              <div className="grid gap-3 tablet:flex tablet:justify-between items-center">
                <p>Whitelist ends after</p>
                <div className="flex gap-2">
                  <div className="text-sm">
                    <p>00</p>
                    <p>Days</p>
                  </div>
                  <div className="text-sm">
                    <p>00</p>
                    <p>Hours</p>
                  </div>
                  <div className="text-sm">
                    <p>00</p>
                    <p>Min</p>
                  </div>
                  <div className="text-sm">
                    <p>00</p>
                    <p>Sec</p>
                  </div>
                </div>
                <div className="block md:inline-block">
                  <button className="rounded-md bg-cpink-100 w-full hover:bg-pink-600 transition-all">
                    <span className="inline-block py-1 px-5 text-lg font-medium">
                      Apply whitelist
                    </span>
                  </button>
                </div>
              </div>
            </DarkBackground>

            <DarkBackground className="px-4 py-6 rounded-lg">
              <h2 className="font-semibold text-base md:text-xl">
                Project Info
              </h2>

              <div className="mt-4 pl-4">
                <ul className="list-disc  gap-1">
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Price per token
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        0.025 BUSD per ERC20
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Swap Amount
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        2,760,000 ERC20
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Total Raise
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        $90,000
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Claim Type
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        Claiming system
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Accepted Currency
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        BUSD
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Swap Network
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        Ethereum
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Token Claim Network
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        Ethereum
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="flex justify-between">
                      <h4 className="text-xs md:text-base font-semibold">
                        Vesting Schedule
                      </h4>
                      <p className="text-xs md:text-base font-semibold text-end">
                        25% at TGE, linear for 6 months
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </DarkBackground>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
      </Container>

      <div className="border-t border-cpink-100 mt-20" />

      {/* project intro */}
      <Container>
        <section className="mt-14">
          <DarkBackground className="rounded-lg inline-block">
            <p className="text-xl font-semibold inline-flex py-1 px-3">
              Project Introduction
            </p>
          </DarkBackground>

          <div className="grid gap-2 mt-4">
            <div>
              <h3 className="font-semibold text-lg">Background</h3>
              <p>
                [Provide some background information on the project, such as the
                problem it aims to solve or the opportunity it aims to
                capitalize on.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Objectives</h3>
              <p>
                [State the project's primary objectives and desired outcomes.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Target Audience</h3>
              <p>
                [Identify the primary audience for the project, such as
                customers, stakeholders, or team members.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Key Features</h3>
              <p>
                [Describe the key features of the project that differentiate it
                from existing solutions or alternatives.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Technical Overview</h3>
              <p>
                [Provide a high-level overview of the project's technical
                architecture, including any technologies or frameworks being
                used.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Team Members</h3>
              <p>[List the members of the project team and their roles.] </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Timeline</h3>
              <p>
                [Provide an overview of the project timeline, including major
                milestones and deadlines.]
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Conclusion</h3>
              <p>
                [Summarize the project's purpose, objectives, and expected
                outcomes, and reiterate the value it will deliver to its target
                audience.]
              </p>
            </div>
          </div>
        </section>

        <ApplyNowBanner />
      </Container>
    </>
  );
}
