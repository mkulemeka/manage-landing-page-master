import { Button } from "../components";
import IllustrationIntro from "../images/illustration-intro.svg";

const Landing = () => {
  return (
    <main className="hero_section flex justify-between my-12">
      <section className="page_intro w-[50%] flex flex-col justify-center gap-9">
        <h1 className="page_title font-700 text-[3.5rem] leading-[3.5rem] text-darkBlue">
          Bring everyone together to build better products.
        </h1>
        <p className="page_description text-16 max-w-[55%] text-darkGrayishBlue">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button styles="bg-brightRed text-veryLightGray" />
      </section>
      <section className="page_image w-[50%]">
        <img src={IllustrationIntro} alt="page illustration" />
      </section>
    </main>
  );
};

export default Landing;
