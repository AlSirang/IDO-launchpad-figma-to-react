import classnames from "classnames";

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
