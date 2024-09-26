import { RouteObject } from "react-router-dom";
import { ERoute } from "../Utils/Enums/routes";

import Layout from "../Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";

import InvestmentPage from "../Pages/Investment";
import ContactPage from "../Pages/ContactPage";
import AboutDenisePage from "../Pages/AboutDenise";
import ConsultationPage from "../Pages/TherapyServices/Consultation";
import NyansapoTherapyPage from "../Pages/TherapyServices/NyansapoTherapy";
import MaatTherapyPage from "../Pages/TherapyServices/MaatTherapy";
import CouplesTherapyPage from "../Pages/TherapyServices/CouplesTherapy";
import ChildTherapyPage from "../Pages/TherapyServices/ChildTherapy";
import IndividualTherapyPage from "../Pages/TherapyServices/IndividualTherapy";

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
        element: <IndividualTherapyPage />,
      },
      {
        path: ERoute.CHILDTHERAPY,
        element: <ChildTherapyPage />,
      },

      {
        path: ERoute.COUPLESTHERAPY,
        element: <CouplesTherapyPage />,
      },
      {
        path: ERoute.MAATTHERAPY,
        element: <MaatTherapyPage />,
      },
      {
        path: ERoute.NYANSAPOTHERAPY,
        element: <NyansapoTherapyPage />,
      },
      {
        path: ERoute.CONSULTATION,
        element: <ConsultationPage />,
      },
      {
        path: ERoute.ABOUTDENISE,
        element: <AboutDenisePage />,
      },
      {
        path: ERoute.CONTACT,
        element: <ContactPage />,
      },
      {
        path: ERoute.INVESTMENT,
        element: <InvestmentPage />,
      },
    ],
  },
];
