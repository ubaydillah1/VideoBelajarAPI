const Card = (props) => {
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
      <div className="border border-[#3A35411F] rounded-[10px] overflow-hidden flex gap-2 p-[16px] relative sm:block max-w-[384px] sm:p-[20px] cursor-pointer">
        <div>
          <img
            src={src}
            alt="image card"
            className="rounded-[10px] h-[82px] min-w-[82px] object-cover sm:w-full sm:h-[193px]"
          />
          <div className="star-wrapper flex gap-0.5 mt-2 absolute sm:bottom-5 bottom-4">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#FCE91B"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#FCE91B"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#FCE91B"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#FCE91B"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#FCE91B"
              />
            </svg>
            <p className="absolute -right-[50px] text-[12px] text-text-dark-secondary underline">
              3.5 (86)
            </p>
          </div>
        </div>
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

export default Card;
