import profile from "../assets/mpto3.jpg";
const MainIntro = () => {
  return (
    <main>
      <section>
        <div className="container m-auto px-4 py-10 flex ">
          <div>
            <p className="text-white text-base ">
              Hello, I am <span className="text-2xl"> Shivam Sharma.</span>
            </p>

            <p className="text-white">
              Skilled
              <span className="ms-1 me-1 text-base text-yellow-300">
                Front-End Developer
              </span>
              .with JavaScript , React.js , looking for an opportunity to use my
              knowledge.
            </p>
          </div>
          <div>
            <img src={profile} width={340} className="rounded-full mx-3" />
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <h2>Projects</h2>
          <div className="flex">
            <img src="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainIntro;
