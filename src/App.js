import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateSchedule } from "./components/CreateSchedule";
import { EditSchedule } from "./components/EditSchedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createschedule" element={<CreateSchedule />} />
        <Route exact path="/editschedule/:id" element={<EditSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
