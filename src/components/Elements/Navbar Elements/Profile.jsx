/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [showNavProfile, setShowNavProfile] = useState(false);

  const handleNavProfile = () => {
    setShowNavProfile(!showNavProfile);
  };

  return (
    <div>
      <div className="items-center gap-7 md:flex md:relative">
        <LinkProfile
          classname="text-text-dark-secondary hidden md:block border-none"
          to="/products"
        >
          Kategori
        </LinkProfile>
        <img
          src="img/Avatar.png"
          alt="avatar"
          onClick={handleNavProfile}
          className="hidden md:block cursor-pointer"
        />

        <div
          className={`${
            showNavProfile ? "block" : "hidden"
          } absolute shadow-2xl left-0 right-0 top-[60px] md:-left-[66px] md:top-[57px]`}
        >
          <div className="flex flex-col shadow-lg md:w-[200px]">
            <LinkProfile
              classname={"text-text-dark-secondary md:hidden"}
              to="/products"
            >
              Kategori
            </LinkProfile>
            <LinkProfile classname={"text-text-dark-secondary"}>
              Profil Saya
            </LinkProfile>
            <LinkProfile classname={"text-text-dark-secondary"}>
              Kelas Saya
            </LinkProfile>
            <LinkProfile classname={"text-text-dark-secondary"}>
              Pesanan Saya
            </LinkProfile>
            <LinkProfile classname={"text-red-500"} to="/login">
              Keluar{" "}
              <img
                src="svg/Exit Button.svg"
                alt="exit"
                className="inline ml-1"
              />
            </LinkProfile>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between md:hidden h-full cursor-pointer">
        <img
          src="/svg/Hamburger.svg"
          alt="hamburger button"
          onClick={handleNavProfile}
        />
      </div>
    </div>
  );
};

const LinkProfile = ({ children, classname, to }) => {
  return (
    <div className={`bg-white border px-[12px] ${classname} `}>
      <Link to={to} className="inline-block w-full h-full py-[16px]">
        {children}
      </Link>
    </div>
  );
};

export default Profile;
