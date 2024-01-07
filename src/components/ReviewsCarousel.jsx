import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PropTypes from "prop-types";
import Slider from "react-slick";

const ReviewsCarousel = ({ reviews }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 items at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  };

  return (
    <Slider {...settings}>
      {reviews.map((review) => (
        <div
          key={review.name}
          className="review__card h-[6rem] text-center relative"
        >
          <div className="bg-veryLightGray flex flex-col py-4 px-3 items-center">
            <div className="w-[3.5rem] absolute -top-2 transform -translate-y-1/2 z-30">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-full"
              />
            </div>
            <div className="review__card--name text-16 font-700 text-darkBlue mt-4 mb-4">
              <h3>{review.name}</h3>
            </div>
            <div className="review__card--text text-darkGrayishBlue">
              <p>{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

ReviewsCarousel.propTypes = { reviews: PropTypes.array.isRequired };

export default ReviewsCarousel;
