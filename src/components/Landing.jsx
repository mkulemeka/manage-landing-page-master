import { Button } from "../components";
import IllustrationIntro from "../images/illustration-intro.svg";

const Landing = () => {
  return (
    <main className="hero_section flex flex-col-reverse md:flex-row justify-between md:my-12">
      <section className="page_intro md:w-[50%] flex flex-col justify-center items-center md:items-start gap-5 md:gap-9">
        <h1 className="page_title font-700 text-[2.5rem] leading-10 text-center md:text-left md:text-[3.5rem] md:leading-[3.5rem] text-darkBlue">
          Bring everyone together to build better products.
        </h1>
        <p className="page_description text-16 text-center md:text-left md:max-w-[55%] text-darkGrayishBlue">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button styles="bg-brightRed text-veryLightGray" />
      </section>
      <section className="page_image md:w-[50%]">
        <img src={IllustrationIntro} alt="page illustration" />
      </section>
    </main>
  );
};

export default Landing;
