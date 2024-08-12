import Banner from "../components/Elements/Banner";
import Breadcrumbs from "../components/Elements/Breadcrumbs";
import CardProduct from "../components/Elements/Card";
import CommentCard from "../components/Elements/Comment Card";
import DescCard from "../components/Elements/Desc Card";
import Dropdown from "../components/Elements/Dropdown";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import DescriptionLayouts from "../components/Layouts/DescriptionLayouts";

const DetailProductPage = () => {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Desain", href: "/" },
    {
      label:
        "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
    },
  ];
  return (
    <ContentLayouts typeNav="profileNav">
      <div className="mt-20 sm:max-w-[1200px] mx-auto md:mt-32 mb-10 md:mb-0">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-5">
          <Banner type="detailBanner" img={false} />

          <div className="flex md:gap-[36px] flex-col md:flex-row md:mt-10 gap-6">
            <div className="order-1 md:-order-1 flex flex-col gap-6 md:gap-[36px]">
              <DescriptionLayouts title="Deskripsi">
                <p className="text-text-dark-secondary mt-2 text-[14px] md:text-[16px]">
                  Foundations of User Experience (UX) Design adalah yang pertama
                  dari rangkaian tujuh kursus yang akan membekali Anda dengan
                  keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
                  pemula dalam desain pengalaman pengguna. Desainer UX fokus
                  pada interaksi yang dilakukan orang dengan produk seperti
                  situs web, aplikasi seluler, dan objek fisik. Desainer UX
                  membuat interaksi sehari-hari itu dapat digunakan,
                  menyenangkan, dan dapat diakses. Peran seorang desainer UX
                  tingkat pemula mungkin termasuk berempati dengan pengguna,
                  menentukan poin rasa sakit mereka, memunculkan ide untuk
                  solusi desain, membuat wireframe, prototipe, dan maket, dan
                  menguji desain untuk mendapatkan umpan balik.
                </p>
              </DescriptionLayouts>

              <DescriptionLayouts
                title="Belajar bersama Tutor Profesional"
                classname="flex flex-col gap-[16px] mt-5 md:flex-row"
              >
                <CommentCard />
                <CommentCard />
              </DescriptionLayouts>

              <DescriptionLayouts title="Kamu akan Mempelajari">
                <Dropdown
                  title="Introduction to Course 1: Foundations of User Experience Design"
                  classNameTitle="text-primary md:text-[18px] text-[15px] font-semibold truncate font-Poppins w-[85%]"
                  src="svg/Bottom Arrow Grey.svg"
                  classNameArrow="right-0 top-[8px] md:top-[10.5px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
                >
                  <Dropdown.Point title="The basics of user experience design">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="Jobs in the field of user experience">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="The product development life cycle">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                </Dropdown>

                <Dropdown
                  title="Universal design, inclusive design, and equity-focused design"
                  classNameTitle="text-primary md:text-[18px] text-[15px] font-semibold truncate font-Poppins w-[85%]"
                  src="svg/Bottom Arrow Grey.svg"
                  classNameArrow="right-0 top-[8px] md:top-[10.5px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
                >
                  <Dropdown.Point title="The basics of user experience design">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="Jobs in the field of user experience">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="The product development life cycle">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                </Dropdown>

                <Dropdown
                  title="Introduction to design sprints"
                  classNameTitle="text-primary md:text-[18px] text-[15px] font-semibold truncate font-Poppins w-[85%]"
                  src="svg/Bottom Arrow Grey.svg"
                  classNameArrow="right-0 top-[8px] md:top-[10.5px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
                >
                  <Dropdown.Point title="The basics of user experience design">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="Jobs in the field of user experience">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="The product development life cycle">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                </Dropdown>

                <Dropdown
                  title="Introduction to UX research"
                  classNameTitle="text-primary md:text-[18px] text-[15px] font-semibold truncate font-Poppins w-[85%]"
                  src="svg/Bottom Arrow Grey.svg"
                  classNameArrow="right-0 top-[8px] md:top-[10.5px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
                >
                  <Dropdown.Point title="The basics of user experience design">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="Jobs in the field of user experience">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                  <Dropdown.Point title="The product development life cycle">
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Media.svg"
                      text="Media"
                    />
                    <Dropdown.Icon
                      classNameIcon="hidden md:flex"
                      src="svg/Calender.svg"
                      text="12 Menit"
                    />
                  </Dropdown.Point>
                </Dropdown>
              </DescriptionLayouts>

              <DescriptionLayouts title="Rating dan Review">
                <div className="flex mt-3 flex-col md:flex-row gap-4">
                  <CommentCard stars={true} />
                  <CommentCard stars={true} />
                </div>
              </DescriptionLayouts>
            </div>
            <div className="mt-6 md:mt-0">
              <DescCard>
                <DescCard.Body
                  title="Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."
                  discount="50"
                  priceAfter="250"
                  priceBefore="500"
                  timeLeft="2"
                />
                <DescCard.Footer />
              </DescCard>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-12">
          <h3 className="font-semibold text-[24px] leading-[26.4px] font-Poppins md:text-[32px]">
            Video Pembelajaran Terkait Lainnya
          </h3>
          <p className="text-text-dark-secondary text-[14px] mt-2 md:text-[16px]">
            Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:mb-[60px] justify-between mt-4 md:mt-7">
            <CardProduct
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              avatare="img/avatar-card-1.png"
              image="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </CardProduct>
            <CardProduct
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              avatare="img/avatar-card-1.png"
              image="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </CardProduct>
            <CardProduct
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              avatare="img/avatar-card-1.png"
              image="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </CardProduct>
          </div>
        </div>
      </div>
    </ContentLayouts>
  );
};

export default DetailProductPage;
