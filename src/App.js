import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/blank/Blank";
import Register from "./pages/form/register/Register";
import Login from "./pages/form/login/Login";
import QuickOrder from "./pages/quick-order/QuickOrder";
import Payment from "./pages/payment/Payment";
import OrderNumber from "./pages/order-number/OrderNumber";
import SMSLog from "./pages/sms-log/SMSLog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/quick-order" element={<QuickOrder />} />
          <Route path="/order-number" element={<OrderNumber />} />
          <Route path="/sms-log" element={<SMSLog />} />
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
