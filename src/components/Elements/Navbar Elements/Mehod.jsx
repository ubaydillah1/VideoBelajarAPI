/* eslint-disable react/prop-types */
const Method = (props) => {
  const { type } = props;
  return (
    <div className="flex md:gap-6 gap-3 justify-center">
      <div className="flex items-center gap-2 relative">
        <div
          className={`w-[30px] h-[30px] rounded-full border-[4px] flex justify-center items-center relative ${
            type === "start" ? "border-primary" : "bg-primary border-primary"
          }`}
        >
          <div
            className={
              type === "start"
                ? "w-[16px] h-[16px] bg-primary rounded-full"
                : "w-[16px] h-[16px] rounded-full"
            }
          >
            <img
              src="svg/Check.svg"
              alt="check"
              className={type === "start" ? "hidden" : "block"}
            />
          </div>
        </div>
        <p
          className={`font-bold text-[12px] md:text-[14px] ${
            type !== "start" && "text-text-dark-disabled"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          Pilih Metode
        </p>
      </div>
      <div className="flex items-center gap-2 relative">
        <div
          className={`border-t-[3px] border-text-dark-disabled md:w-[74px] w-[12px] md:text-[14px] -mr-2 ${
            type === "start" && "border-text-dark-disabled"
          } ${type === "proccess" && "bg-primary"} ${
            type === "end" && "bg-primary"
          }`}
        ></div>
        <div
          className={`w-[30px] h-[30px] rounded-full border-[4px] flex justify-center items-center relative ${
            type === "start" && "border-text-dark-disabled"
          } ${type === "proccess" && "border-primary"} ${
            type === "end" && "bg-primary border-primary"
          }`}
        >
          <div
            className={`${
              type === "start" &&
              "w-[16px] h-[16px] bg-text-dark-disabled rounded-full"
            } ${
              type === "proccess" && "w-[16px] h-[16px] bg-primary rounded-full"
            } 
  `}
          >
            <img
              src="svg/Check.svg"
              alt="check"
              className={type === "end" ? "block" : "hidden"}
            />
          </div>
        </div>
        <p
          className={`${
            type !== "proccess" && "text-text-dark-disabled"
          } font-bold text-[12px] md:text-[14px]`}
        >
          Bayar
        </p>
      </div>
      <div className="flex items-center gap-2 relative">
        <div
          className={`border-t-[3px]  md:w-[74px] w-[12px] md:text-[14px] -mr-2 ${
            type !== "end" ? "border-text-dark-disabled" : "border-primary"
          }`}
        ></div>
        <div
          className={`w-[30px] h-[30px] rounded-full border-[4px] flex justify-center items-center relative ${
            type !== "end" ? "border-text-dark-disabled" : "border-primary"
          }
          }`}
        >
          <div
            className={`w-[16px] h-[16px] ${
              type !== "end" ? "bg-text-dark-disabled" : "bg-primary"
            } rounded-full`}
          ></div>
        </div>
        <p
          className={` ${
            type !== "end" && "text-text-dark-disabled"
          } font-bold text-[12px] md:text-[14px]`}
        >
          Selesai
        </p>
      </div>
    </div>
  );
};

export default Method;
