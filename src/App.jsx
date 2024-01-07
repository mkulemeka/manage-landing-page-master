import { About, Footer, Landing, Nav, Reviews, Simplify } from "./components";

import data from "./data.json";

const App = () => {
  return (
    <section className="font-beVietnamPro font-400">
      <section className="w-[80%] mx-auto bg-tabletPattern bg-no-repeat bg-contain bg-right-top">
        <Nav />
        <Landing />
      </section>
      <About about={data.About} />
      <Reviews reviews={data.Reviews} />
      <Simplify />
      <Footer />
    </section>
  );
};

export default App;
