import Links from "./Links";

/* eslint-disable react/prop-types */
const FooterLinks = (props) => {
  const { type } = props;
  return (
    <div className=" md:block">
      <ul className="flex flex-col mt-2 gap-1">
        {type === "kategori" && (
          <>
            <Links to="/">Digital & Teknologi</Links>
            <Links to="/">Pemasaran</Links>
            <Links to="/">Manajemen Bisnis</Links>
            <Links to="/">Pengembangan Diri</Links>
            <Links to="/">Desain</Links>
          </>
        )}
        {type === "perusahaan" && (
          <>
            <Links to="/">Tentang Kami</Links>
            <Links to="/">FAQ</Links>
            <Links to="/">Kebijakan Privasi</Links>
            <Links to="/">Ketentuan Layanan</Links>
            <Links to="/">Bantuan</Links>
          </>
        )}
        {type === "komunitas" && (
          <>
            <Links to="/">Tips Sukses</Links>
            <Links to="/">Blog</Links>
          </>
        )}
      </ul>
    </div>
  );
};

export default FooterLinks;
