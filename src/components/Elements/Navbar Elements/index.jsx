/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Profile from "./Profile";
import Method from "./Mehod";

const NavbarElements = (props) => {
  const { typeNav, type } = props;
  return (
    <div className="flex justify-between items-center w-full sm:max-w-[1200px]">
      {typeNav === undefined && <Logo />}
      {typeNav === "profileNav" && (
        <>
          <Logo />
          <Profile />
        </>
      )}
      {typeNav === "method" && (
        <>
          <Logo />
          <div className="hidden md:block">
            <Method type={type} />
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarElements;
