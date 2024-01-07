import PropTypes from "prop-types";

const About = ({ about }) => {
  return (
    <section className="about__section flex justify-between py-12">
      <section className="w-[50%] flex flex-col gap-8">
        <h2 className="about_title text-darkBlue font-700 text-subHeading leading-[2.5rem]">
          What&apos;s different about Manage?
        </h2>
        <p className="text-16 text-darkGrayishBlue max-w-[60%]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>
      <section className="w-[50%] about_points flex flex-col gap-12">
        {about.map((point) => (
          <div key={point.id} className="point_container flex gap-10">
            <div className="">
              <p className="point-number p-1 bg-brightRed text-veryLightGray font-500 rounded-3xl text-center">
                {point.id}
              </p>
            </div>
            <div className="point-details flex flex-col gap-4 w-[78%]">
              <h3 className=" text-darkBlue font-700">{point.title}</h3>
              <p className=" text-darkGrayishBlue">{point.description}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

About.propTypes = {
  about: PropTypes.array.isRequired,
};

export default About;
