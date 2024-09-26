import { Divider } from "antd";
import Footer from "../../Components/UI/Footer";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import { EColors } from "../../Utils/Enums/colors";
import { useEffect } from "react";

export default function CouplesTherapyPage() {
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
            Couples and Relational Therapy
          </h1>
          <div
            style={{ color: EColors.textSecondary }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Couples therapy strengthens communication and resolves conflicts.
          </div>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                I offer couples therapy in the Maryland and D.C. area, helping
                partners navigate challenges such as communication issues,
                stress, conflict, and intimacy concerns. Together, we can
                strengthen your relationship and support a happier, more
                fulfilling life.
              </div>
              <div className="mb-6">
                Every couple can benefit from therapy at some point in their
                relationship. If challenges are affecting your connection or
                preventing you from having the relationship you want, it’s time
                to seek support.
              </div>
              <div className="mb-6">
                Couples therapy helps uncover the underlying issues affecting
                your relationship. Together, we take a collaborative approach to
                improve communication and resolve conflicts, so the challenges
                that once strained your relationship no longer have the same
                impact.
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
            className="flex justify-center text-xl mb-32"
          >
            <ul style={{ fontFamily: "Inter", color: EColors.textSecondary }}>
              <li>&bull; Emotionally Focused Therapy (EFT)</li>
              <li>&bull; Gottman Marital and Family Therapy</li>
              <li>&bull; Imago Therapy</li>
              <li>&bull; Intimacy From the Inside Out (IFIO)</li>
              <li>&bull; Relational Life Therapy (RLT)</li>
            </ul>
          </div>
          <Divider></Divider>
          <div className="w-full flex justify-center">
            <div className=" w-1/2 text-center flex justify-center items-center">
              <img
                style={{ borderRadius: "5%" }}
                src="/couple-therapy2.jpg"
                className="w-1/2"
              />
            </div>
            <div className="w-1/2">
              <div
                style={{ color: EColors.textSecondary }}
                className="w-3/4 text-3xl"
              >
                Your relationship experiences play a crucial role in shaping the
                dynamics of your partnership. Whether you’ve faced communication
                challenges, trust issues, or emotional disconnects, these
                experiences influence how you relate to each other. In couples
                therapy, we work together to explore these patterns, heal past
                wounds, and develop healthier ways of connecting. By
                understanding how past and present experiences impact your
                relationship, we can create a stronger, more supportive bond
                moving forward. You don't have to navigate these challenges
                alone—growth and reconnection are always possible.
              </div>
            </div>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <div className="2xl:hidden flex justify-center">
        <div className="w-3/4">
          <div
            style={{ fontFamily: "Lora" }}
            className="mt-20 font-bold text-2xl text-center"
          >
            Couple and Relational Therapy
          </div>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className="text-center"
          >
            Couples therapy strengthens communication and resolves conflicts.
          </div>
          <Divider></Divider>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className=""
          >
            <div className="mb-4">
              I offer couples therapy in the Maryland and D.C. area, helping
              partners navigate challenges such as communication issues, stress,
              conflict, and intimacy concerns. Together, we can strengthen your
              relationship and support a happier, more fulfilling life.
            </div>
            <div className="mb-4">
              Every couple can benefit from therapy at some point in their
              relationship. If challenges are affecting your connection or
              preventing you from having the relationship you want, it’s time to
              seek suppor
            </div>
            <div>
              Couples therapy helps uncover the underlying issues affecting your
              relationship. Together, we take a collaborative approach to
              improve communication and resolve conflicts, so the challenges
              that once strained your relationship no longer have the same
              impact.
            </div>
            <Divider></Divider>
            <div className="font-bold text-center my-6">Types of Therapy</div>
            <ul className="grid grid-cols-1 gap-2">
              <li>&bull; Emotionally Focused Therapy (EFT)</li>
              <li>&bull; Gottman Marital and Family Therapy </li>
              <li>&bull; Imago Therapy</li>
              <li>&bull; Intimacy From the Inside Out (IFIO)</li>
              <li>&bull; Relational Life Therapy (RLT)</li>
            </ul>
            <div>
              <img
                className=" drop-shadow-lg my-8"
                style={{ borderRadius: "5%" }}
                src="/couple-therapy2.jpg"
              />
              <div>
                Your relationship experiences play a crucial role in shaping the
                dynamics of your partnership. Whether you’ve faced communication
                challenges, trust issues, or emotional disconnects, these
                experiences influence how you relate to each other. In couples
                therapy, we work together to explore these patterns, heal past
                wounds, and develop healthier ways of connecting. By
                understanding how past and present experiences impact your
                relationship, we can create a stronger, more supportive bond
                moving forward. You don't have to navigate these challenges
                alone—growth and reconnection are always possible.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileFooter />
      <Footer />
    </>
  );
}
