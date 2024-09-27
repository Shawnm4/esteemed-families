import { Divider } from "antd";
import { EColors } from "../Utils/Enums/colors";
import ProfileFooter from "../Components/UI/ProfileFooter";
import Footer from "../Components/UI/Footer";
import "./AboutDenise.css";
import { useEffect } from "react";
import MobileAboutDeniseSection from "../Components/Mobile/MobileAboutDeniseSection";

export default function AboutDenisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "Inter" }}
        className="hidden 2xl:inline-block relative-container2"
      >
        <div className="background-section3">
          <div className="content3">
            <div className=" w-full flex justify-center overlay-image2 ">
              <div
                style={{
                  borderRadius: "2%",
                  backgroundColor: EColors.bgprimary,
                }}
                className=" w-1/2 p-10   "
              >
                <div
                  style={{ fontFamily: "Lora", color: "black" }}
                  className="font-semibold text-4xl mb-5"
                >
                  <div>Hi, Im Denise,</div>
                  <div>a Maryland and D.C. Therapist</div>
                </div>
                <div className="text-center">
                  <div
                    style={{ color: EColors.textSecondary }}
                    className="text-xl mb-5 "
                  >
                    As a Licensed Clinical Social Worker and Personal
                    Development Coach with over 20 years of experience, I’m here
                    to guide you toward lasting, meaningful change. My approach
                    is centered on working with you at the deepest level to
                    address the root of your challenges, helping you achieve
                    your goals in the most effective way possible.
                  </div>
                </div>
                <div className="text-center">
                  <div
                    style={{ color: EColors.textSecondary }}
                    className=" text-xl mb-5"
                  >
                    I genuinely care about your well-being and am passionate
                    about helping you live the life you deserve. I believe in
                    creating a safe, supportive space where you feel heard,
                    understood, and empowered to move forward. I am deeply
                    committed to my own growth, so I can continue providing the
                    highest level of care and expertise to every client.
                  </div>
                </div>
                <div className="text-center ">
                  <div
                    style={{ color: EColors.textSecondary }}
                    className=" text-xl"
                  >
                    If you’re ready to make a change, I’d love to support you on
                    your journey. Let’s work together to unlock the best version
                    of yourself.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="flex justify-center mt-24   ">
          <div className=" w-3/4 text-center">
            <div
              style={{ fontFamily: "Lora" }}
              className="mb-20 mt-12 text-4xl font-semibold "
            >
              My Credentials
            </div>
            <div className="flex justify-center">
              <div className="grid gap-8 grid-cols-5 grid-rows-2 mb-32 w-1/2">
                <div>
                  <img src="/catp.png" />
                </div>
                <div>
                  <img src="/ccatp.png" />
                </div>
                <div>
                  <img src="adhd.png" />
                </div>
                <div>
                  <img src="clinical-trauma professional2.png" />
                </div>
                <div>
                  <img src="cdbt.png" />
                </div>
                <div>
                  <img src="absw.png" />
                </div>
                <div>
                  <img src="play-therapy.png" />
                </div>
                <div>
                  <img src="psy.png" />
                </div>
                <div>
                  <img src="clinicalfellow.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Divider></Divider>
        <div className=" flex justify-evenly mt-10  w-full  ">
          <div className="w-4/12 drop-shadow-lg">
            <img style={{ borderRadius: "5%" }} src="about-denise-pic.jpg " />
          </div>
          <div className="w-1/2 text-center">
            <div
              style={{ fontFamily: "Lora" }}
              className="font-semibold text-4xl mb-5 "
            >
              Why I Can Help You
            </div>
            <div
              style={{ color: EColors.textSecondary }}
              className="mb-5 text-xl"
            >
              Denise Montgomery is an African-Centered Licensed Clinical Social
              Worker and Licensed Marriage and Family Therapist with over 20
              years of experience serving the DC and Maryland areas. With
              degrees from Virginia State University and Virginia Commonwealth
              University, she is also a nationally recognized Registered Play
              Therapist – Supervisor.
            </div>
            <div style={{ color: EColors.textSecondary }} className="text-xl">
              Specializing in working with children exposed to abuse, neglect,
              or mental health issues, as well as adults and families managing
              trauma, sexual assault, and mental health concerns, Ms. Montgomery
              uses a range of evidence-based techniques to guide clients toward
              healthy lifestyle changes. She draws on her extensive experience
              in urban communities to provide practical, relatable therapy that
              makes a real difference. Having collaborated with organizations
              like Children's National Hospital and the DC Metropolitan Police
              Department, she is committed to advocating for marginalized
              communities.
            </div>
          </div>
        </div>
        <Divider></Divider>
        <ProfileFooter />
        <Footer />
      </div>
      <MobileAboutDeniseSection />
      <div className="2xl:hidden">
        <Footer />
      </div>
    </>
  );
}
