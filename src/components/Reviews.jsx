import { Button, ReviewsCarousel } from "../components";

import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <section className="reviews__section py-12">
      <div className="reviews">
        <h1 className="text-subHeading font-700 text-darkBlue text-center">
          What they&apos;ve said
        </h1>
        <div className="reviews__container my-6 pt-10">
          <ReviewsCarousel reviews={reviews} />
        </div>
        <div className="reviews__button text-center">
          <Button styles="bg-brightRed text-veryLightGray" />
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
