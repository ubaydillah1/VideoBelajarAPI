import Button from "../components/Elements/Button";
import ContentLayouts from "../components/Layouts/ContentLayouts";

const OrderPage = () => {
  return (
    <ContentLayouts typeNav="profileNav">
      <div className="my-[30px] md:mb-[70px] md:mt-[130px] flex md:gap-[36px] flex-col md:flex-row gap-6 sm:max-w-[1200px] mx-auto  justify-between ">
        <div>
          <b className="font-Poppins text-[20px]">Daftar Pesanan</b>
          <p className="text-text-dark-secondary mt-2">
            Informasi terperinci mengenai pembelian
          </p>
          <div className="bg-white md:p-[24px] p-[20px] border border-[#3A35411F] rounded-[10px] mt-4">
            <Button classname="flex items-center gap-3 text-text-dark-disabled font-bold text-[18px] w-full my-0 p-[12px]">
              <img src="svg/ProfileIcon.svg" alt="profile"></img> Profil Saya
            </Button>
            <Button classname="flex items-center gap-3 text-text-dark-disabled font-bold text-[18px] w-full p-[12px]">
              <img src="svg/ClassBookIcon.svg" alt="profile"></img> Kelas Saya
            </Button>
            <Button classname="flex items-center gap-3 text-secondary font-bold text-[18px] w-full my-0 bg-secondary-100 border p-[12px] border-secondary rounded-[4px]">
              <img src="svg/ShoppingBasketIcon.svg" alt="profile"></img>{" "}
              <p>Pesanan Saya</p>
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </ContentLayouts>
  );
};

export default OrderPage;
