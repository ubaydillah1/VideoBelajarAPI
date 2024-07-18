/* eslint-disable react/prop-types */
import NavbarElements from "../Elements/Navbar Elements";
import Method from "../Elements/Navbar Elements/Mehod";
import Profile from "../Elements/Navbar Elements/Profile";

const Navbar = (props) => {
  const { typeNav, type, marginTop } = props;
  return (
    <>
      <nav className="w-full bg-white sm:shadow-sm fixed z-50 shadow-xl py-[16px] flex justify-center items-center right-0 left-0 px-[20px] top-0">
        <NavbarElements typeNav={typeNav} type={type} />
        {typeNav === "method" && (
          <div className="md:hidden block">
            <Profile />
          </div>
        )}
      </nav>
      <div className={`md:hidden ${marginTop ? marginTop : "mt-[100px]"}`}>
        {typeNav === "method" && <Method type={type} />}
      </div>
    </>
  );
};

export default Navbar;
