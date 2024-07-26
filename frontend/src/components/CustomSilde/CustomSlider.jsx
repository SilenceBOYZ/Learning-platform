import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " before:hidden "}
      style={{
        ...style,
        display: "flex",
        backgroundColor: "#222",
        fontSize: "2rem",
        borderRadius: "100%",
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        width: "2.5rem",
        height: "2.5rem",
      }}
      onClick={onClick}
    >
      <HiChevronRight className="text-white" size={28} />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " before:hidden z-14"}
      style={{
        ...style,
        display: "flex",
        backgroundColor: "#222",
        fontSize: "2rem",
        borderRadius: "100%",
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        width: "2.5rem",
        height: "2.5rem",
      }}
      onClick={onClick}
    >
      <HiChevronLeft className="text-white" size={28} />
    </button>
  );
}

function CustomSlider({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="box-border">
      {children}
    </Slider>
  );
}

export default CustomSlider;
