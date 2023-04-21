import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SuspenseLayout } from "@/layouts/suspense.layout";
const HomePage = React.lazy(() => import("@/pages/home"));
const PoolPage = React.lazy(() => import("@/pages/pool"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseLayout>
        <HomePage />
      </SuspenseLayout>
    ),
  },
  {
    path: "/pool",
    element: (
      <SuspenseLayout>
        <PoolPage />
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
