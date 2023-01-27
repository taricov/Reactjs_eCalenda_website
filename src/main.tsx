import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageHome from "./pages/PageHome";
import PageApiDocs from "./pages/PageApiDocs";
import PageHelpCenter from "./pages/PageHelpCenter";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageHome />,
//     children: [
//       {
//         path: "api-docs",
//         element: <PageApiDocs />,
//       },
//       {
//         path: "help",
//         element: <PageHelpCenter />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
