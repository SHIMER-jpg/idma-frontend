import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./componens/NavBar/NavBar";

import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
