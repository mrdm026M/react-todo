import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="p-4 header__section">
      <div className="m-4 text-center website__heading">
        <h1 className="mb-2 text-3xl md:text-4xl">React | To-Do 📄</h1>
        <hr className="m-auto bg-white border-none h-0.5 w-40 md:w-80" />
      </div>
    </header>
  );
};
