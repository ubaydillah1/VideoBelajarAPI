const DescriptionLayouts = ({ title, children, classname }) => {
  return (
    <div className="bg-white p-[20px] md:p-[24px] border rounded-[10px] border-[#3A35411F] w-full">
      <h3 className="font-semibold text-[18px] md:text-[20px] font-Poppins leading-[21.6px]">
        {title}
      </h3>

      <div className={classname}>{children}</div>
    </div>
  );
};

export default DescriptionLayouts;
