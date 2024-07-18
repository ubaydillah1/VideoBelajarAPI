/* eslint-disable react/no-unescaped-entities */
import Checkout from "../components/Elements/Checkout";
import DescCard from "../components/Elements/Desc Card";
import Dropdown from "../components/Elements/Dropdown";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import DescriptionLayouts from "../components/Layouts/DescriptionLayouts";

const PaymentPage = () => {
  return (
    <ContentLayouts typeNav="method" type="proccess" marginTop="mt-[150px]">
      <div className="top-[64px] bg-[#FEE8D2CC] w-full absolute left-0 h-[56px] flex justify-center items-center gap-2 text-text-dark-secondary md:text-[18px] text-[14px]">
        <p>Selesaikan pemesanan dalam</p>
        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] bg-tertiary text-white">
          00
        </div>{" "}
        :{" "}
        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] bg-tertiary text-white">
          50
        </div>{" "}
        :{" "}
        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] bg-tertiary text-white">
          55
        </div>
      </div>

      <div className="sm:max-w-[1200px] mx-auto">
        <div className="mt-10 flex md:gap-[36px] flex-col md:flex-row gap-6 sm:max-w-[1200px] mx-auto md:pt-[120px] justify-between">
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

          <div className="w-full flex flex-col md:mb-[70px] mb-[30px]">
            <div className="text-text-dark-primary">
              <DescriptionLayouts title="Metode Pembayaran">
                <div className="border flex flex-col justify-center items-center p-[36px] rounded-[12px] mt-[25px]">
                  <img src="img/LogoTextBCA.png" alt="BCA" />
                  <p className="font-semibold text-center my-3">
                    Bayar Melalui Virtual Account BCA
                  </p>
                  <div className="flex gap-3">
                    <p
                      className="text-text-dark-secondary font-bold md:text-[18px] "
                      style={{ whiteSpace: "nowrap" }}
                    >
                      11739 081234567890
                    </p>
                    <span className="text-tertiary font-bold">Salin</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Checkout
                    title="Ringkasan Pesanan"
                    total="774.500"
                    cta="double"
                  >
                    <Checkout.Body
                      price="767.500"
                      classname="truncate md:overflow-visible md:whitespace-normal md:text-ellipsis"
                    >
                      Video Learning: Gapai Karier Impianmu sebagai Seorang
                      UI/UX Designer & Product Manager.{" "}
                    </Checkout.Body>
                    <Checkout.Body price="7.000">Admin</Checkout.Body>
                  </Checkout>
                </div>
              </DescriptionLayouts>

              <div className="mt-6 md:mt-9">
                <DescriptionLayouts title="Tata Cara Pembayaran">
                  <PaymentMethod />
                </DescriptionLayouts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayouts>
  );
};

export default PaymentPage;

const PaymentMethod = () => {
  return (
    <>
      <Dropdown
        type="description"
        title="Transfer Bank"
        classNameTitle="md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433]"
        src="svg/Bottom Arrow Grey.svg"
        classNameArrow="right-[0] top-[7px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
        classNameDescription="border px-[20px] rounded-[12px] md:text-[18px] text-text-dark-secondary py-[16px] mt-3"
      >
        <div className="mt-3">
          <div className="flex gap-2">
            <p>1. </p>
            <p>Masukkan kartu ATM dan PIN BCA Anda</p>
          </div>
          <div className="flex gap-2">
            <p>2. </p>
            <p>
              Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih
              "Ke BCA Virtual Account"
            </p>
          </div>
          <div className="flex gap-2">
            <p>3. </p>
            <p>Masukkan nomor Virtual Account</p>
          </div>
          <div className="flex gap-2">
            <p>4. </p>
            <p>
              Pastikan data Virtual Account Anda benar, kemudian masukkan angka
              yang perlu Anda bayarkan, kemudian pilih "Benar"
            </p>
          </div>
          <div className="flex gap-2">
            <p>5. </p>
            <p>
              Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika
              sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar
              masih salah
            </p>
          </div>
          <div className="flex gap-2">
            <p>6. </p>
            <p>
              Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak
              melanjutkan transaksi lain
            </p>
          </div>
        </div>
      </Dropdown>
      <Dropdown
        type="description"
        title="Mobile Banking BCA"
        classNameTitle="md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433]"
        src="svg/Bottom Arrow Grey.svg"
        classNameArrow="right-[0] top-[7px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
        classNameDescription="border px-[20px] rounded-[12px] md:text-[18px] text-text-dark-secondary py-[16px] mt-3"
      >
        <div className="mt-3">
          <div className="flex gap-2">
            <p>1. </p>
            <p>Masukkan kartu ATM dan PIN BCA Anda</p>
          </div>
          <div className="flex gap-2">
            <p>2. </p>
            <p>
              Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih
              "Ke BCA Virtual Account"
            </p>
          </div>
          <div className="flex gap-2">
            <p>3. </p>
            <p>Masukkan nomor Virtual Account</p>
          </div>
          <div className="flex gap-2">
            <p>4. </p>
            <p>
              Pastikan data Virtual Account Anda benar, kemudian masukkan angka
              yang perlu Anda bayarkan, kemudian pilih "Benar"
            </p>
          </div>
          <div className="flex gap-2">
            <p>5. </p>
            <p>
              Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika
              sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar
              masih salah
            </p>
          </div>
          <div className="flex gap-2">
            <p>6. </p>
            <p>
              Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak
              melanjutkan transaksi lain
            </p>
          </div>
        </div>
      </Dropdown>
      <Dropdown
        type="description"
        title="Internet Banking BCA"
        classNameTitle="md:text-[16px] text-[15px] font-semibold truncate font-Poppins w-full rounded-[10px] text-[#1D2433]"
        src="svg/Bottom Arrow Grey.svg"
        classNameArrow="right-[0] top-[7px] absolute w-[12px] md:w-[16px] h-[12px] md:w-[16px]"
        classNameDescription="border px-[20px] rounded-[12px] md:text-[18px] text-text-dark-secondary py-[16px] mt-3"
      >
        <div className="mt-3">
          <div className="flex gap-2">
            <p>1. </p>
            <p>Masukkan kartu ATM dan PIN BCA Anda</p>
          </div>
          <div className="flex gap-2">
            <p>2. </p>
            <p>
              Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih
              "Ke BCA Virtual Account"
            </p>
          </div>
          <div className="flex gap-2">
            <p>3. </p>
            <p>Masukkan nomor Virtual Account</p>
          </div>
          <div className="flex gap-2">
            <p>4. </p>
            <p>
              Pastikan data Virtual Account Anda benar, kemudian masukkan angka
              yang perlu Anda bayarkan, kemudian pilih "Benar"
            </p>
          </div>
          <div className="flex gap-2">
            <p>5. </p>
            <p>
              Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika
              sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar
              masih salah
            </p>
          </div>
          <div className="flex gap-2">
            <p>6. </p>
            <p>
              Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak
              melanjutkan transaksi lain
            </p>
          </div>
        </div>
      </Dropdown>
    </>
  );
};
