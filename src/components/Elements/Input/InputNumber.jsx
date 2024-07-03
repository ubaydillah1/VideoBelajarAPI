import Label from "./Label";

const InputNumber = (props) => {
  const { name } = props;
  return (
    <div className="my-5">
      <Label name={name}>No. Hp</Label>
      <div className="flex gap-8 mt-2">
        <div className="flex relative">
          <div className="w-[44px] h-[48px] flex justify-center items-center bg-[#F4F5FA] rounded-l-[6px]  border border-[#3A35411F]">
            <img
              src="img/Indonesia (ID).png"
              className=" w-[24px] h-[24px]"
              alt="flag"
            />
          </div>
          <select className="w-[112px] h-[48px] border border-[#3A35411F] rounded-r-[6px] pl-2 appearance-none bg-[url('svg/keyboard_arrow_down.svg')] bg-no-repeat bg-[80px] border-l-0 focus:outline-[#3ECF4C]">
            <option value="+62">+62</option>
            <option value="+90">+90</option>
          </select>
        </div>

        <input
          type="tel"
          placeholder="Enter phone number"
          className="px-[8px] h-[48px] border border-[#F1F1F1] w-full border-[#3A35411F] rounded-[6px] focus:outline-[#3ECF4C]"
          id={name}
        />
      </div>
    </div>
  );
};

export default InputNumber;
