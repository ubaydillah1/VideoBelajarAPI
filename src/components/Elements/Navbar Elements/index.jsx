/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Profile from "./Profile";

const NavbarElements = (props) => {
  const { type } = props;
  return (
    <div className="flex justify-between items-center w-full sm:max-w-[1200px]">
      {type === undefined && <Logo />}
      {type === "profileNav" && (
        <>
          <Logo />
          <Profile />
        </>
      )}
    </div>
  );
};

export default NavbarElements;
