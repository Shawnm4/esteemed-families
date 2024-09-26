import { Divider } from "antd";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import Footer from "../../Components/UI/Footer";
import { EColors } from "../../Utils/Enums/colors";
import { useEffect } from "react";

export default function NyansapoTherapyPage() {
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
            Nyansapo Healing Circles
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
                The word Nyansapo means “wisdom knot” in the Akan language. The
                symbol is primarily associated with education, but it also
                represents ingenuity, intelligence, and patience, which are all
                qualities of a wise person. It is believed that a wise person
                has the capacity to choose the best means to attain a goal,
                implying broad knowledge, learning, experience, and the ability
                to apply such faculties to practical ends.
              </div>
              <div className="mb-6">
                The Nyansapo circle provides a platform for individuals to come
                together and discuss books written by African authors. The
                circle provides a great opportunity to learn about different
                cultures, as well as explore themes such as identity, tradition,
                history, and social justice. Members can suggest books for the
                group to read, and discussions can take place online or
                in-person. Nyansapo Circle members invite guest speakers, such
                as authors or literary experts, to provide insights into the
                chosen books. Overall, the Nyansapo Circle is a wonderful way to
                connect with others and expand one's knowledge of the world.
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="w-full flex justify-center">
            <div className=" w-1/2 text-center flex justify-center items-center">
              <img
                style={{ borderRadius: "5%" }}
                src="/nayansapo-healing-circle.jpg"
                className="w-1/2"
              />
            </div>
            <div className="w-1/2">
              <div
                style={{ color: EColors.textSecondary }}
                className="w-3/4 text-3xl"
              >
                Nyansapo healing circles offer a powerful space for collective
                wisdom and emotional healing. Rooted in the symbolism of the
                "Wisdom Knot," these circles encourage participants to tap into
                their inner intelligence, patience, and ingenuity. By sharing
                experiences and drawing on the collective knowledge of the
                group, individuals can gain clarity on personal challenges and
                discover new paths forward. Nyansapo healing circles foster a
                sense of community, support, and empowerment, helping
                participants to cultivate a deeper understanding of themselves
                and others while promoting mental, emotional, and spiritual
                growth.
              </div>
            </div>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <ProfileFooter />
      <Footer />
    </>
  );
}
