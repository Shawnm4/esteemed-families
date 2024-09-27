import { Divider } from "antd";
import "./MobileAboutDeniseSection.css";
import { EColors } from "../../Utils/Enums/colors";

export default function MobileAboutDeniseSection() {
  return (
    <>
      <section className="denise-background-section 2xl:hidden"></section>
      <div className="2xl:hidden flex justify-center ">
        <div className="w-3/4">
          <div
            style={{ fontFamily: "Lora" }}
            className="mt-20 font-bold text-2xl text-center"
          >
            Hi, Im Denise, a Maryland and D.C. Therapist
          </div>

          <Divider></Divider>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className=""
          >
            <div className="mb-4">
              I genuinely care about your well-being and am passionate about
              helping you live the life you deserve. I believe in creating a
              safe, supportive space where you feel heard, understood, and
              empowered to move forward. I am deeply committed to my own growth,
              so I can continue providing the highest level of care and
              expertise to every client.
            </div>
            <div className="mb-4">
              If you’re ready to make a change, I’d love to support you on your
              journey. Let’s work together to unlock the best version of
              yourself.
            </div>
            <Divider></Divider>
            <div
              style={{ fontFamily: "Lora" }}
              className="font-bold text-center my-6"
            >
              My Credenitals
            </div>
            <div className="flex justify-center">
              <div className="grid gap-8 grid-cols-1 mb-8 w-2/5">
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
            <div>
              <Divider></Divider>
              <img
                className=" drop-shadow-lg mb-4"
                style={{ borderRadius: "5%" }}
                src="about-denise-pic.jpg "
              />
              <div className="text-center mb-8">
                Denise Montgomery is an African-Centered Licensed Clinical
                Social Worker and Licensed Marriage and Family Therapist with
                over 20 years of experience serving the DC and Maryland areas.
                With degrees from Virginia State University and Virginia
                Commonwealth University, she is also a nationally recognized
                Registered Play Therapist – Supervisor.
              </div>
              <div className="text-center">
                Specializing in working with children exposed to abuse, neglect,
                or mental health issues, as well as adults and families managing
                trauma, sexual assault, and mental health concerns, Ms.
                Montgomery uses a range of evidence-based techniques to guide
                clients toward healthy lifestyle changes. She draws on her
                extensive experience in urban communities to provide practical,
                relatable therapy that makes a real difference. Having
                collaborated with organizations like Children's National
                Hospital and the DC Metropolitan Police Department, she is
                committed to advocating for marginalized communities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
