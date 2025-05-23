import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Checkbox } from "antd";
import { Rate } from "antd";

const cx = classNames.bind(styles);

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <h1 className={cx("text-value")}>{option}</h1>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`tu ${option} sao`}</span>
            </div>
          );
        });
        case "price":
        return options.map((option) => {
          return (
            <div className={cx("text-price")}>
              {option}
            </div>
          )
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <h4>Label</h4>
      <div className={cx("content")}>
        {renderContent("text", ["Iphone", "Ipad", "Macbook"])}
      </div>
      <div className={cx("content")}>
        {renderContent("checkbox", [
          { value: "A", label: "A" },
          { value: "B", label: "B" },
        ])}
      </div>
      <div className={cx("content")}>{renderContent("star", [3, 4, 5])}</div>
      <div className={cx("content")}>
        {renderContent("price", ["duoi 40", "tren 100"])}
      </div>
    </div>
  );
};

export default NavbarComponent;
