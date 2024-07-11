const SocialMedia = () => {
  return (
    <div className="flex gap-3">
      <div className="w-[35px] h-[35px] border-[1.5px] border-text-dark-primary flex justify-center items-center rounded-full">
        <a href="#">
          <img src="svg/Linkedln.svg" alt="instagram" />
        </a>
      </div>
      <div className="w-[35px] h-[35px] border-[1.5px] border-text-dark-primary flex justify-center items-center rounded-full">
        <a href="#">
          <img src="svg/Facebook.svg" alt="instagram" />
        </a>
      </div>
      <div className="w-[35px] h-[35px] border-[1.5px] border-text-dark-primary flex justify-center items-center rounded-full">
        <a href="#">
          <img src="svg/Instagram.svg" alt="instagram" />
        </a>
      </div>
      <div className="w-[35px] h-[35px] border-[1.5px] border-text-dark-primary flex justify-center items-center rounded-full">
        <a href="#">
          <img src="svg/Twitter.svg" alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
