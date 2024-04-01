import profile from "../assets/mpto3.jpg";
import nbc from "../assets/nbc.png";
import todo from "../assets/todo.png";
import tictactoe from "../assets/tictactoe.png";
import watch from "../assets/watch.png";
import note from "../assets/notesapp.png";
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
              with JavaScript , React.js , looking for a full time opportunity
              to use my knowledge.
            </p>
          </div>
          <div>
            <img src={profile} width={340} className="rounded-full mx-3" />
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <h2 className="text-3xl px-3 text-white font-semibold">Projects</h2>
          <div className="grid gap-4 flex-col sm:flex-row grid-cols-2 mt-10 px-5">
            <div className="border  p-5">
              <img src={nbc} />
              <h2 className="text-cyan-300 font-bold mt-2 text-1xl">
                The NBC NEWS
              </h2>
              <p className=" text-white ">
                This is a News SPA , code in React.js . Taking news articales
                from an API.
              </p>
              <div className="flex mt-3 ">
                <button className="text-yellow-200 text-xl hover:bg-red-200 hover:text-stone-900 border  rounded-md w-28  mx-4 p-1 ">
                  <a
                    target="_blank"
                    href="https://github.com/Shivamzee/The-NBC-News"
                  >
                    Live
                  </a>
                </button>
                <button className="text-yellow-400 text-xl hover:bg-red-200 hover:text-stone-900 border rounded-md w-28 mx-4 p-1">
                  <a
                    target="_blank"
                    href=" https://github.com/Shivamzee/The-NBC-News"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className="border p-5">
              <img src={tictactoe} />
              <h2 className="text-cyan-300 font-bold  mt-2 text-1xl">
                Tic Tac Toe
              </h2>
              <p className=" text-white ">Simple game, code in React.js .</p>
              <div className="flex mt-3 ">
                <button className="text-yellow-200 text-xl hover:bg-red-200 hover:text-stone-900 border  rounded-md w-28  mx-4 p-1 ">
                  <a
                    target="_blank"
                    href="https://shivam-reactp1-tictactoe.netlify.app"
                  >
                    Live
                  </a>
                </button>
                <button className="text-yellow-400 text-xl hover:bg-red-200 hover:text-stone-900 border rounded-md w-28 mx-4 p-1">
                  <a target="_blank" href="https://shorturl.at/qwyEF">
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className="border p-5">
              <img src={watch} />
              <h2 className="text-cyan-300 font-bold  mt-2 text-1xl">
                Wrist Watch E-com app page
              </h2>
              <p className=" text-white ">
                This is a e-commerce website page. Code in HTML,CSS,JavaScript.
              </p>
              <div className="flex mt-3 ">
                <button className="text-yellow-200 text-xl hover:bg-red-200 hover:text-stone-900 border  rounded-md w-28  mx-4 p-1 ">
                  <a
                    href="https://wrist-watch-shivam8.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
                <button className="text-yellow-400 text-xl hover:bg-red-200 hover:text-stone-900 border rounded-md w-28 mx-4 p-1">
                  <a
                    href="https://github.com/Shivamzee/Wrist-Watch-shop-js-Project"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className="border p-5">
              <img src={todo} />
              <h2 className="text-cyan-300 font-bold  mt-2 text-1xl"></h2>
              <p className=" text-white ">
                This is a responsive todo web app , it has indicators about
                todo. Code in HTML,CSS,JavaScript.
              </p>
              <div className="flex mt-3 ">
                <button className="text-yellow-200 text-xl hover:bg-red-200 hover:text-stone-900 border  rounded-md w-28  mx-4 p-1 ">
                  <a
                    target="_blank"
                    href="https://reaponsive-todo-shivamp8.netlify.app/"
                  >
                    Live
                  </a>
                </button>
                <button className="text-yellow-400 text-xl hover:bg-red-200 hover:text-stone-900 border rounded-md w-28 mx-4 p-1">
                  <a
                    target="_blank"
                    href="https://reaponsive-todo-shivamp8.netlify.app/"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className="border p-5">
              <img src={note} />
              <h2 className="text-cyan-300 font-bold  mt-2 text-1xl">
                Notes web App
              </h2>
              <p className=" text-white ">
                This is a responsive note taking web app. Code in
                HTML,CSS,JavaScript.
              </p>
              <div className="flex mt-3 ">
                <button className="text-yellow-200 text-xl hover:bg-red-200 hover:text-stone-900 border  rounded-md w-28  mx-4 p-1 ">
                  <a
                    href="https://shivam-noteapp-pro6.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
                <button className="text-yellow-400 text-xl hover:bg-red-200 hover:text-stone-900 border rounded-md w-28 mx-4 p-1">
                  <a
                    href="https://github.com/Shivamzee/My-JavaScript-Projects-Note-app/tree/main"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainIntro;
