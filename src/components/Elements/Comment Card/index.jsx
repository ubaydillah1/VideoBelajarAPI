import Stars from "../Card/Stars";

const CommentCard = ({ stars = false }) => {
  return (
    <div className="p-[16px] bg-white border rounded-[10px]">
      <div className="flex gap-[10px]">
        <img
          src="img/Avatar Comment.png"
          alt="avatar"
          className="w-[40px] h-[40px]"
        />

        <div>
          <b className="font-medium leading-[22.4px] text-[15px]">
            Gregorius Edrik Lawanto
          </b>
          <p className="text-text-dark-secondary leading-[19.6px] text-[15px]">
            Senior Talent Acquisition
          </p>
        </div>
      </div>

      <p className="my-2 text-[14px]">
        Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
        sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia
        (Sayap Mas Utama) selama hampir 1 tahun.
      </p>

      <div className={`${stars ? "block" : "hidden"}`}>
        <Stars img={!stars} />
      </div>
    </div>
  );
};

export default CommentCard;
