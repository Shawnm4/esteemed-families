import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { EColors } from "./Utils/Enums/colors";
import { routes } from "./Routing/routes";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </ConfigProvider>
  );
}

export default App;
const theme = {
  token: {
    colorPrimary: EColors.primary,
  },
};
