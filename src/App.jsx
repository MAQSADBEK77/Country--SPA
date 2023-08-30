import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./assets/Layout";
import Home from "./pages/Home";
import Country from './pages/Country'
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="country" element={<Country />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
