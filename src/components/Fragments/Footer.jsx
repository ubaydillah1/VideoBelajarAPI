import { useState } from "react";
import FooterLinks from "../Elements/Footer Links";
import SocialMedia from "../Elements/Social Media";

const Footer = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  const handleToggle = (section) => {
    if (section === "kategori") {
      setShowCategory((prev) => !prev);
    } else if (section === "perusahaan") {
      setShowCompany((prev) => !prev);
    } else if (section === "komunitas") {
      setShowCommunity((prev) => !prev);
    }
  };

  return (
    <div className="w-100% flex justify-center mt-10 bg-white py-10 border-t border-[#3A35411F] w-full px-[20px]">
      <div className="md:max-w-[1200px] w-full">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="address-footer-content">
            <img src="img/logo-video.png" alt="logo" />

            <div className="mt-5">
              <p className="font-bold text-[14px] md:text-[18px] max-w-[352px]">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="text-[14px] my-2 md:text-[16px]">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="text-[14px] md:text-[16px]">+62-877-7123-1234</p>
            </div>
          </div>

          <div className="flex flex-col md:gap-[48px] md:flex-row gap-2">
            <div
              className="relative cursor-pointer md:cursor-auto"
              onClick={() => handleToggle("kategori")}
            >
              <b>Kategori</b>

              <div
                className={`${
                  showCategory ? "max-h-[500px]" : "max-h-0 overflow-hidden"
                } transition-all duration-500 md:max-h-full`}
              >
                <FooterLinks type="kategori" />
              </div>

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] md:hidden"
              />
            </div>
            <div
              className="relative cursor-pointer md:cursor-auto"
              onClick={() => handleToggle("perusahaan")}
            >
              <b>Perusahaan</b>

              <div
                className={`${
                  showCompany ? "max-h-[500px]" : "max-h-0 overflow-hidden"
                } transition-all duration-500 md:max-h-full`}
              >
                <FooterLinks type="perusahaan" />
              </div>

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] md:hidden"
              />
            </div>
            <div
              className="relative cursor-pointer md:cursor-auto"
              onClick={() => handleToggle("komunitas")}
            >
              <b>Komunitas</b>

              <div
                className={`${
                  showCommunity ? "max-h-[500px]" : "max-h-0 overflow-hidden"
                } transition-all duration-500 md:max-h-full`}
              >
                <FooterLinks type="komunitas" />
              </div>

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] md:hidden"
              />
            </div>
          </div>
        </div>

        <div className="border-t-2 mt-4 py-4 md:flex md:justify-between">
          <div className="social-media order-2">
            <SocialMedia />
          </div>

          <p className="text-text-dark-secondary mt-2 order-1">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
