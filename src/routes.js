import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Services from "./components/Services/Services";
import RevivalOfCarColor from "./components/News/Posts/RevivalOfCarColor";
import DefaultPost from "./components/News/Posts/DefaultPost";
import PdrSmoothing from "./components/News/Posts/PdrSmoothing";
import CarSunburn from "./components/News/Posts/CarSunburn";
import WindshieldProtectiveCovers from "./components/News/Posts/WindshieldProtectiveCovers";
import DetailingInHome from "./components/News/Posts/DetailingInHome";
import Gallery from "./components/Gallery/Gallery";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/contact",
    element: <ContactUs />,
  },
 {path : '/services' , element:<Services />},
 {path:'/gallery', element: <Gallery />},
  {
    path: "/news",
    element: <DefaultPost />,
    children: [
      {
        path: "Revivalofcarcolor/:id",
        element: <RevivalOfCarColor />,
      },
      {
        path: "PDR-smoothing/:id",
        element: <PdrSmoothing />,
      },
      { path: "Car-sunburn/:id", element: <CarSunburn /> },
      {
        path: "Windshield-protective-covers/:id",
        element: <WindshieldProtectiveCovers />,
      },
      { path: "Detailing-in-home/:id", element: <DetailingInHome /> },
      
    ],
  },
];

export default routes;
