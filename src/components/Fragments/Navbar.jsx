/* eslint-disable react/prop-types */
import NavbarElements from "../Elements/Navbar Elements";

const Navbar = (props) => {
  const { typeNav } = props;
  return (
    <nav className="w-full bg-white sm:shadow-sm fixed z-50 shadow-xl py-[16px] flex justify-center items-center right-0 left-0 px-[20px] top-0">
      <NavbarElements typeNav={typeNav} />
    </nav>
  );
};

export default Navbar;
