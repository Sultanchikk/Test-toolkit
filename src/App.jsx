import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetail from "./pages/movieDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/errorPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
