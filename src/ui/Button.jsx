const Button = ({ children, disabled, type }) => {
  const base =
    "bg-yellow-400 rounded-full transition-colors duration-300 uppercase tracking-wide text-stone-600 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-400 focus:ring-offset-2";

  const style = {
    primary: `${base} px-4 py-2`,
    small: `${base} px-2 py-2 text-sm`,
  };
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
};

export default Button;
