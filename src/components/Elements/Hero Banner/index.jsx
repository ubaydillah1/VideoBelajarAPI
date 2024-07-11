/* eslint-disable react/prop-types */
import Button from "../Button";

const HeroBanner = (props) => {
  const { type } = props;
  return (
    <div>
      {type === "topHeroBanner" && (
        <>
          <div className="bg-hero-image-top bg-cover md:h-[400px] relative flex flex-col items-center justify-center rounded-[10px] overflow-hidden">
            <div className="w-full h-full bg-black opacity-80 absolute"></div>
            <div className="relative z-10 px-4 text-center text-white sm:max-w-[920px] py-[20px] h-full sm:h-auto ">
              <h1 className="text-2xl font-bold mb-4 text-[24px] sm:text-[48px] sm:leading-[52px] leading-[26.4px] font-Poppins">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>
              <p className="mb-4 text-[14px] sm:text-[16px]">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
              <Button classname="bg-primary text-[14px] sm:text-[16px] px-[3px] sm:px-7 font-normal sm:font-bold">
                Temukan Video Course untuk Dipelajari!
              </Button>
            </div>
          </div>
        </>
      )}

      {type === "bottomHeroBanner" && (
        <>
          <div className="bg-hero-image-top bg-cover md:h-[400px] relative flex flex-col items-center justify-center rounded-[10px] overflow-hidden py-[20px]">
            <div className="w-full h-full bg-black opacity-80 absolute"></div>
            <div className="relative z-10 px-4 text-center text-white sm:max-w-[920px] py-[20px] h-full sm:h-auto">
              <p className="text-text-light-secondary sm:text-[18px]">
                NEWSLETTER
              </p>
              <h1 className="text-2xl font-semibold mb-4 text-[24px] sm:text-[32px] sm:leading-[52px] leading-[26.4px] font-Poppins mt-2 ">
                Mau Belajar Lebih Banyak?
              </h1>
              <p className="mb-4 text-[14px] sm:text-[16px] text-bg-base sm:max-w-[525px]">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
              <div className="max-w-[525px] mt-9 relative">
                <input
                  type="text"
                  className="w-full h-[40px] text-[14px] text-text-dark-secondary px-[8px] text-center rounded-[10px] sm:text-left sm:pl-[32px] sm:h-[58px] sm:text-[16px]"
                  placeholder="Masukkan Emailmu"
                />
                <Button classname="bg-secondary h-[40px] w-full hover:opacity-80 sm:text-[16px] text-[14px] sm:h-[42px] sm:max-w-[132px] sm:absolute sm:right-3 sm:-top-[4px]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroBanner;
