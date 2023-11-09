import { Link } from "react-router-dom";

function LinkButton({ children, to, type }) {
  if (to === "-1") return;
  const base =
    "bg-yellow-400 rounded-full transition-colors duration-300 uppercase tracking-wide text-stone-600 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-400 focus:ring-offset-2";
  const style = {
    primary: `${base} px-4 py-2`,
    small: `${base} px-2 py-2 text-sm`,
  };

  return (
    <Link to={to} className={style[type]}>
      {children}
    </Link>
  );
}

export default LinkButton;
