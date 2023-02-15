import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./inc/Contact";
import Gallery from "./inc/Gallery";
import Header from "./inc/Header";
import Lecture from "./inc/Lecture";
import Main from "./inc/Main";
import Pofile from "./inc/Pofile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Hello World!</h1>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Pofile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
