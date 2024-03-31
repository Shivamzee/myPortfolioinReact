const softSkills = (prop) => {
  const { softSkills, sk1, sk2, sk3, sk4, sk5 } = prop;
  return (
    <main>
      <section className=" mt-32 mb-10">
        <div className="container m-auto   px-4">
          <h2 className="text-3xl text-white font-semibold">{softSkills}</h2>
          {/* Add tools and skills */}
          <div className="flex justify-between">
            <div>
              <p className="text-bold text-xl text-white before:bg-teal-400 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-3 ">
                {sk1}
              </p>
            </div>
            <div className="text-bold text-xl text-white before:bg-teal-400 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>{sk2}</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-teal-400 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>{sk3}</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-teal-400 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>{sk4}</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-teal-400 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>{sk5}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default softSkills;
