import Stars from "./Stars";

/* eslint-disable react/prop-types */
const CardProduct = (props) => {
  const {
    type,
    children,
    src,
    srcProfile,
    name,
    price,
    jobPosition,
    title,
    workplace,
  } = props;
  return (
    type && (
      <div className="border border-[#3A35411F] rounded-[10px] overflow-hidden flex gap-2 p-[16px] relative sm:block max-w-[384px] sm:p-[20px] cursor-pointer  bg-white md:mx-0 mx-auto">
        <Stars src={src} />
        <div className="flex flex-col justify-between sm:mt-3 gap-1">
          <h3 className="text-text-dark font-bold leading-[19.6px] text-[16px] font-Poppins sm:text-[18px] sm:mb-2">
            {title}
          </h3>

          <p className="hidden sm:block sm:line-clamp-2 sm:text-text-dark-secondary">
            {children}
          </p>

          <div className="profile-card flex gap-2 sm:my-3 mt-1">
            <img
              src={srcProfile}
              alt="avatar"
              className="w-[36px] h-[36px] rounded-[10px] sm:w-[40px] sm:h-[40px]"
            />

            <div className="profile-content-card">
              <p className="text-[14px] text-text-dark">{name}</p>
              <p className="text-[12px] text-text-dark-secondary">
                {jobPosition}{" "}
                <span className="hidden sm:inline">
                  di{" "}
                  <strong className="text-text-dark-secondary">
                    {workplace}
                  </strong>
                </span>
              </p>
            </div>
          </div>
          <p className="text-end leading-3 font-Poppins font-semibold text-primary sm:text-[24px] text-[20px] mt-1.5 sm:mt-0">
            Rp {price}
          </p>
        </div>
      </div>
    )
  );
};

export default CardProduct;
