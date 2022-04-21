import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.page";
import Navigation from "./routes/navigation/Navigation.component";
import Signin from "./routes/sign-in/Signin.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
