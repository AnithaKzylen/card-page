import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/card" element={<Card />} />
        </Routes>
    </div>
  );
}

export default App;
 