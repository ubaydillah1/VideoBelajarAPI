/* eslint-disable react/prop-types */
import Navbar from "../Fragments/Navbar";
import LoginForm from "../Fragments/LoginForm";
import RegisterForm from "../Fragments/RegisterForm";
import Button from "../Elements/Button";

const AuthLayouts = (props) => {
  const { title } = props;
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center px-[20px]">
        <div className="bg-white w-[590px] p-[36px] sm:my-32 border border-[#F1F1F1] my-28">
          <Header title={title} />

          {title === "login" ? <LoginForm /> : <RegisterForm />}

          <div className="relative w-full border-t-[2px] border-[#F1F1F1] mt-10">
            <div
              className="absolute left-1/2 -top-3.5 bg-white w-[50px] text-center text-[#4A505C] text-[14px] sm:text-[16px]"
              style={{ transform: "translate(-50%)" }}
            >
              atau
            </div>
          </div>

          <Button type="googleButton" />
        </div>
      </div>
    </>
  );
};

const Header = ({ title }) => {
  if (title === "login") {
    return (
      <>
        <h1 className="text-[24px] sm:text-[32px] font-semibold text-center font-Poppins">
          Masuk ke Akun
        </h1>
        <p className="text-center text-text-dark-secondary mb-10 mt-1 text-[14px] sm:text-[16px]">
          Yuk, lanjutin belajarmu di video belajar.
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-[24px] sm:text-[32px] font-semibold text-center font-Poppins">
          Pendaftaran Akun
        </h1>
        <p className="text-center text-text-dark-secondary mb-10 mt-1 text-[14px] sm:text-[16px]">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </>
    );
  }
};

export default AuthLayouts;
