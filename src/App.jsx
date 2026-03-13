import { BrowserRouter } from "react-router-dom";
import NavBar from "./exam/NavBar";

function App() {
  return (
    <div>
      <h2>Lab Exam</h2>

      <BrowserRouter>
        <NavBar />
      </BrowserRouter>

    </div>
  );
}

export default App;