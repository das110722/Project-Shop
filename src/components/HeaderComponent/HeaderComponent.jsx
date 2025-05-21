import { Col, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { UserOutlined, CaretDownOutlined , ShoppingCartOutlined} from "@ant-design/icons";
import ButtonInputSearch from "@/components/ButtonInputSearch/ButtonInputSearch";

const cx = classNames.bind(styles);

const HeaderComponent = () => {
  return (
    <div>
      <Row className={cx("wrapper")} gutter={16}>
        <Col span={6}>
          <span className={cx("wrapper-text")}>LOGO CTY</span>
        </Col>
        <Col span={12}>
          <ButtonInputSearch 
            size="large"
            textButton="Search"
            placeholder="Search for products, brands and more"
          />
        </Col>
        <Col span={6} className={cx("wrapper-col--account")}>
          <div className={cx("wrapper-account")}>
              <UserOutlined className={cx('wrapper-account--icon')} />
            <div>
              <span>Login / Register</span>
              <div>
                <span>Account</span>
                <CaretDownOutlined />
              </div>
            </div>
          </div>
          <div>
            <ShoppingCartOutlined className={cx('wrapper-account--icon')}/>
            <span>Cart</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderComponent;
