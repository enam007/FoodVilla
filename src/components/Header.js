import NavItems from "./NavItems";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="z-10 flex justify-between border-b border-yellow-200 shadow-md bg-slate-100 sticky top-0">
      <Logo />
      <NavItems />
    </div>
  );
};

export default Header;
