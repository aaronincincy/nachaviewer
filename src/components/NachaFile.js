import React, { useState, useEffect, useRef } from "react";
import FileContent from "./FileContent";

function useFindHijacking(callback) {
  useEffect(() => {
    function handleKeypress(e) {
      if (e.ctrlKey && e.key === "f") {
        callback();
        e.preventDefault();
      }
    }

    window.addEventListener("keydown", handleKeypress);

    return () => window.removeEventListener("keydown", handleKeypress);
  }, [callback]);
}

function NachaFile({ children }) {
  const searchBox = useRef();
  useFindHijacking(() => {
    searchBox.current.focus();
    searchBox.current.select();
  });
  const [search, setSearch] = useState("");
  const lines = children.trim().split("\n");

  return (
    <>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        ref={searchBox}
      />
      <FileContent file={lines} filter={search} />
    </>
  );
}

export default NachaFile;
