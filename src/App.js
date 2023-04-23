import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SuspenseLayout } from "@/layouts/suspense.layout";
const HomePage = React.lazy(() => import("@/pages/home"));
const PoolPage = React.lazy(() => import("@/pages/pool"));
const StakingPage = React.lazy(() => import("@/pages/staking"));

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
  {
    path: "/staking",
    element: (
      <SuspenseLayout>
        <StakingPage />
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
