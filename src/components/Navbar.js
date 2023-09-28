import React from "react";

export default function Navbar() {
  return (
    <nav className="container flex justify-between bg-purple-700 box-border shadow-md text-white">
      <div className="text-2xl flex text-center justify-center gap-2 p-3">
        <img src="/images/TrollFace.png" className="w-20"/>
        <a href="#">Meme Generator</a>
      </div>
      <div className="text-sm p-3">
        <a href="#">React-course project3</a>
      </div>
    </nav>
  );
}
