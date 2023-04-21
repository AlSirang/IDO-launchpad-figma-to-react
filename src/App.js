import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SuspenseLayout } from "@/layouts/suspense.layout";

const Home = React.lazy(() => import("@/pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseLayout>
        <Home />
      </SuspenseLayout>
    ),
  },
  {
    path: "/pool",
    element: (
      <SuspenseLayout>
        <Home />
      </SuspenseLayout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
