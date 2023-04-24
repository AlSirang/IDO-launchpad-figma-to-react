import classnames from "classnames";

export const Container = ({ children, className = "" }) => {
  return (
    <div className={classnames("max-w-7xl m-auto w-full px-5 ", className)}>
      {children}
    </div>
  );
};

export const DarkBackground = ({ className = "", children }) => {
  return (
    <div
      className={classnames(
        "bg-gradient-to-r from-[#09081a70] to-cdark-500",
        className
      )}
    >
      {children}
    </div>
  );
};
