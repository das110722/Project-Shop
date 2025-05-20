import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "var(--color-white)",
    backgroundColorButton = 'rgba(13,92,182)',
    colorButton = 'var(--color-white)',
  } = props;
  return (
    <div style={{ display: "flex", backgroundColor: "var(--color-white)" }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput , border: "none"}}
      />
      <Button
        size={size}
        icon={<SearchOutlined color={colorButton}/>}
        style={{ backgroundColor: backgroundColorButton , borderRadius: 0  }}
      >
        <span style={{color: colorButton}}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
