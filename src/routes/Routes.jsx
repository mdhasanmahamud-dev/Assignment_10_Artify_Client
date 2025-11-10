import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import ExploreArtworks from "../pages/ExploreArtworks/ExploreArtworks/ExploreArtworks";
import AddArtwork from "../pages/AddArtwork/AddArtwork/AddArtwork";
import MyGallery from "../pages/MyGallery/MyGallery/MyGallery";
import MyFavorites from "../pages/MyFavorites/MyFavorites/MyFavorites";
import Login from "../pages/AuthPages/Login/Login";
import Register from "../pages/AuthPages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import ArtworkDetails from "../pages/ArtworkDetails/ArtworkDetails/ArtworkDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <App /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/explore-artworks", element: <ExploreArtworks /> },
      {
        path: "/add-artwork",
        element: (
          <ProtectedRoutes>
            <AddArtwork />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/artworks/:id",
        element: (
          <ProtectedRoutes>
            <ArtworkDetails />
          </ProtectedRoutes>
        ),
      },
      { path: "/my-gallery", element: <MyGallery /> },
      { path: "/my-favorites", element: <MyFavorites /> },
    ],
  },
]);

export default router;
