import { Link } from "react-router-dom";
import Search from "../features/order/Search";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-between items-center bg-yellow-500 uppercase px-4 py-4 border-b border-stone-500">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>

      <Search />
      <Username />
    </header>
  );
}

export default Header;
