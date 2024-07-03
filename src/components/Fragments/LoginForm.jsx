import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <InputForm
        type="email"
        name="email"
        placeholder="example@gmail.com"
        focus="true"
      >
        E-Mail
      </InputForm>

      <InputForm type="password" name="password" placeholder="************">
        Kata Sandi
      </InputForm>

      <Link
        className="text-end cursor-pointer text-text-dark-secondary hover:opacity-70 block"
        to={"/"}
      >
        Lupa Password?
      </Link>

      <Button classname="bg-[#3ECF4C] text-white hover:opacity-70 w-full">
        Masuk
      </Button>

      <Button
        classname="bg-[#E2FCD9CC] text-[#3ECF4C] hover:opacity-70 w-full"
        link="/register"
      >
        Daftar
      </Button>
    </>
  );
};

export default LoginForm;
