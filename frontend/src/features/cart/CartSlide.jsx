import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseData } from "../../store/slices/courseSlice";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Course from "../courses/Course";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../ui/Heading";

function CartSlide() {
  const { courses, status } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);


  if (status === "Loading" || status === "idle") return <div>Loading</div>;

  return (
    <div className="max-w-[100rem]">
      <Heading custom="pl-[1rem] text-3xl">Các khóa học liên quan</Heading>
      <Slider {...settings}>
        {courses.map((course) => (
          <Course
            key={course.course_id}
            course={course}
            width="max-width-[24rem] w-[20rem]"
            height="h-[22rem]"
            custom="border-[1px] border-neutral-200"
          >
            <button className="w-full border-2 p-2 border-neutral-500 font-medium text-sm mt-4">
              Thêm vào giỏ hàng
            </button>
          </Course>
        ))}
      
      </Slider>
    </div>
  );
}

export default CartSlide;
