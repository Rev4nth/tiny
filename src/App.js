import logo from "./logo.svg";
import "./App.css";
import "./tailwind.output.css";

const App = () => (
  <div>
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Building apps together
        </p>
      </div>
    </div>
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
          src={logo}
          alt="Woman's Face"
        />
        <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left bg-">
          <p class="text-xl leading-tight">Erin Lindford</p>
          <p class="text-sm leading-tight text-gray-600">Product Engineer</p>
          <div class="mt-4">
            <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
