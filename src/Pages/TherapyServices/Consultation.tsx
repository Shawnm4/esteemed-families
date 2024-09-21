import { Divider } from "antd";
import { EColors } from "../../Utils/Enums/colors";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import Footer from "../../Components/UI/Footer";
import { useEffect } from "react";

export default function Consultation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex mt-28  justify-center">
        <div className="">
          <h1
            style={{ fontFamily: "Lora" }}
            className="text-5xl font-semibold mb-8 text-center"
          >
            Consultation and Supervision Circle
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
                Esteemed Families, LLC provides professionals with the support
                and guidance needed to manage the clinical mental health
                concerns you may have regarding your caseload. We offer a safe
                and confidential space where you can discuss your feelings,
                thoughts, and emotions with a trained therapist. Our services
                are tailored to meet your individual needs.
              </div>
              <div className="mb-6">
                The primary function of clinical supervision is to provide a
                safe and supportive environment for the supervisee to reflect on
                their practice, identify areas for growth, and receive feedback
                on their performance. Clinical supervision can be used to
                address a wide range of issues, including clinical skills
                development, professional identity formation, and personal
                growth.
              </div>
              <div className="mb-6">
                There are different types of clinical supervision, including
                individual, group, and peer supervision. The type of supervision
                used will depend on the needs of the supervisee and the context
                in which they work
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-20">
            <div className="w-1/2">
              <Divider></Divider>
              <div className="text-3xl font-bold text-center">
                Types of Supervision
              </div>
            </div>
          </div>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className="flex justify-center text-xl mb-32"
          >
            <ul style={{ fontFamily: "Inter", color: EColors.textSecondary }}>
              <li>&bull; Individual Consultation</li>
              <li>&bull; Group Consultation</li>
              <li>&bull; Play Therapy Consultation</li>
              <li>&bull; Child Welfare Trainings</li>
              <li>&bull; Play Therapy Training</li>
            </ul>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <ProfileFooter />
      <Footer />
    </>
  );
}
