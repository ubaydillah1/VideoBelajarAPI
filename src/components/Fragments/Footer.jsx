import FooterLinks from "../Elements/Footer Links";
import SocialMedia from "../Elements/Social Media";

const Footer = () => {
  return (
    <div className="w-100% flex justify-center px-[24px] mt-10 bg-white py-10 border-t border-[#3A35411F] w-full">
      <div className="sm:max-w-[1200px] w-full">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="address-footer-content">
            <img src="img/logo-video.png" alt="logo" />

            <div className="mt-5">
              <p className="font-bold text-[14px] sm:text-[18px] max-w-[352px]">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="text-[14px] my-2 sm:text-[16px]">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="text-[14px] sm:text-[16px]">+62-877-7123-1234</p>
            </div>
          </div>

          <div className="flex flex-col md:gap-[48px] md:flex-row gap-2">
            <div className="relative">
              <b>Kategori</b>

              <FooterLinks type="kategori" />

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] sm:hidden"
              />
            </div>
            <div className="relative">
              <b>Perusahaan</b>

              <FooterLinks type="perusahaan" />

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] sm:hidden"
              />
            </div>
            <div className="relative">
              <b>Komunitas</b>

              <FooterLinks type="komunitas" />

              <img
                src="svg/Right Arrow.svg"
                alt="right arrow"
                className="absolute right-0 top-[7px] sm:hidden"
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
