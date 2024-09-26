import { Divider } from "antd";
import { EColors } from "../Utils/Enums/colors";
import ProfileFooter from "../Components/UI/ProfileFooter";
import Footer from "../Components/UI/Footer";
import { useEffect } from "react";

export default function InvestmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "Inter" }}
        className="flex mt-28  justify-center"
      >
        <div className="">
          <h1
            style={{ fontFamily: "Lora" }}
            className="text-5xl font-semibold mb-8 text-center"
          >
            Investment (Fee for Service) & Approved Insurances
          </h1>
          <div
            style={{ color: EColors.textSecondary }}
            className="text-3xl font-bold mb-10 text-center "
          >
            Esteemed Families, LLC accepts the following insurances
          </div>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className="flex justify-center text-xl"
          >
            <ul>
              <li> &bull; Blue Cross / Blue Shield</li>
              <li> &bull; Evernorth (formerly Cigna)</li>
              <li> &bull; Maryland Medicaid</li>
            </ul>
          </div>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary, fontFamily: "Inter" }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                Depending on your current health insurance provider or employee
                benefit plan, it is possible for services to be covered in full
                or in part. Please contact your provider to verify how your plan
                compensates you for psychotherapy services. I’d recommend asking
                these questions to your insurance provider to help determine
                your benefits:
              </div>

              <div
                style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                className="flex justify-center text-xl"
              >
                <ul>
                  <li>
                    &bull; Does my health insurance plan include mental health
                    benefits?
                  </li>
                  <li>
                    &bull; Do I have a deductible? If so, what is it and have I
                    met it yet?
                  </li>
                  <li>
                    &bull; Does my plan limit how many sessions per calendar
                    year I can have? If so, what is the limit?
                  </li>
                  <li>
                    &bull; Do I need written approval from my primary care
                    physician in order for services to be covered?
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <div style={{ fontFamily: "Inter" }} className="flex justify-center">
        <div>
          <div className="mb-5">
            <div
              className="text-3xl font-bold"
              style={{ color: EColors.textSecondary }}
            >
              Payment
            </div>
            <div
              className="text-xl"
              style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            >
              We accept cash and all major credit cards as forms of payment.
            </div>
          </div>
          <div className="mb-5">
            <div
              className="text-3xl font-bold"
              style={{ color: EColors.textSecondary }}
            >
              Cancellation Policy
            </div>
            <div
              className="text-xl"
              style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            >
              If you are unable to attend a session, please make sure you cancel
              at least 24 hours beforehand. Otherwise, you will be charged for
              the full rate of the session.
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold"
              style={{ color: EColors.textSecondary }}
            >
              Any Other Questions
            </div>
            <div
              className="text-xl"
              style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            >
              Please contact me for any additional questions you may have. I
              look forward to hearing from you!
            </div>
          </div>
        </div>
      </div>
      <ProfileFooter />
      <Footer />
    </>
  );
}
