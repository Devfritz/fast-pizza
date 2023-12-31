import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <main className="flex justify-center">
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
