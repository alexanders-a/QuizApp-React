import { Route, Routes } from "react-router-dom";
import Header from "./components/UI/header/Header";
import routes from "./routes/routes";
import Home from "./views/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {routes?.map(({ path, element }, key) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
