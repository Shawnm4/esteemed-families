import { useState } from "react";
import { EColors } from "../../Utils/Enums/colors";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
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
    </>
  );
}
