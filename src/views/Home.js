import "../assets/styles/components/Home.scss";

function Home() {
  return (
    <div class="homepage">
      <section class="homepage__header">
        <div class="homepage__header-container">
          <h1 class="homepage__header">Ciaran Green - front end developer</h1>
        </div>
      </section>
      <section>
        <h3>Welcome</h3>
        <p>
          Hi, I'm Ciaran and I am a front end developer. If you are here then
          you are probably a recruiter/developer, the best way of contacting me
          is by dropping me an email on{" "}
          <a href="mailto:hello@ciaran.green">hello@ciaran.green</a>. Otherwise,
          feel free to have a look around.
        </p>
      </section>
      <section>
        <h3>React</h3>
        <p class="homepage-react__text">
          Throughout my career so far I have had the pleasure of working with a
          large range of different front end technologies and I am always up for
          learning new technologies. So far my JavaScript framework of choice
          has been Vue{" "}
          <span class="homepage-react__text--bold">but</span> I am now
          actively learning React.
        </p>
      </section>
    </div>
  );
}

export default Home;
