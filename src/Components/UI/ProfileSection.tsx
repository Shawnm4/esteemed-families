import { EColors } from "../../Utils/Enums/colors";
import ReusableButton from "../Ant/ReusableButton";
import "./ProfileSection.css";

export default function ProfileSection() {
  return (
    <div className="relative-container">
      <section className="background-section2">
        <div className="flex justify-center h-full items-center content">
          <div className="flex justify-center text-black ">
            <div>
              <div className="font-bold text-3xl mb-3 drop-shadow-lg">
                DENISE MONTGOMERY
              </div>
              <div
                style={{ fontFamily: "Lora", fontWeight: 200 }}
                className="text-4xl drop-shadow-lg"
              >
                LICSW, LMFT, LCSW-C, RPT-S, CDWF, CCTP-ll, CDBT, ADHD-CCSP,
                CATP, CCATP, AAMFT Clinical Fellow
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center ">
        <img
          src="/denise-montgomery.jpg"
          style={{ border: "6px solid white", borderRadius: "2%" }}
          className="overlay-image w-60 h-80 drop-shadow-xl"
        />
      </div>
      <section className="flex justify-center">
        <div className="mt-72 flex justify-center w-1/2">
          <div className="text-center">
            <div>
              <div className="mb-6">
                <b>Denise Montgomery</b> is an African Centered Licensed
                Clinical Social Worker from Queens, New York. Ms. Montgomery
                attended Virginia State University and Virginia Commonwealth
                University. She holds a bachelor's degree in social work and
                master's degree in social work from each university,
                respectively. Ms. Montgomery is a Licensed Marriage and Family
                Therapist and a nationally recognized Registered Play Therapist
                – Supervisor. Ms. Montgomery has provided clinical services to
                residents of the District of Columbia and Prince George's
                County, Maryland for over 20 years. She has worked effectively
                with agencies that services children, adults, and families. Ms.
                Montgomery's specialties include working with children who have
                been exposed to abuse, neglect, or are managing mental health
                issues. She also works with adults and families who are managing
                exposure to trauma, sexual assaults, and mental health concerns.
                Ms. Montgomery has specialized training in a variety of
                evidenced based social work modalities to assist individual and
                families in achieving healthy lifestyle changes. Ms. Montgomery
                utilizes her experiences in working in urban communities for
                over 20 years to make therapy relatable, and practical for each
                client.
              </div>
              <div className="text-center mb-6">
                Ms. Montgomery has collaborated with multidisciplinary teams
                such as Children's National Hospital, the DC Metropolitan Police
                Department, and various government agencies. Ms. Montgomery has
                served on the front lines to assist in advocating for change for
                marginalized communities. She has served as a Field Instructor
                for various institutions of higher learning such as the
                University of Maryland, Montgomery College, Walden University,
                and Howard University.
              </div>
              <div>
                <ReusableButton style={{ backgroundColor: EColors.bgprimary }}>
                  More About Denise
                </ReusableButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
