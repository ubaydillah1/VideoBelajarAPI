import Card from "../components/Elements/Card";
import HeroBanner from "../components/Elements/Hero Banner";
import TabsCategory from "../components/Elements/Tabs Category";
import Navbar from "../components/Fragments/Navbar";

const HomePage = () => {
  return (
    <div className="mb-[1000px] sm:px-[24px]">
      <Navbar type="profileNav" />

      <div className="sm:max-w-[1200px] mx-auto sm:pt-[120px] pt-[99px] px-[24px] sm:px-[0] p">
        <HeroBanner type="topHeroBanner" />

        <section className="card-section mt-5">
          <h2 className="font-Poppins text-[23px] font-semibold text-text-dark leading-[26.4px] sm:text-[32px] sm:mt-20">
            Koleksi Video{" "}
            <span className="block sm:inline">Pembelajaran Unggulan </span>
          </h2>

          <p className="text-text-dark-secondary leading-[19.6px] my-3 font-medium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="relative w-full">
            <TabsCategory />
          </div>

          <div className="card-wrapper mt-10 flex flex-wrap gap-5 sm:gap-[24px] justify-center">
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
            <Card
              type="cardProduct"
              title="Big 4 Auditor Financial Analyst"
              name="Jenna Ortega"
              srcProfile="img/avatar-card-1.png"
              src="img/image-card-1.jpeg"
              jobPosition="Senior Accountant"
              price="300K"
              workplace="Gojek"
            >
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga
            </Card>
          </div>
        </section>

        <div className="mt-16">
          <HeroBanner type="bottomHeroBanner" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
