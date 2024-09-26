import ReusableButton from "../Components/Ant/ReusableButton";
import { EColors } from "../Utils/Enums/colors";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../Utils/Enums/routes";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function TopNavBar() {
  const navigate = useNavigate();

  // NAVIGATION ROUTES
  function navigateHome() {
    navigate(ERoute.ROOT);
  }
  function navigateToAboutDenise() {
    navigate(ERoute.ABOUTDENISE);
  }
  function navigateToServices() {
    navigate(ERoute.ROOT);
    setTimeout(() => {
      window.scrollTo({
        top: 2600,
        behavior: "smooth",
      });
    }, 100);
  }
  function navigateToContact() {
    navigate(ERoute.CONTACT);
  }
  function navigateToInvestmentPage() {
    navigate(ERoute.INVESTMENT);
  }
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: EColors.bgprimary,
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        className="hidden 2xl:flex justify-center h-24 "
      >
        <header onClick={navigateHome} className="flex cursor-pointer ">
          <img src="/esteemed-familieslogo.png" />
          <div
            style={{ fontFamily: "Lora" }}
            className="self-center text-2xl font-medium"
          >
            <div>Esteemed</div>
            <div>Families</div>
          </div>
        </header>
        <section
          style={{ fontFamily: "Inter" }}
          className=" w-2/4 flex justify-evenly items-center text-lg "
        >
          <div className=" cursor-pointer" onClick={navigateHome}>
            Home
          </div>
          <div className="cursor-pointer" onClick={navigateToAboutDenise}>
            About Denise
          </div>
          <div onClick={navigateToServices} className="cursor-pointer">
            Services
          </div>
          <div onClick={navigateToInvestmentPage} className="cursor-pointer">
            Investment
          </div>
        </section>
        <div
          style={{ fontFamily: "Inter" }}
          onClick={navigateToContact}
          className="flex items-center"
        >
          <ReusableButton className="h-10 w-25">Contact</ReusableButton>
        </div>
      </nav>
      <nav className="lg:hidden">
        <Drawer
          style={{ backgroundColor: EColors.bgprimary }}
          onClose={onClose}
          open={open}
        >
          <div className="flex justify-center">
            <div
              style={{ fontFamily: "Inter" }}
              className="grid grid-cols-1 gap-8 text-xl font-semibold"
            >
              <div>Home</div>
              <div>About Denise</div>
              <div>Investment</div>
              <div>Contact</div>
            </div>
          </div>
        </Drawer>
        <div
          className="h-20 flex justify-evenly items-center"
          style={{ backgroundColor: EColors.bgprimary }}
        >
          <div className="flex items-center gap-2 w-1/2">
            <img
              className="w-1/4  md:w-1/5 "
              src="/esteemed-familieslogo.png"
              alt="esteemed families logo"
            />
            <div className="font-semibold" style={{ fontFamily: "Lora" }}>
              <div>Esteemed</div>
              <div>Families</div>
            </div>
          </div>
          <div onClick={showDrawer} className="text-2xl">
            <MenuOutlined />
          </div>
        </div>
      </nav>
    </>
  );
}
