import React from "react";
import Home from "./Home/index.js";
import Demo from "./SceneEditor/index.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { CssBaseline, ToggleButton } from "@mui/material";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import SideDrawer from "./UI/SideDrawer.js";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#eeeeee",
      paper: "#fafafa",
    },
  },
});

const App = () => {
  const [selected, setSelected] = React.useState(true);
  const routes = (
    <div>
      <ToggleButton
        value='check'
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}>
        {selected ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}
      </ToggleButton>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/docs' element={<Demo />} />
        <Route path='/settings' />
      </Routes>
    </div>
  );
  return (
    <>
      <ThemeProvider theme={selected ? lightTheme : darkTheme}>
        <BrowserRouter>
          <CssBaseline />
          <SideDrawer main={routes} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
