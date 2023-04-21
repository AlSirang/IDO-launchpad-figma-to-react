import cardImage from "@/assets/placeholders/png.png";
import { EthereumLogo } from "@/icons";

export const PoolCard = () => {
  return (
    <div className="rounded-lg bg-cdark-500">
      <div className="p-3">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={cardImage}
            alt="pool logo"
            className="object-cover w-full h-full max-h-[200px]"
          />
        </div>

        <div className="mt-6 px-3 pb-3">
          <h3 className="font-medium text-lg">Project Name</h3>

          <div className="flex justify-between pt-3">
            <p className="text-sm">Total Raise</p>
            <p className="text-sm font-semibold">TBA</p>
          </div>

          <div className="mt-8">
            <button className="bg-cdark-normal rounded-md w-full hover:bg-cdark-150 transition-all">
              <span className="inline-block py-3 font-semibold">TBA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PoolCardLong = () => {
  return (
    <div className="rounded-lg bg-cdark-500 overflow-x-scroll scrollbar-hide">
      <div className="p-3">
        <div className="px-4 flex gap-5">
          <div className="w-[150px]">
            <img
              src={cardImage}
              alt="pool logo"
              className="object-cover h-full max-h-[180px] w-[150px] rounded-lg"
            />
          </div>

          <div className="w-[calc(100%-150px)] grid self-center">
            <div className="flex justify-between">
              <div className="w-40">
                <h2 className="text-cpink-100 font-bold mb-3">PUBLIC</h2>
                <p className="font-semibold">Project Name</p>
              </div>
              <div className="w-40 inline-grid place-content-center">
                <h3 className="mb-3">Partecipant</h3>
                <p className="font-semibold">3120</p>
              </div>
              <div className="w-40 inline-grid place-content-center">
                <h3 className="mb-3">Total Raised</h3>
                <p className="font-semibold">90.000</p>
              </div>
              <div className="w-40 inline-grid place-content-center">
                <h3 className="mb-3">Chain</h3>
                <span className="inline-flex justify-center items-center bg-white h-12 w-12 rounded-full">
                  <EthereumLogo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
