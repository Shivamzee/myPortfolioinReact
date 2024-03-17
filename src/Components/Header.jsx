const Header = () => {
  return (
    <>
      <header>
        <div className="  container m-auto px-4 py-6   ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-white text-xl uppercase">
                Sharma Sharma
              </h1>
            </div>
            <div>
              <ul className="flex gap-5 text-2xl">
                <li>
                  <a
                    className="text-yellow-200 hover:text-white cursor-pointer"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-yellow-200 hover:text-white cursor-pointer"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-yellow-200 hover:text-white cursor-pointer"
                    href="#aboutme"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
