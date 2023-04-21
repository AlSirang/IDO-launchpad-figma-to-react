import cardImage from "@/assets/placeholders/png.png";

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
    <div className="rounded-lg bg-cdark-500">
      <div className="p-3">
        <div className="pl-3">
          <div>
            <img
              src={cardImage}
              alt="pool logo"
              className="object-cover w-full h-full max-h-[100px] max-w-[100px]  rounded-lg"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
