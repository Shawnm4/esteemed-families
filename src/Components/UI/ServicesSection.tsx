import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../Utils/Enums/routes";

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleIndividualTherapyNavigation = () => {
    navigate(ERoute.INDIVIDUALTHERAPY);
  };
  const handleChildTherapyNavigation = () => {
    navigate(ERoute.CHILDTHERAPY);
  };
  const handleCouplesTherapyNavigation = () => {
    navigate(ERoute.COUPLESTHERAPY);
  };
  const handleNayansapoTherapyNavigation = () => {
    navigate(ERoute.NYANSAPOTHERAPY);
  };
  const handleMaatTherapyNavigation = () => {
    navigate(ERoute.MAATTHERAPY);
  };
  const handleConsulationNavigation = () => {
    navigate(ERoute.CONSULTATION);
  };

  return (
    <>
      <div className="my-32">
        <Divider style={{ fontFamily: "Lora", fontSize: "2rem" }}>
          Services
        </Divider>
      </div>
      <div
        style={{}}
        className=" w-full h-full flex  justify-center  items-center"
      >
        <div className="w-10/12 flex justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-12  text-center ">
            <div
              onClick={handleIndividualTherapyNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="/1on1-therapy.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">INDIVIDUAL</div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Therapy
              </div>
              <div className="text-">
                <strong>Individual therapy</strong> is a form of{" "}
                <strong>psychotherapy </strong>
                where a trained therapist helps individuals address{" "}
                <strong>personal issues </strong>
                in a <strong>confidential</strong>, supportive setting. It can
                assist with managing symptoms of{" "}
                <strong>
                  anxiety, stress, addiction, or relationship problems
                </strong>
                . Through exploration of <strong>thoughts</strong>,{" "}
                <strong>emotions</strong>, and <strong>behaviors</strong>,
                therapy helps individuals gain <strong>self-awareness</strong>,
                develop <strong>coping strategies</strong>, and make{" "}
                <strong>positive lifestyle changes</strong>. Sessions may be
                short- or long-term, depending on{" "}
                <strong>personal goals</strong> and needs.
              </div>
            </div>
            <div
              onClick={handleChildTherapyNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="/1on1-therapy-with-kid.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">CHILD & ADOLESCENT</div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Therapy
              </div>
              <div className="text-">
                <strong>Child and adolescent African-centered therapy</strong>{" "}
                incorporates African{" "}
                <strong>cultural values, spirituality,</strong> and{" "}
                <strong>communal relationships</strong> to empower individuals,
                address empower individuals and oppression, and promote{" "}
                <strong>healing</strong> through a <strong>holistic</strong>,
                <strong>culturally</strong> sensitive approach.
              </div>
            </div>
            <div
              onClick={handleCouplesTherapyNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="couple-therapy.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">COUPLES & RELATIONAL</div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Therapy
              </div>
              <div className="text-">
                <strong>African-centered couples therapy</strong> focuses on
                addressing <strong>communication</strong>,{" "}
                <strong>power dynamics</strong>, and{" "}
                <strong>cultural identity</strong> in African diaspora families,
                while Ms. Montgomery, trained in{" "}
                <strong>Emotionally Focused Therapy (EFT)</strong>, uses an
                evidence-based approach to help couples in relationship
                distress.
              </div>
            </div>
            <div
              onClick={handleNayansapoTherapyNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="/nayansapo.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">NYANSAPO LEARNING</div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Circles
              </div>
              <div className="text-">
                The Nyansapo Learning Circle fosters <strong>trust </strong>
                through<strong> collective learining</strong> and{" "}
                <strong>shared wisdom </strong>. In a safe, inclusive space,
                participants support each other, exchanging knowledge and
                experiences. Rooted in African values, it empowers individuals
                to feel <strong>heard</strong>, <strong>valued</strong>, and
                <strong> connected</strong>, creating a strong, trust-based
                <strong>community</strong>.
              </div>
            </div>
            <div
              onClick={handleMaatTherapyNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="/maat.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">MA'AT HEALING</div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Circles
              </div>
              <div className="text-">
                The Ma'at Learning Circle fosters trust through{" "}
                <strong>truth</strong>, <strong>balance</strong>, and{" "}
                <strong>harmony</strong>. In a safe and supportive space,
                participants share experiences and{" "}
                <strong>grow together</strong>, rooted in ancient wisdom. This
                circle helps individuals feel <strong>valued</strong> and
                <strong> connected </strong>as they pursue knowledge and{" "}
                <strong>personal growth</strong>.
              </div>
            </div>
            <div
              onClick={handleConsulationNavigation}
              className="drop-shadow-xl border-2 rounded p-10 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  style={{ borderRadius: "5%" }}
                  src="/cands.jpg"
                  className="w-1/2"
                />
              </div>
              <div className="font-bold text-3xl">
                CONSULTATION & SUPERVISION
              </div>
              <div className="text-3xl mb-3" style={{ fontFamily: "Lora" }}>
                Circles
              </div>
              <div className="text-">
                African-centered consultation and supervision empowers
                individuals of African descent by{" "}
                <strong>integrating cultural experiences</strong> and
                <strong> traditional healing practices</strong>. It fosters
                trust through professional support, ensuring ethical growth and
                skill development for mental health professionals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
