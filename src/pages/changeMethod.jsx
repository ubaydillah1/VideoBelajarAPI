import Button from "../components/Elements/Button";
import Checkout from "../components/Elements/Checkout";
import DescCard from "../components/Elements/Desc Card";
import Dropdown from "../components/Elements/Dropdown";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import DescriptionLayouts from "../components/Layouts/DescriptionLayouts";

const ChangeMethodPage = () => {
  return (
    <ContentLayouts typeNav="method" type="start">
      <div className="my-[30px] md:mb-[70px] md:mt-[130px] flex md:gap-[36px] flex-col md:flex-row gap-6 sm:max-w-[1200px] mx-auto  justify-between ">
        <div className="md:order-1">
          <DescCard>
            <div className="md:block hidden">
              <DescCard.Header src="img/image-card-1.jpeg" />
            </div>
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

        <div className="w-full flex flex-col gap-6">
          <div>
            <DescriptionLayouts>
              <Checkout title="Ringkasan Belanja" total="774.500">
                <Checkout.Body price="767.500">
                  Total Harga (3 barang)
                </Checkout.Body>
                <Checkout.Body price="7.000">Biaya Admin</Checkout.Body>
              </Checkout>
            </DescriptionLayouts>
          </div>
          <div className="w-full">
            <DescriptionLayouts title="Metode Pembayaran">
              <Dropdown
                title="Transfer Bank"
                classNameTitle="border border- px-[20px] py-[16px] md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433] md:mt-6 mt-5"
                src="svg/Bottom Arrow Grey.svg"
                classNameArrow="right-[29px] top-[22px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px] md:right-[26px]"
              >
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon src="svg/Correct.svg" />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
              </Dropdown>
              <Dropdown
                title="E-Wallet"
                classNameTitle="border border- px-[20px] py-[16px] md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433] md:mt-6 mt-5"
                src="svg/Bottom Arrow Grey.svg"
                classNameArrow="right-[29px] top-[22px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px] md:right-[26px]"
              >
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
                <Dropdown.Point title="Bank BCA" icon="img/BCA.png">
                  <Dropdown.Icon />
                </Dropdown.Point>
              </Dropdown>
              <Dropdown
                title="Kartu Kredit/Debit"
                classNameTitle="border border- px-[20px] py-[16px] md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433] md:mt-6 mt-5"
                src="svg/Bottom Arrow Grey.svg"
                classNameArrow="right-[29px] top-[22px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px] md:right-[26px]"
              ></Dropdown>

              <Button
                classname="text-white bg-primary w-full text-[14px] md:text-[16px] mt-7 mb-0"
                link="/endMethod"
              >
                Beli Sekarang
              </Button>
            </DescriptionLayouts>
          </div>
        </div>
      </div>
    </ContentLayouts>
  );
};

export default ChangeMethodPage;
