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
import UpdateGallery from "../pages/MyGallery/UpdateGallery/UpdateGallery";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../dashboard/dashboard/dashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
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
      {path: "/artworks/:id",element: <ArtworkDetails />},
      {path : "/about", element : <About/>},
      {path : "/contact", element : <Contact/>}
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-artwork",
        element: (
          <ProtectedRoutes>
            <AddArtwork />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-gallery",
        element: (
          <ProtectedRoutes>
            <MyGallery />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-gallery/edit/:id",
        element: (
          <ProtectedRoutes>
            <UpdateGallery />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-favorites",
        element: (
          <ProtectedRoutes>
            <MyFavorites />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
