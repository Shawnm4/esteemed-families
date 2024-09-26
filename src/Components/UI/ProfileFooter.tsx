import { useNavigate } from "react-router-dom";
import { EColors } from "../../Utils/Enums/colors";
import { ERoute } from "../../Utils/Enums/routes";
import ReusableButton from "../Ant/ReusableButton";
import { RightOutlined } from "@ant-design/icons";

export default function ProfileFooter() {
  const navigate = useNavigate();
  function navigateToContact() {
    navigate(ERoute.CONTACT);
  }
  return (
    <>
      <div
        style={{ fontFamily: "Inter" }}
        className=" hidden 2xl:flex  justify-center mt-32 text-xl "
      >
        <div className="w-1/2 text-center">
          <div className="flex justify-center mb-8 ">
            <img
              src="/denise-montgomery.jpg"
              style={{ border: "", borderRadius: "2%" }}
              className=" w-60 h-72 drop-shadow-xl"
            />
          </div>
          <div className="mb-8 text-3xl font-bold ">Book in to see Denise</div>
          <div
            className="mb-10"
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
          >
            You're welcome to reach out at any time to discuss your goals and
            how I can support you. Our consultation is a great opportunity to
            ask questions, explore how we might work together, and see if we're
            a good fit. Many clients find this initial conversation incredibly
            helpful and reassuring.
          </div>
          <div
            onClick={navigateToContact}
            className="flex justify-center items-center"
          >
            <ReusableButton className="h-10 w-25">Contact</ReusableButton>
          </div>
        </div>
      </div>
      <div className="2xl:hidden">
        <div
          style={{ fontFamily: "Inter" }}
          className=" flex  justify-center mt-16 text-xl "
        >
          <div className="w-3/4 text-center">
            <div className="flex justify-center mb-8 ">
              <img
                style={{ borderRadius: "5%" }}
                src="/denise-montgomery.jpg"
                className="h-44 my-4"
              />
            </div>
            <div className="mb-8 text-xl whitespace-nowrap font-bold ">
              Book in to see Denise
            </div>
            <div
              className="mb-10 text-sm"
              style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            >
              You're welcome to reach out at any time to discuss your goals and
              how I can support you. Our consultation is a great opportunity to
              ask questions, explore how we might work together, and see if
              we're a good fit. Many clients find this initial conversation
              incredibly helpful and reassuring.
            </div>
            <div
              onClick={navigateToContact}
              className="flex justify-center items-center"
            >
              <ReusableButton className="flex gap-2 mb-4">
                <div className="underline">Contact</div>
                <RightOutlined />
              </ReusableButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
