import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./pages/item";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="App" style={{paddingTop: 50}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/card" element={<ItemPage/>} />
          <Route path="/card/:id" element={<ItemPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
