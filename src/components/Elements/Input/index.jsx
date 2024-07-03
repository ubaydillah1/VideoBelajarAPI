import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { children, type, name, placeholder, focus } = props;
  return (
    <div className="flex flex-col my-5">
      <Label name={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder} focus={focus} />
    </div>
  );
};

export default InputForm;
