import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import { Content } from "antd/es/layout/layout";
export default function Layout() {
  return (
    <>
      <TopNavBar />
      <main className="flex">
        <Content className="w-full p-0">
          <Outlet />
        </Content>
      </main>
    </>
  );
}
