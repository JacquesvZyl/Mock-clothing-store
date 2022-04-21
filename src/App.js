import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.page";
import Home from "./routes/home/Home.page";
import Navigation from "./routes/navigation/Navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
