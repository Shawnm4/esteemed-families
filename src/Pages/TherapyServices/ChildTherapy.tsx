import { useEffect } from "react";
import Footer from "../../Components/UI/Footer";
import ProfileFooter from "../../Components/UI/ProfileFooter";
import { EColors } from "../../Utils/Enums/colors";
import { Divider } from "antd";

export default function ChildTherapy() {
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
            Child and Adolescent Therapy
          </h1>
          <div
            style={{ color: EColors.textSecondary }}
            className="text-3xl font-bold mb-10 text-center "
          >
            Child therapy helps children develop emotional resilience and coping
            skills in a supportive environment.
          </div>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                Child therapy provides a safe and nurturing environment where
                children can express their feelings, work through challenges,
                and develop healthy coping strategies. Through play, talk, and
                creative activities, I help children process emotions, build
                confidence, and improve communication skills. Whether dealing
                with anxiety, behavior issues, or life changes, child therapy
                empowers children to better understand and manage their
                emotions, fostering emotional resilience and well-being.
              </div>

              <div className="">
                Child therapy helps uncover the underlying issues affecting your
                child's well-being. Together, we take a gentle and collaborative
                approach to help your child understand and manage their
                emotions, so the things that once caused distress no longer have
                the same impact.
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="w-full flex justify-center">
            <div className=" w-1/2 text-center flex justify-center items-center">
              <img
                style={{ borderRadius: "5%" }}
                src="/therapy-with-child.jpg"
                className="w-1/2"
              />
            </div>
            <div className="w-1/2">
              <div
                style={{ color: EColors.textSecondary }}
                className="w-3/4 text-3xl"
              >
                Your childhood plays a powerful role in shaping the person you
                become. Early experiences, whether positive or challenging,
                influence how you see the world, form relationships, and handle
                life’s ups and downs. In therapy, we gently explore how these
                experiences have shaped you, helping to heal old wounds and
                build healthier patterns for the future. By understanding the
                impact of your past, we can work together to create a more
                balanced and fulfilling life moving forward. You don’t have to
                navigate it alone—healing and growth are always possible.
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
