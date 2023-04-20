import classnames from "classnames";

export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={classnames("max-w-[100rem] m-auto w-full px-5 ", className)}
    >
      {children}
    </div>
  );
};
