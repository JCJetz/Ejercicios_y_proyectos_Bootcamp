import { BrowserRouter, Route, Outlet, Routes } from "react-router-dom";
import Series from "./Series.js";
import Movies from "./Movies.js";
import Dashboard from "./Dashboard.js";
import Bookmarked from "./Bookmarked.js";
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; Manera dos

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Dashboard />
        <Outlet />
       
      </>
    )
  }

  const BrowserRoutes = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmarked" element={<Bookmarked />} />
          </Routes>
        </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

//manera dos
/*
export default function Router() {
  const Layout = () => {
    return (
      <>
        <Home />
        <Outlet />
        <Series />
        <Dashboard />
      </>
    );
  };

  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/",
          element: <Movies />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRoutes} />;
}
*/



