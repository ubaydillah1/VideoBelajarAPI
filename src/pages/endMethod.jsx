import StatusPayment from "../components/Elements/Status Payment";
import ContentLayouts from "../components/Layouts/ContentLayouts";

const EndMethodPage = () => {
  return (
    <ContentLayouts typeNav="method" type="end" typeFooter={false}>
      <div className="flex justify-center my-10 md:my-[100px]">
        <StatusPayment src="img/StatusSuccess.png" title="Pembayaran Berhasil!">
          Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika
          ada kendala.
        </StatusPayment>
      </div>
    </ContentLayouts>
  );
};

export default EndMethodPage;
