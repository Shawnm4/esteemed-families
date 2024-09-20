import { RouteObject } from "react-router-dom";
import { ERoute } from "../Utils/Enums/routes";

import Layout from "../Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import IndividualTherapy from "../Pages/TherapyServices/IndividualTherapy";

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
    ],
  },
];
