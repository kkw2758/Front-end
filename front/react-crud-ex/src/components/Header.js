import React from "react";

function Header() {
  return (
    <>
      <h1>리액트 미니 프로젝트 실습</h1>
      <a href="/">Main</a>|<a href="/create">Create</a>|
      <a href="/delete">Delete</a>|<a href="/update">Update</a>
    </>
  );
}

export default Header;
