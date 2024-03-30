const Tools = (prop) => {
  const { techTools, sk1, sk2, sk3, sk4, sk5, sk6, sk7 } = prop;
  return (
    <main>
      <section className="mt-14 mb-10">
        <div className="container m-auto   px-4">
          <h2 className="text-3xl text-white font-semibold">{techTools}</h2>
          {/* Add tools and skills */}
          <div className="flex justify-between">
            1 +7
            <div>
              <p className="text-bold text-xl text-white before:bg-red-300 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
                Git & GitHub
              </p>
            </div>
            <div className="text-bold text-xl text-white before:bg-red-300 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>Visual Studio Code(IDE)</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-red-300 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>Canva</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-red-300 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>MS Excel</p>
            </div>
            <div className="text-bold text-xl text-white before:bg-red-300 before:block  before:rounded-full before:w-4 before:h-4  before:-left-5 before:mt-2 before:absolute relative left-5 ">
              <p>MS Word</p>
            </div>
          </div>

          {/* <div className=" mt-10">
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk1}
                </h2>
                <p className="text-gray-500">7/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[70%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk2}
                </h2>
                <p className="text-gray-500">8/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[80%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk3}
                </h2>
                <p className="text-gray-500">6/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[60%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk4}
                </h2>
                <p className="text-gray-500">6/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[60%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk6}
                </h2>
                <p className="text-gray-500">7/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[70%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk5}
                </h2>
                <p className="text-gray-500">8/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[80%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-white font-semibold items-center">
                  {sk7}
                </h2>
                <p className="text-gray-500">8/10</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[80%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Tools;
