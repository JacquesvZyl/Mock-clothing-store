import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.page";
import Checkout from "./routes/checkout/Checkout.page";
import Home from "./routes/home/Home.page";
import Navigation from "./routes/navigation/Navigation.component";
import Shop from "./routes/shop/Shop.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
