import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import About from "./pages/About";
import CategoryHub from "./pages/CategoryHub";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="locksmith" element={<CategoryHub key="locksmith" category="locksmith" />} />
          <Route path="locksmith/:slug" element={<ServiceDetail category="locksmith" />} />
          <Route path="garage-doors" element={<CategoryHub key="garage" category="garage-doors" />} />
          <Route path="garage-doors/:slug" element={<ServiceDetail category="garage-doors" />} />
          <Route path="about" element={<About />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
