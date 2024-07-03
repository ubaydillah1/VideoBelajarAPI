import NavbarElements from "../Elements/Navbar Elements";

const Navbar = (props) => {
  const { type } = props;
  return (
    <nav className="w-full bg-white sm:shadow-sm fixed z-50 shadow-xl py-[16px]  flex justify-center items-center right-0 left-0 px-[24px]">
      <NavbarElements type={type} />
    </nav>
  );
};

export default Navbar;
