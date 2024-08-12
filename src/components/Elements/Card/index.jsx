import Stars from "./Stars";

/* eslint-disable react/prop-types */
const CardProduct = (props) => {
  const {
    children,
    image,
    avatar,
    name,
    price,
    jobPosition,
    title,
    workplace,
    onEdit,
    onDelete,
  } = props;

  function handleClick() {
    window.location.href = "/detail";
  }

  return (
    <div
      className="border border-[#3A35411F] rounded-[10px] overflow-hidden flex gap-2 p-[16px] relative sm:block max-w-[384px] sm:p-[20px] cursor-pointer bg-white md:mx-0 mx-auto h-full sm:max-w-[384px] sm:w-full"
      onClick={handleClick}
    >
      <Stars src={image} />
      <div className="flex flex-col justify-between sm:mt-3 gap-1">
        <h3 className="text-text-dark font-bold leading-[19.6px] text-[16px] font-Poppins sm:text-[18px] sm:mb-2">
          {title}
        </h3>

        <p className="hidden sm:block sm:line-clamp-2 sm:text-text-dark-secondary">
          {children}
        </p>
        <div className="profile-card flex gap-2 sm:my-3 mt-1">
          <img
            src={avatar}
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
        <div className="flex gap-5 justify-between my-2">
          <button
            className="px-[20px] py-[1px] rounded-[10px] text-white font-Poppins font-bold md:mb-4 bg-green-400"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit();
            }}
          >
            Ubah
          </button>
          <button
            className="px-[20px] py-[1px] rounded-[10px] text-white font-Poppins font-bold md:mb-4 bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete();
            }}
          >
            Hapus
          </button>
        </div>
        <p className="text-end leading-3 font-Poppins font-semibold text-primary sm:text-[24px] text-[20px] mt-1.5 sm:mt-0">
          Rp {price}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
