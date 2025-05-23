
import Slider from 'react-slick';
import { Image } from 'antd';

const Sider = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="slider"
          preview={false}
          width="100%"
          height="350px"
        />
      ))}
    </Slider>
  );
};

export default Sider;
