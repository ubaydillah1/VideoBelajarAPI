const TabsCategory = () => {
  return (
    <>
      <ul
        className="flex overflow-auto gap-10 whitespace-nowrap sm:my-10"
        style={{ scrollbarWidth: "none" }}
      >
        <li className="text-tertiary font-medium">
          <a href="#" className="text-inherit">
            Semua kelas
          </a>
        </li>
        <li className="text-text-dark-secondary">
          <a href="#" className="text-inherit">
            Pemasaran
          </a>
        </li>
        <li className="text-text-dark-secondary">
          <a href="#" className="text-inherit">
            Desain
          </a>
        </li>
        <li className="text-text-dark-secondary">
          <a href="#" className="text-inherit">
            Pengembangan Diri
          </a>
        </li>
        <li className="text-text-dark-secondary">
          <a href="#" className="text-inherit">
            Bisnis
          </a>
        </li>
      </ul>
      <span className=" w-[52px] h-[6px] rounded-[10px] bg-tertiary -bottom-4 absolute"></span>
    </>
  );
};

export default TabsCategory;
