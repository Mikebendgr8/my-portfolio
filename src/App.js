import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route element={< Home />} path='/' exact></Route>
        <Route element={< About />} path='/about'></Route>
        <Route element={< Skills />} path='/skills'></Route>
        <Route element={< SinglePost />} path='/post/:slug'></Route>
        <Route element={< Post />} path='/post'></Route>
        <Route element={< Project />} path='/project'></Route>
        <Route element={< Services />} path='/services'></Route>
        <Route element={< Contact />} path='/contact'></Route>
        <Route element={< Error />} path='*'></Route>
      </Routes>
    </Router>
  )
}

export default App;
