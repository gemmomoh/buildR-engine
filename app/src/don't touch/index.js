import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Bba from "./b";
import Aba from "./a";

class Mom2 extends Component {
  render() {
    return <div>{routes}</div>;
  }
}

const Header = () => {
  return (
    <header>
      <NavLink to='a'>a</NavLink>
      <NavLink to='b'>b</NavLink>
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/a' element={<Aba />} />
      <Route path='/b' element={<Bba />} />
    </Routes>
  </BrowserRouter>
);

export default Mom2;
