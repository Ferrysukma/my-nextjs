import Link from "next/link";
import axios from "src/configs/axios";

import Circle from "public/images/circle-accent.svg";

import Header from "src/part/Header";
import Hero from "src/part/Hero";

function Home(props) {
  // console.log(props);
  return (
    <>
      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;
