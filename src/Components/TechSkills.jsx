const TechSkills = (prop) => {
  const { skills, sk1, sk2, sk3, sk4, sk5, sk6, sk7 } = prop;
  return (
    <main>
      <section className="mt-14 mb-10">
        <div className="container m-auto   px-4">
          <h2 className="text-3xl text-white font-semibold">{skills}</h2>
          <div className=" mt-10">
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
                <p className="text-gray-500">4/10(Learning)</p>
              </div>
              <div className="w-full h-2 bg-slate-50 rounded-md mt-2 block">
                <span className="w-[40%] h-2 bg-cyan-300 rounded-md mt-2 block"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechSkills;
