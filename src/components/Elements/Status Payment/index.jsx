/* eslint-disable react/prop-types */
import Button from "../Button";

const StatusPayment = (props) => {
  const { children, title, src } = props;
  return (
    <div className="w-full max-w-[608px] bg-white border border-[#3A35411F] rounded-[12px] px-[36px] py-[24px] text-center">
      <img src={src} alt="status img" className="" />
      <div>
        <h2 className="text-[20px] md:text-[24px] font-bold font-Poppins">
          {title}
        </h2>
        <p className="md:text-[18px] my-3 text-text-dark-secondary">
          {children}
        </p>
        <Button classname="bg-primary text-white md:max-w-[213px] w-full">
          Lihat Detail Pesanan
        </Button>
      </div>
    </div>
  );
};

export default StatusPayment;
