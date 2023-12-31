import { useEffect, useRef, useState } from "react";
import { useKey } from "../Custom Hooks/useKey";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  // useKey Custom Hook & Enter KeyPress Event
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  function handleClick() {}

  // //////
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />

      {/* <button className="btn-del" onClick={() => handleClick()}>
        XXXXXXXXXXXXX
      </button> */}
    </div>
  );
}

export function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
// ///
