export const TimelineSectoin = ({ text }) => {
  return (
    <div className="relative  pb-5">
      <h2 className="font-bold text-lg md:text-xl">{text}</h2>

      <div className="absolute left-[50%] -bottom-[17px] translate-x-[-50%]">
        <span className="inline-block w-[20px] h-[20px] bg-white rounded-full"></span>
      </div>

      <div className="absolute bottom-[-80px]">
        <p className="whitespace-nowrap text-sm">From 11:00, 02 Mar 2023</p>
        <p className="whitespace-nowrap text-sm">To 10:00, 05 Mar 2023</p>
      </div>
    </div>
  );
};
