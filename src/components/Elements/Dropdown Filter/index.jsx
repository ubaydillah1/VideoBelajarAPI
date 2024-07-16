import CheckboxLabel from "./CheckboxLabel";

const DropdownFilter = () => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="cursor-pointer border border-[rgba(58, 53, 65, 0.12)] relative rounded-[10px] bg-white py-[12px]">
        <div className="flex gap-3 text-primary font-medium px-[16px] ">
          <img src="svg/Bidang Studi.svg" alt="Bidang Studi" />
          <p>Bidang Studi</p>

          <img
            src="svg/Bottom Arrow Thin.svg"
            alt="bottom"
            className="absolute right-5 top-[20px]"
          />
        </div>

        <div className="container hidden md:block">
          <CheckboxLabel name="Pemasaran" />
          <CheckboxLabel name="Digital & Teknologi" />
          <CheckboxLabel name="Pengembangan Diri" />
          <CheckboxLabel name="Bisnis Manajemen" />
        </div>
      </div>

      <div className="cursor-pointer border border-[rgba(58, 53, 65, 0.12)] relative rounded-[10px] bg-white py-[12px]">
        <div className="flex gap-3 text-primary font-medium px-[16px] ">
          <img src="svg/Harga.svg" alt="Bidang Studi" />
          <p>Harga</p>

          <img
            src="svg/Bottom Arrow Thin.svg"
            alt="bottom"
            className="absolute right-5 top-[20px]"
          />
        </div>

        <div className="container hidden md:block">
          <CheckboxLabel name="Pemasaran" />
          <CheckboxLabel name="Digital & Teknologi" />
          <CheckboxLabel name="Pengembangan Diri" />
          <CheckboxLabel name="Bisnis Manajemen" />
        </div>
      </div>

      <div className="cursor-pointer border border-[rgba(58, 53, 65, 0.12)] relative rounded-[10px] bg-white py-[12px]">
        <div className="flex gap-3 text-primary font-medium px-[16px] ">
          <img src="svg/Durasi.svg" alt="Bidang Studi" />
          <p>Durasi</p>

          <img
            src="svg/Bottom Arrow Thin.svg"
            alt="bottom"
            className="absolute right-5 top-[20px]"
          />
        </div>

        <div className="container hidden md:block">
          <CheckboxLabel name="Kurang dari 4 Jam" type="circle" />
          <CheckboxLabel name="4 - 8 Jam" type="circle" />
          <CheckboxLabel name="Lebih dari 8 Jam" type="circle" />
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
