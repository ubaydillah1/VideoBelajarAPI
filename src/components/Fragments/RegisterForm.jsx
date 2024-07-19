import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import InputNumber from "../Elements/Input/InputNumber";

const RegisterForm = () => {
  return (
    <>
      <InputForm
        type="text"
        name="fullname"
        placeholder="Ubay Dillah"
        focus="true"
      >
        Nama Lengkap
      </InputForm>

      <InputForm type="email" name="email" placeholder="example@gmail.com">
        E-Mail
      </InputForm>

      <InputNumber name="tel" />

      <InputForm type="password" name="password" placeholder="************">
        Kata Sandi
      </InputForm>

      <InputForm
        type="password"
        name="comfirm-password"
        placeholder="************"
      >
        Konfirmasi Kata Sandi
      </InputForm>

      <Link
        className="text-end cursor-pointer text-text-dark-secondary hover:opacity-70 block text-[14px] md:text-[16px]"
        to="/"
      >
        Lupa Password?
      </Link>

      <Button classname="bg-[#3ECF4C] text-white hover:opacity-70 w-full">
        Daftar
      </Button>
      <Button
        classname="bg-[#E2FCD9CC] text-[#3ECF4C] hover:opacity-70 w-full"
        link="/login"
      >
        Masuk
      </Button>
    </>
  );
};

export default RegisterForm;
