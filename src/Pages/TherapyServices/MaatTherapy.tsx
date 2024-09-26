import { Divider } from "antd";
import { EColors } from "../../Utils/Enums/colors";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import Footer from "../../Components/UI/Footer";
import { useEffect } from "react";

export default function MaatTherapyPage() {
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
            Ma'at Healing Circles
          </h1>
          <div
            style={{ color: EColors.textSecondary }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Ma'at healing circles promote balance and emotional healing in a
            supportive, community-driven space.
          </div>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                These circles provide a safe and supportive environment where
                individuals can share their thoughts and feelings freely without
                fear of judgement. Participants can expect to engage in active
                listening, empathy, and honest communication during these
                sessions. The goal of Ma’at Learning Circles is to promote
                healing, understanding, and personal growth through open and
                respectful dialogue. Whether you are seeking to process personal
                challenges, learn from others, or simply connect with
                like-minded individuals, Ma’at Learning Circles offer a space
                where everyone is welcome and valued. Joining a Ma’at Learning
                Circle can be a transformative experience that empowers
                individuals to develop deeper connections with others and with
                themselves.
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="w-full flex justify-center">
            <div className=" w-1/2 text-center flex justify-center items-center">
              <img
                style={{ borderRadius: "5%" }}
                src="/maat-circle.jpg"
                className="w-1/2"
              />
            </div>
            <div className="w-1/2">
              <div
                style={{ color: EColors.textSecondary }}
                className="w-3/4 text-3xl"
              >
                Ma'at healing circles are sacred gatherings that focus on
                restoring balance, truth, and harmony within individuals and
                communities, inspired by the ancient Egyptian goddess Ma'at.
                These circles create a safe space for participants to share
                experiences, release emotional burdens, and heal from past
                traumas, often addressing inherited or ancestral wounds. Through
                mindfulness practices, movement, meditation, and open dialogue,
                participants are guided to reconnect with their inner sense of
                balance, just as Ma'at represents cosmic order. These circles
                promote collective healing and encourage deeper connections to
                self and community, fostering emotional and spiritual growth.
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
