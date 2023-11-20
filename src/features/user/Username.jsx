import { useSelector } from "react-redux";
function Username() {
  const userName = useSelector((state) => state.user.userName);
  console.log(userName);
  return <p className="text-slate-800 hidden md:block">{userName}</p>;
}

export default Username;
