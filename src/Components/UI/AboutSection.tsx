export default function AboutSection() {
  return (
    <section style={{ height: "50rem" }} className="flex w-full   ">
      <div className="flex w-1/2  justify-center items-center mr-10">
        {/* <img src="/Akwaaba-Adinkra.png" /> */}
        <img
          src="/serenepic.jpg "
          className="w-1/2 drop-shadow-lg"
          style={{ borderRadius: "5%" }}
        />
        {/* <div className="text-center">"Akwaaba"</div>
          <div className="text-center">(Welcome)</div> */}
      </div>
      <div className="flex items-center w-1/2  ">
        <div>
          <div className="text-4xl font-semibold">TAKE THE FIRST STEPS</div>
          <div
            style={{ fontFamily: "Lora" }}
            className="text-4xl font-semibold mb-5"
          >
            On Your Wellness Journey
          </div>
          <div className="w-3/4 mb-5">
            Esteemed Families, LLC, is an African Centered mental health agency
            designed to meet the therapeutic needs of children, adolescents,
            adults and families. African-centered therapy is a therapeutic
            approach that emphasizes the importance of African culture and
            heritage in the healing process. It is a culturally sensitive
            intervention that aims to help individuals improve their
            self-concept, cultural identity, emotional coping skills, and reduce
            depressive symptoms.
          </div>
          <div className="w-3/4 mb-5">
            Esteemed Families, LLC specializes in addressing mental health
            problems, trauma, sexual assault, childhood abuse and neglect,
            marital and relationship problems. If you are feeling lost and
            struggling with these worries, I am confident I have the experience
            to help you rediscover what brings happiness to your life. Through
            therapy, there is always a way to address the issues you face and
            learn coping strategies to help you now and in the future.
          </div>
          <div className="w-3/4 mb-5">
            Esteemed Families, LLC can assist you in leading a happier, more
            fulfilling life by equipping you with the tools you need to
            efficiently and confidently manage life’s challenges. In addition to
            being an African Centered agency, we also use other modalities such
            as Somatic Experiencing, Internal Family Systems, Cognitive
            Behavioral Therapy and other modalities to assist in the healing
            process. It is never too late to change and start living the life
            you’ve always wanted.
          </div>
        </div>
      </div>
    </section>
  );
}
