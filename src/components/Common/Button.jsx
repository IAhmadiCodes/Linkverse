import className from "classnames";
import { GoSync } from "react-icons/go";

export default function Button({ type, children, loading, ...rest }) {
  const classes = className(
    rest.className,
    "rounded-md py-3 px-6 border-none text-white bg-black"
  );

  return (
    <button type={type} {...rest} className={classes}>
      {loading ? (
        <GoSync className="animate-spin mx-auto text-2xl" />
      ) : (
        children
      )}
    </button>
  );
}
