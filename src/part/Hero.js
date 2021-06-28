import React from "react";

export default function Hero() {
  function submit() {}
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="w-1/2">
        <h1 className="text-5xl text-white mb-5">
          <span className="text-green-500">The New</span> Way to <br /> Archive
          Good <span className="text-green-500">Skill</span>
        </h1>
        <p className="text-white text-lg mb-8">
          We Provide tons of pathskill that you <br /> can choose and focus on
        </p>

        <form onSubmit={submit}>
          <input
            type="text"
            className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
            placeholder="Your email address"
          />
          <button className="bg-yellow-600 hover:bg-yellow-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Daftar Now
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-end pt-24 pr-16"></div>
    </div>
  );
}
