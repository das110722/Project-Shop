import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./ButtonInputSearch.module.scss";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const cx = classNames.bind(styles);

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "var(--color-white)",
    backgroundColorButton = "var(--color-frist)",
    colorButton = "var(--color-white)",
  } = props;

  return (
    <div style={{ display: "flex", backgroundColor: "var(--color-white)" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          border: "none",
        }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        className={cx('custom-button')}
        styleButton={{
          backgroundColor: backgroundColorButton,
          borderRadius: 0,
          border: "none",
          color: colorButton,
        }}
        styleTextButton={{ color: colorButton }}
        textButton={textButton}
      />
    </div>
  );
};

export default ButtonInputSearch;
