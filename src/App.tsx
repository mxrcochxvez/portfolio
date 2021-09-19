import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="w-screen h-screen bg-blue-600 text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl">Marco Chavez</h1>
        <p>Software Developer</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
          <a href="https://twitter.com/marcode_chavez" target="_blank" rel="noreferrer">
            <button className="bg-white text-blue-600 px-2 py-2 rounded-md ring-2 ring-blue-400 font-bold">Twitter</button>
          </a>
          <a href="https://www.linkedin.com/in/marco-chavez-jr-334514b4/" target="_blank" rel="noreferrer">
            <button className="rounded-md ring-2 ring-white font-bold px-2 py-2">Linked In</button>
          </a>
          <a href="https://www.github.com/mxrcochxvez/" target="_blank" rel="noreferrer">
            <button className="bg-gray-800 rounded-md ring-2 ring-gray-500 font-bold px-2 py-2">GitHub</button>
          </a>
          <a href="https://codepen.io/mxrcochxvez/" target="_blank" rel="noreferrer">
            <button className="bg-gray-600 rounded-md ring-2 ring-gray-800 font-bold px-2 py-2">CodePen</button>
          </a>
        </div>
        <div className="absolute flex justify-center bottom-2">
          <p className="text-gray-400">This project was built using React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
