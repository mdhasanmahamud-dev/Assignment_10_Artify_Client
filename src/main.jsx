import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";
import ArtWorkProvider from "./context/ArtWorkProvider";
import FavoriteProvider from "./context/FavoriteProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FavoriteProvider>
        <ArtWorkProvider>
          <RouterProvider router={router} />
        </ArtWorkProvider>
      </FavoriteProvider>
    </AuthProvider>
  </StrictMode>
);
