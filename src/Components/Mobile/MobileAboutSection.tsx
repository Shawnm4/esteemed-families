import { RightOutlined } from "@ant-design/icons";
import { EColors } from "../../Utils/Enums/colors";
import ReusableButton from "../Ant/ReusableButton";
import ProfileFooter from "../UI/ProfileFooter";

export default function MobileAboutSection() {
  return (
    <div className="2xl:hidden  mt-10">
      <div className="flex justify-center">
        <img
          style={{ borderRadius: "5%" }}
          src="/serenepic.jpg"
          className="w-3/4 drop-shadow-lg md:w-2/5"
        />
      </div>
      <div className="flex justify-center mt-16">
        <div>
          <div className="text-2xl font-semibold text-center">
            TAKE THE FIRST STEPS
          </div>
          <div style={{ fontFamily: "Lora" }} className="text-2xl text-center">
            On Your Wellness Journey
          </div>
          <div className="p-4 mb-2 text-center">
            Esteemed Families, LLC, is an African Centered mental health agency
            designed to meet the therapeutic needs of children, adolescents,
            adults and families. African-centered therapy is a therapeutic
            approach that emphasizes the importance of African culture and
            heritage in the healing process. It is a culturally sensitive
            intervention that aims to help individuals improve their
            self-concept, cultural identity, emotional coping skills, and reduce
            depressive symptoms.
          </div>
          <div className="p-4 mb-2 text-center">
            Esteemed Families, LLC specializes in addressing mental health
            problems, trauma, sexual assault, childhood abuse and neglect,
            marital and relationship problems. If you are feeling lost and
            struggling with these worries, I am confident I have the experience
            to help you rediscover what brings happiness to your life. Through
            therapy, there is always a way to address the issues you face and
            learn coping strategies to help you now and in the future.
          </div>
          <div className="p-4 mb-2 text-center">
            Esteemed Families, LLC can assist you in leading a happier, more
            fulfilling life by equipping you with the tools you need to
            efficiently and confidently manage life’s challenges. In addition to
            being an African Centered agency, we also use other modalities such
            as Somatic Experiencing, Internal Family Systems, Cognitive
            Behavioral Therapy and other modalities to assist in the healing
            process. It is never too late to change and start living the life
            you’ve always wanted.
          </div>
          <div style={{ backgroundColor: EColors.bgprimary }}>
            <div className="flex justify-center">
              <img
                style={{ borderRadius: "5%" }}
                src="/denise-montgomery.jpg"
                className="h-44 my-4"
              />
            </div>
            <div className="text-2xl font-semibold  px-8 mb-6">
              Denise Montgomery
            </div>
            <div className="px-8 mb-6">
              As a Licensed Clinical Social Worker and Therapist with over 20
              years of experience, I’m dedicated to providing you with the
              highest level of care and support.
            </div>
            <div className="px-8 mb-4 ">
              I’m deeply committed to helping you achieve success in every step
              of your journey.
            </div>
            <div className="flex justify-center">
              <ReusableButton className="flex gap-2 mb-4">
                <div className="underline">About me</div>
                <RightOutlined />
              </ReusableButton>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 grid-rows-6 gap-4 ">
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">INDIVIDUAL</div>
                    <div style={{ fontFamily: "Lora" }}>Therapy</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  Individual therapy is a confidential, supportive process where
                  a trained therapist helps individuals manage issues like
                  anxiety, stress, or addiction by exploring thoughts, emotions,
                  and behaviors.
                </div>
              </div>
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">Child and Adolescent</div>
                    <div style={{ fontFamily: "Lora" }}>Therapy</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  Child and adolescent African-centered therapy incorporates
                  African cultural values, spirituality,and communal
                  relationships to empower individuals, address empower
                  individuals and oppression, and promote healing through a
                  holistic,culturally sensitive approach.
                </div>
              </div>
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">Couples & Relational</div>
                    <div style={{ fontFamily: "Lora" }}>Therapy</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  African-centered couples therapy focuses on addressing
                  communication, power dynamics, and cultural identity in
                  African diaspora families, while Ms. Montgomery, trained in
                  Emotionally Focused Therapy (EFT), uses an evidence-based
                  approach to help couples in relationship distress.
                </div>
              </div>
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">NYANSAPO LEARNING</div>
                    <div style={{ fontFamily: "Lora" }}>Circles</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  The Nyansapo Learning Circle fosters trust through collective
                  learining and shared wisdom . In a safe, inclusive space,
                  participants support each other, exchanging knowledge and
                  experiences. Rooted in African values, it empowers individuals
                  to feel heard, valued, and connected, creating a strong,
                  trust-based community.
                </div>
              </div>
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">MA'AT HEALING</div>
                    <div style={{ fontFamily: "Lora" }}>Circles</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  The Ma'at Learning Circle fosters trust through truth,
                  balance, and harmony. In a safe and supportive space,
                  participants share experiences and grow together, rooted in
                  ancient wisdom. This circle helps individuals feel valued and
                  connected as they pursue knowledge and personal growth.
                </div>
              </div>
              <div className="drop-shadow-xl border-2 rounded w-3/4 justify-self-center align-self-center">
                <div className="flex items-center ml-4 mt-4  gap-2">
                  <img
                    style={{ borderRadius: "5%" }}
                    src="/1on1-therapy.jpg"
                    className="w-1/6"
                  />
                  <div className="w-1/2 leading-tight  ">
                    <div className="font-bold">CONSULTATION & SUPERVISION</div>
                    <div style={{ fontFamily: "Lora" }}>Circles</div>
                  </div>
                </div>
                <div className="text-sm p-4">
                  African-centered consultation and supervision empowers
                  individuals of African descent by integrating cultural
                  experiences and traditional healing practices. It fosters
                  trust through professional support, ensuring ethical growth
                  and skill development for mental health professionals.
                </div>
              </div>
            </div>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </div>
  );
}
