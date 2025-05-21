import { Input } from "antd";

const InputSearch = ({ size, placeholder, style, ...rests }) => {
  return (
    <Input size={size} placeholder={placeholder} style={style} {...rests} />
  );
};

export default InputSearch;
