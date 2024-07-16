const Pagination = () => {
  return (
    <div className="pagination flex mt-7 gap-1 md:justify-end">
      <div className="bg-bg-base w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px]">
        <img
          src="svg/Left Arrow Pagination.svg"
          alt="left arrow"
          className="w-[8px]"
        />
      </div>
      <div className="bg-secondary w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-white text-[14px] font-semibold">
        1
      </div>
      <div className=" w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-[14px] font-semibold text-text-dark-secondary">
        2
      </div>
      <div className=" w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-[14px] font-semibold text-text-dark-secondary">
        3
      </div>
      <div className=" w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-[14px] font-semibold text-text-dark-secondary">
        4
      </div>
      <div className=" w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-[14px] font-semibold text-text-dark-secondary">
        5
      </div>
      <div className=" w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px] text-[14px] font-semibold text-text-dark-secondary">
        6
      </div>
      <div className="bg-bg-base w-[38px] h-[38px] cursor-pointer flex justify-center items-center rounded-[4px]">
        <img
          src="svg/Right Arrow Pagination.svg"
          alt="left arrow"
          className="w-[8px]"
        />
      </div>
    </div>
  );
};

export default Pagination;
