import { useEffect } from "react";

import "./ContactPage.css";
import { Divider } from "antd";
import { EColors } from "../Utils/Enums/colors";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// import Footer from "../Components/UI/Footer";
import MobileContactPage from "../Components/Mobile/MobileContactPage";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const position: [number, number] = [38.948669791315055, -76.734660718471];
  return (
    <>
      <div className="hidden 2xl:inline-block">
        <section className="background-section4 mb-28  "></section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Inter",
          }}
          className=""
        >
          <h1
            style={{ fontFamily: "Lora" }}
            className="text-5xl font-semibold mb-8 text-center"
          >
            Get In Touch With Denise
          </h1>

          <Divider></Divider>
          <div
            style={{ color: EColors.textSecondary }}
            className="w-full flex justify-center mb-24 text-xl"
          >
            <div className="w-1/2">
              <div className="mb-6">
                Book your free consultation today—either at my office in
                Maryland or online.
              </div>
              <div className="mb-6">
                You can also reach me by phone, email, or by filling out the
                form below to request a callback.
              </div>
              <div className="mb-6">
                If you'd like to learn more about my approach or discuss how I
                can support you, feel free to give me a call. I’d be happy to
                answer any questions you may have.
              </div>
              <div className="mb-6">
                If I’m unable to answer right away, please leave a voicemail,
                and I’ll return your call as soon as possible. Alternatively,
                you can complete the contact form below and let me know the best
                time to reach you.
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="flex justify-evenly ">
            <div className="w-1/4">
              <div className="mb-5">
                <div
                  className="text-3xl font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Address
                </div>
                <div
                  className="text-xl underline cursor-pointer"
                  style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                >
                  <a
                    href="https://maps.app.goo.gl/83W3QpujBsq9i2do9"
                    target="_blank"
                  >
                    4329 Northview Drive Bowie, Maryland 20716
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <div
                  className="text-3xl font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Email
                </div>
                <div
                  className="text-xl underline cursor-pointer"
                  style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                >
                  Denise@esteemedfamilies.com
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Phone
                </div>
                <div
                  className="text-xl "
                  style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                >
                  202-423-0040
                </div>
              </div>
            </div>
            <div
              style={{ height: "30rem", borderRadius: "5%" }}
              className="relative w-1/2 drop-shadow-lg "
            >
              <MapContainer
                style={{ height: "100%", width: "100%" }}
                center={position}
                zoom={20}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
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
            <div className="mb-8 text-3xl font-bold ">
              Book in to see Denise
            </div>
            <div
              className="mb-10"
              style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            >
              You're welcome to reach out at any time to discuss your goals and
              how I can support you. Our consultation is a great opportunity to
              ask questions, explore how we might work together, and see if
              we're a good fit. Many clients find this initial conversation
              incredibly helpful and reassuring.
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <MobileContactPage />
    </>
  );
}
