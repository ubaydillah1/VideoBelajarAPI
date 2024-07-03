const Profile = () => {
  return (
    <div>
      <div className="hidden items-center gap-7 md:flex">
        <p className="text-text-dark-secondary">Kategori</p>
        <img src="img/Avatar.png" alt="avatar" />
      </div>

      <div className="flex flex-col justify-between h-5 md:hidden">
        <span className="w-[27px] h-[3px] bg-[#4A505C]"></span>
        <span className="w-[27px] h-[3px] bg-[#4A505C]"></span>
        <span className="w-[27px] h-[3px] bg-[#4A505C]"></span>
      </div>
    </div>
  );
};
export default Profile;
