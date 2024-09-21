import { EColors } from "../../Utils/Enums/colors";

export default function ProfileFooter() {
  return (
    <div
      style={{ fontFamily: "Inter" }}
      className="flex justify-center mt-32 text-xl "
    >
      <div className="w-1/2 text-center">
        <div className="flex justify-center mb-8 ">
          <img
            src="/denise-montgomery.jpg"
            style={{ border: "", borderRadius: "2%" }}
            className=" w-60 h-72 drop-shadow-xl"
          />
        </div>
        <div className="mb-8 text-3xl font-bold ">Book in to see Denise</div>
        <div style={{ fontFamily: "Inter", color: EColors.textSecondary }}>
          You're welcome to reach out at any time to discuss your goals and how
          I can support you. Our consultation is a great opportunity to ask
          questions, explore how we might work together, and see if we're a good
          fit. Many clients find this initial conversation incredibly helpful
          and reassuring.
        </div>
      </div>
    </div>
  );
}
