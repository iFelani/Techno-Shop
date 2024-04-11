import { useLocation, Link } from "react-router-dom";
import HomeIcon from "../icons/Home";
import SquaresIcon from "../icons/Squares";
import CartIcon from "../icons/Cart";
import UserIcon from "../icons/User";

const MobileNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid h-14 grid-cols-4 items-center gap-x-3 bg-white px-3 text-center text-sm shadow xs:h-[72px] lg:hidden">
      <Link to="/">
        <HomeIcon solid={location.pathname === "/"} className="mx-auto size-7" />
        <span className="mt-1 hidden xs:block">خانه</span>
      </Link>
      <Link to="/categories">
        <SquaresIcon solid={location.pathname.startsWith("/categories")} className="mx-auto size-7" />
        <span className="mt-1 hidden xs:block">دسته‌بندی ها</span>
      </Link>
      <Link to="/me/cart">
        <CartIcon solid={location.pathname === "/me/cart"} className="mx-auto size-7" />
        <span className="mt-1 hidden xs:block">سبد خرید</span>
      </Link>
      <Link to="/me">
        <UserIcon solid={location.pathname.startsWith("/me") && location.pathname !== "/me/cart"} className="mx-auto size-7" />
        <span className="mt-1 hidden xs:block">حساب کاربری</span>
      </Link>
    </nav>
  );
};

export default MobileNavigation;