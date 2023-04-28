export const TimelineSectoin = ({ text }) => {
  return (
    <div className="relative pb-5">
      <div className="absolute tablet:left-[50%] -left-[1px] tablet:-bottom-[17px] top-0 tablet:top-auto translate-x-[-50%]">
        <span className="inline-block w-[20px] h-[20px] bg-white rounded-full"></span>
      </div>

      <div className="pl-5 tablet:pl-0">
        <h2 className="font-bold text-lg md:text-xl">{text}</h2>
        <div className="tablet:absolute  bottom-[-80px]">
          <p className="whitespace-nowrap text-sm">From 11:00, 02 Mar 2023</p>
          <p className="whitespace-nowrap text-sm">To 10:00, 05 Mar 2023</p>
        </div>
      </div>
    </div>
  );
};
