/* eslint-disable react/prop-types */
import DropdownFilter from "../components/Elements/Dropdown Filter";
import Card from "../components/Elements/Card";
import Pagination from "../components/Elements/Pagination";
import { useState } from "react";
import ContentLayouts from "../components/Layouts/ContentLayouts";

const ProducstPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Urutkan");

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <ContentLayouts type="profileNav">
      <main className="md:py-[90px] max-w-[1200px] mx-auto mb-[30px]">
        <div className="md:mt-10">
          <header className="text-[24px] font-semibold font-Poppins leading-[26.4px] ">
            Koleksi Video Pembelajaran Unggulan
          </header>
          <p className="text-[14px] text-text-dark-secondary leading-[19.6px] mt-2">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <section className="md:flex md:gap-[44px]">
          <div className="md:min-w-[366px]">
            <div className=" bg-white p-[16px] border rounded-[10px] mt-4">
              <div className="flex justify-between">
                <b className="text-[18px] font-semibold font-Poppins text-text-dark-secondary">
                  Filter
                </b>
                <p className="text-red-500 font-medium">Reset</p>
              </div>
              <div>
                <form>
                  <DropdownFilter />
                </form>
              </div>
            </div>
          </div>
          <div>
            <FormSearch
              selectedOption={selectedOption}
              toggleDropdown={toggleDropdown}
              handleDropdownClick={handleDropdownClick}
              isOpen={isOpen}
            />
            <div className="card-container flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between items-center">
              <Cards />
            </div>
            <div className="flex justify-center md:block">
              <Pagination />
            </div>
          </div>
        </section>
      </main>
    </ContentLayouts>
  );
};

const Cards = () => {
  return (
    <>
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
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
        Mulai transformasi dengan instruktur profesional, harga yang terjangkau,
        dan kurikulum terbaik dan Juga dengan Kemurahan Harga
      </Card>
    </>
  );
};

const FormSearch = ({
  toggleDropdown,
  selectedOption,
  handleDropdownClick,
  isOpen,
}) => {
  return (
    <form action="">
      <div className="flex gap-7 my-5 md:justify-end">
        <div className="relative w-full md:max-w-[122px]">
          <button
            onClick={toggleDropdown}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-[6px] leading-tight focus:outline-none focus:bg-white focus:border-primary"
          >
            {selectedOption}
            <img
              src="svg/Bottom Arrow.svg"
              alt="arrow"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-[6px] shadow-lg z-10 transition-all duration-300 ease-out opacity-100">
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("Harga Rendah")}
              >
                Harga Rendah
              </div>
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("Harga Tinggi")}
              >
                Harga Tinggi
              </div>
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("A to Z")}
              >
                A to Z
              </div>
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("Z to A")}
              >
                Z to A
              </div>
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("Rating Tertinggi")}
              >
                Rating Tertinggi
              </div>
              <div
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleDropdownClick("Rating Terendah")}
              >
                Rating Terendah
              </div>
            </div>
          )}
        </div>

        <div className="relative w-full md:max-w-[220px]">
          <input
            type="text"
            className="block w-full bg-white border border-gray-300 text-text-dark-secondary py-2 px-3 pr-8 rounded-[6px] leading-tight appearance-none focus:outline-none focus:bg-white focus:border-primary"
            placeholder="Cari Kelas"
          />
          <img
            src="svg/Search.svg"
            alt="arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>
    </form>
  );
};

export default ProducstPage;
