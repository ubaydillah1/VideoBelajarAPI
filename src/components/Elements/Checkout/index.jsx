/* eslint-disable react/prop-types */
import Button from "../Button";

const Checkout = (props) => {
  const { title, children, total, cta } = props;
  return (
    <>
      <h3 className="font-semibold text-[18px] md:text-[20px]">{title}</h3>

      {children}

      <div className="text-text-dark-secondary mt-3">
        <div className="flex justify-between mt-3 border-t py-3 ">
          <p className="font-semibold text-black">Total Pembayaran</p>
          <p className="font-bold text-primary">Rp {total}</p>
        </div>

        {cta === "single" && (
          <Button classname="text-white bg-primary w-full text-[14px] md:text-[16px]">
            Beli Sekarang
          </Button>
        )}

        {cta === "double" && (
          <div className="flex md:gap-5 flex-col gap-3 md:flex-row my-3">
            <Button classname="border-2 border-primary w-full text-[14px] md:text-[16px] text-primary hover:bg-primary hover:text-white my-0">
              Ganti Metode Pembayaran
            </Button>
            <Button classname="text-white bg-primary w-full text-[14px] md:text-[16px] my-0">
              Beli Sekarang
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

const CheckoutBody = ({ children, price, classname }) => {
  return (
    <div className="text-text-dark-secondary">
      <div className="flex justify-between gap-3 mt-3">
        <p className={`md:max-w-[484px] max-w-[60%] ${classname}`}>
          {children}
        </p>
        <p className="font-bold">Rp {price}</p>
      </div>
    </div>
  );
};

Checkout.Body = CheckoutBody;

export default Checkout;
