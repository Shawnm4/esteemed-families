import { Divider } from "antd";
import { EColors } from "../../Utils/Enums/colors";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import Footer from "../../Components/UI/Footer";
import { useEffect } from "react";

export default function IndividualTherapyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="hidden 2xl:flex mt-28  justify-center">
        <div className="">
          <h1
            style={{ fontFamily: "Lora" }}
            className="text-5xl font-semibold mb-8 text-center"
          >
            Individual Therapy
          </h1>
          <div
            style={{ color: EColors.textSecondary }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Individual therapy offers personal growth, support, and coping
            skills.
          </div>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                I offer individual therapy in the Maryland and D.C. area,
                helping people work through personal challenges like anxiety,
                stress, addiction, or relationship issues. Together, we can
                improve your well-being and support you in living a happier,
                more fulfilling life.
              </div>
              <div className="mb-6">
                Everyone can benefit from therapy at some point in their lives.
                If your challenges are preventing you from living the life you
                want, it’s time to seek support.
              </div>
              <div className="mb-6">
                Individual therapy helps uncover the root causes of your
                problems. Together, we take a thorough and collaborative
                approach to shift your thinking, so the things that once made
                you anxious no longer have the same effect.
              </div>
              <div>
                You'll gain more control and be able to respond with calmness.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-20">
            <div className="w-1/2">
              <Divider></Divider>
              <div className="text-3xl font-bold text-center">
                Types of Therapy
              </div>
            </div>
          </div>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className="flex justify-evenly text-xl mb-32"
          >
            <ul style={{ fontFamily: "Inter", color: EColors.textSecondary }}>
              <li>&bull; African Centered Therapy</li>
              <li>&bull; Brainspotting</li>
              <li>&bull; Cognitive Behavioral Therapy (CBT)</li>
              <li>&bull; Dialectical Behavioral Therapy(DBT)</li>
            </ul>
            <ul>
              <li>&bull; Internal Family Systems Therapy</li>
              <li>&bull; (IFS)</li>
              <li>&bull; Play Therapy</li>
              <li>&bull; Somatic Experiencing (SE) Trauma Informed Therapy</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className=" w-1/2 text-center flex  items-center">
              <div className="text-3xl w-3/4">
                <div>Individual therapy is not about fixing you; </div>
                <div>
                  it's about{" "}
                  <strong>
                    uncovering your strengths and helping you navigate life's
                    challenges.
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <div className="mt-24">
              <div
                style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                className="text-xl mb-6"
              >
                My personalized and insightful approach to individual therapy
                offers you these benefits:
              </div>

              <ul
                style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                className="text-xl mb-6"
              >
                <li>&bull; African Centered Therapy</li>
                <li>&bull; Brainspotting</li>
                <li>&bull; Cognitive Behavioral Therapy (CBT)</li>
                <li>&bull; Dialectical Behavioral Therapy(DBT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:hidden flex justify-center">
        <div className="w-3/4">
          <div
            style={{ fontFamily: "Lora" }}
            className="mt-20 font-bold text-2xl text-center"
          >
            Individual Therapy
          </div>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className="text-center"
          >
            Individual therapy offers personal growth, support, and coping
            skills.
          </div>
          <Divider></Divider>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className=""
          >
            <div className="mb-4">
              I offer individual therapy in the Maryland and D.C. area, helping
              people work through personal challenges like anxiety, stress,
              addiction, or relationship issues. Together, we can improve your
              well-being and support you in living a happier, more fulfilling
              life.
            </div>
            <div className="mb-4">
              Everyone can benefit from therapy at some point in their lives. If
              your challenges are preventing you from living the life you want,
              it’s time to seek support.
            </div>
            <div className="mb-4">
              Individual therapy helps uncover the root causes of your problems.
              Together, we take a thorough and collaborative approach to shift
              your thinking, so the things that once made you anxious no longer
              have the same effect.
            </div>
            <div>
              You'll gain more control and be able to respond with calmness.
            </div>
            <Divider></Divider>
            <div className="font-bold text-center my-6">Types of Therapy</div>
            <ul className="grid grid-cols-1 gap-2">
              <li>&bull;African Centered Therapy</li>
              <li>&bull; Brainspotting</li>
              <li>&bull; Cognitive Behavioral Therapy (CBT)</li>
              <li>&bull; Dialectical Behavioral Therapy(DBT)</li>
              <li>&bull; Internal Family Systems Therapy</li>
              <li>&bull; (IFS)</li>
              <li>&bull; Play Therapy</li>
              <li>&bull; Somatic Experiencing (SE) Trauma Informed Therapy</li>
            </ul>
          </div>
        </div>
      </div>
      <ProfileFooter />
      <Footer />
    </>
  );
}
