/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Profile from "./Profile";

const NavbarElements = (props) => {
  const { typeNav } = props;
  return (
    <div className="flex justify-between items-center w-full sm:max-w-[1200px]">
      {typeNav === undefined && <Logo />}
      {typeNav === "profileNav" && (
        <>
          <Logo />
          <Profile />
        </>
      )}
    </div>
  );
};

export default NavbarElements;
