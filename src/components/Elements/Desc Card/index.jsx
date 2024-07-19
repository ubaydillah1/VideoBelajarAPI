/* eslint-disable react/prop-types */
import Button from "../Button";

const DescCard = (props) => {
  const { children } = props;

  return (
    <div className="bg-white p-[20px] md:p-[24px] border rounded-[10px] border-[#3A35411F] md:w-[366px] mx-auto md:mx-0">
      {children}
    </div>
  );
};

const DescCardHeader = ({ src }) => {
  return (
    <img
      src={src}
      alt="image"
      className="rounded-[10px] w-[318px] h-[180px] object-cover mb-3"
    />
  );
};

const DescCardBody = (props) => {
  const { title, priceBefore, priceAfter, discount, timeLeft } = props;
  return (
    <>
      <h4 className="font-semibold text-[17.5px] leading-[21.6px] font-Poppins">
        {title}
      </h4>

      <div className="flex justify-between my-3">
        <div className="flex font-Poppins">
          <p className="text-primary font-semibold  text-[18px]">
            Rp {priceAfter}K
          </p>
          <p className="ml-2 text-text-dark-disabled line-through">
            Rp {priceBefore}K
          </p>
        </div>

        <div className="bg-secondary rounded-[10px] py-[4px] px-[10px] text-white text-[12px] max-w-[85px]">
          Diskon {discount}%
        </div>
      </div>

      <p className="text-info-default font-medium text-[13px] my-1">
        Penawaran spesial tersisa {timeLeft} hari lagi!
      </p>

      <Button
        classname="bg-primary text-white text-[14px] w-full h-[34px]"
        link="/method"
      >
        Beli Sekarang
      </Button>
    </>
  );
};

const DescCardFooter = () => {
  return (
    <div>
      <p className="text-text-dark-primary font-semibold text-[14.5px]">
        Kelas Ini Sudah Termasuk
      </p>

      <div className="flex mt-3 gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
            <img
              src="svg/File Check.svg"
              alt="filecheck"
              className="w-[24px] h-[24px]"
            />
            Ujian Akhir
          </div>
          <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
            <img
              src="svg/Book-2.svg"
              alt="Document"
              className="w-[24px] h-[24px]"
            />
            7 Dokumen
          </div>
          <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
            <img
              src="svg/File Edit.svg"
              alt="Edit File"
              className="w-[24px] h-[24px]"
            />
            Pretest
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
            <img
              src="svg/Video.svg"
              alt="Video"
              className="w-[24px] h-[24px]"
            />
            49 Video
          </div>
          <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
            <img
              src="svg/Certificate.svg"
              alt="Video"
              className="w-[24px] h-[24px]"
            />
            Sertifikat
          </div>
        </div>
      </div>

      <p className="text-text-dark-primary font-semibold text-[14.5px] my-3">
        Bahasa Pengantar
      </p>

      <div className="text-text-dark-secondary flex gap-2 items-center text-[14px]">
        <img src="svg/Language.svg" alt="Video" className="w-[24px] h-[24px]" />
        Bahasa Indonesia
      </div>
    </div>
  );
};

DescCard.Header = DescCardHeader;
DescCard.Body = DescCardBody;
DescCard.Footer = DescCardFooter;

export default DescCard;
