import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

const CardComponent = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 200 , borderRadius: 0}}
        className={cx("card")}
        styles={{
          header: {
            width: "200px",
            height: "200px",
          },
          body: {
            padding: "10px",
          },
        }}
        cover={
          <img
          style={{borderRadius: "0"}}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <div className={cx("product")}>Iphone</div>
        <div className={cx("report-text")}>
          <span style={{ marginRight: "10px" }}>
            <span>4.6</span>
            <StarOutlined style={{ fontSize: "10px", color: "yellow" }} />
          </span>
          <span>| Sold 1000+</span>
        </div>
        <div className={cx("price-text")}>
          1.000.000 
          <span className={cx("discount-text")}>-5%</span>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
