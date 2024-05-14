/* Author: Sotiris Konstantis */

import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
