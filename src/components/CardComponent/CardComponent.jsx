import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

const CardComponent = () => {
  return (
    <Card
      hoverable
      className={cx("card")}
      styles={{
        body: { padding: 12 },
      }}
      cover={
        <div className={cx("image-container")}>
          <img
            alt="iphone"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            className={cx("card-image")}
          />
        </div>
      }
    >
      <div className={cx("product-name")}>iPhone 15 Pro Max</div>

      <div className={cx("rating-row")}>
        <span className={cx("rating-text")}>
          4.8 <StarFilled style={{ fontSize: "12px", color: "#fadb14" }} />
        </span>
        <span className={cx("divider")}>|</span>
        <span className={cx("sold-text")}>Sold 2.3k+</span>
      </div>

      <div className={cx("price-row")}>
        <span className={cx("current-price")}>28.990.000₫</span>
        <span className={cx("discount")}>-12%</span>
      </div>
    </Card>
  );
};

export default CardComponent;
