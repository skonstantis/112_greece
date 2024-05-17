/* Author: Sotiris Konstantis */

import Nav from "./view/Nav";
import Main from "./view/Main";
import Footer from "./view/Footer";

import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main/>
      <Footer />
    </div>
  );
}
