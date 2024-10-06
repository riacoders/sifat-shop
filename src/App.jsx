import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
