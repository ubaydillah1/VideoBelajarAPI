/* eslint-disable react/prop-types */
const Stars = ({ src, img = true }) => {
  return (
    <div>
      <img
        src={src}
        alt="image card"
        className={`rounded-[10px] h-[82px] min-w-[82px] object-cover sm:w-full sm:h-[193px] ${
          img ? "inline" : "hidden"
        }`}
      />
      <div
        className={`star-wrapper flex gap-0.5 ${
          img ? "absolute sm:bottom-5 bottom-4 mt-2" : "block"
        }`}
      >
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
        <p
          className={`text-[12px] ${
            img
              ? "text-text-dark-secondary absolute -right-[50px]"
              : "text-text-light-secondary ml-2"
          } underline`}
        >
          3.5 (86)
        </p>
      </div>
    </div>
  );
};

export default Stars;
