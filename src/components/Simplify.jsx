import { Button } from "../components";

const Simplify = () => {
  return (
    <section className="simplify__section end_content h-36 bg-brightRed bg-simplifyDesktop text-veryLightGray">
      <div className="simplify__container h-full flex flex-row items-center justify-between">
        <div className="end_text">
          <h3 className="font-700 text-24 w-[65%] leading-7">Simplify how your team works today.</h3>
        </div>
        <div className="end_text-button">
          <Button styles="bg-veryLightGray text-brightRed" />
        </div>
      </div>
    </section>
  );
};

export default Simplify;
