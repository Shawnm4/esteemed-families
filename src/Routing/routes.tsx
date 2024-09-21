import { RouteObject } from "react-router-dom";
import { ERoute } from "../Utils/Enums/routes";

import Layout from "../Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import IndividualTherapy from "../Pages/TherapyServices/IndividualTherapy";
import CouplesTherapy from "../Pages/TherapyServices/CouplesTherapy";
import MaatTherapy from "../Pages/TherapyServices/MaatTherapy";
import NyansapoTherapy from "../Pages/TherapyServices/NyansapoTherapy";
import ChildTherapy from "../Pages/TherapyServices/ChildTherapy";
import Consultation from "../Pages/TherapyServices/Consultation";

export const routes: RouteObject[] = [
  {
    path: ERoute.ROOT,
    element: <Layout />,
    children: [
      {
        path: ERoute.ROOT,
        element: <HomeScreen />,
      },
      {
        path: ERoute.INDIVIDUALTHERAPY,
        element: <IndividualTherapy />,
      },
      {
        path: ERoute.CHILDTHERAPY,
        element: <ChildTherapy />,
      },

      {
        path: ERoute.COUPLESTHERAPY,
        element: <CouplesTherapy />,
      },
      {
        path: ERoute.MAATTHERAPY,
        element: <MaatTherapy />,
      },
      {
        path: ERoute.NYANSAPOTHERAPY,
        element: <NyansapoTherapy />,
      },
      {
        path: ERoute.CONSULTATION,
        element: <Consultation />,
      },
    ],
  },
];
