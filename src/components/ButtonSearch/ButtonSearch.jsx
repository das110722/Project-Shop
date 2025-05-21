import { Button } from "antd";

const ButtonSearch = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  ...rests
}) => {
  return (
    <Button size={size} style={styleButton} {...rests}>
      <span style={{ styleButton }}>{textButton}</span>
    </Button>
  );
};

export default ButtonSearch;
