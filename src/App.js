import "./App.css";
// import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/blank/Blank";
import Register from "./pages/form/register/Register";
import Login from "./pages/form/login/Login";
import QuickOrder from "./pages/quick-order/QuickOrder";
import Payment from "./pages/payment/Payment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/quick-order" element={<QuickOrder />} />
          <Route path="/order-number" element={<Blank />} />
          <Route path="/sms-log" element={<Blank />} />
          <Route path="/rental-log" element={<Blank />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pricing" element={<Blank />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
