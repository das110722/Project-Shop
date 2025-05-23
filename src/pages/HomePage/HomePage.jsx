import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import TypeProduct from "@/components/TypeProduct/TypeProduct";
import Slider from "@/components/Slider/Sider";
import CardComponent from "@/components/CardComponent/CardComponent";
// Image Slider
import SlideIphone from "@/assets/images/slider/iphone.jpg";
import SlideAppWatch from "@/assets/images/slider/appwatch.jpg";
import SlideMacBook from "@/assets/images/slider/macbook.jpg";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const cx = classNames.bind(styles);

const HomePage = () => {
  const arr = [
    "Mac",
    "Iphone",
    "Ipad",
    "Apple Watch",
    "AirPods",
    "AirTag",
    "Apple TV 4K",
    "Phụ Kiện",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <div className={cx("type-product")}>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </div>
      </div>
      <div className={cx("slider")}>
          <Slider arrImages={[SlideIphone, SlideAppWatch, SlideMacBook]} />
          <div className={cx("card")}>
            <CardComponent/>
          </div>
          <NavbarComponent/>
        </div>
    </>
  );
};

export default HomePage;
