import { Divider } from "antd";
import { EColors } from "../../Utils/Enums/colors";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from "../UI/Footer";

export default function MobileContactPage() {
  const position: [number, number] = [38.948669791315055, -76.734660718471];
  return (
    <>
      <div className="2xl:hidden flex justify-center">
        <div className="w-3/4">
          <div
            style={{ fontFamily: "Lora" }}
            className="mt-20 font-bold text-2xl text-center"
          >
            Get In Touch With Denise
          </div>

          <Divider></Divider>
          <div
            style={{ fontFamily: "Inter", color: EColors.textSecondary }}
            className=""
          >
            <div className="mb-4">
              Book your free consultation today—either at my office in Maryland
              or online.
            </div>
            <div className="mb-4">
              You can also reach me by phone, email, or by filling out the form
              below to request a callback.
            </div>
            <div className="mb-4">
              If you'd like to learn more about my approach or discuss how I can
              support you, feel free to give me a call. I’d be happy to answer
              any questions you may have.
            </div>
            <div className="mb-4">
              If I’m unable to answer right away, please leave a voicemail, and
              I’ll return your call as soon as possible. Alternatively, you can
              complete the contact form below and let me know the best time to
              reach you
            </div>

            <Divider></Divider>
            <div className="mb-5 ">
              <div className="mb-5">
                <div
                  className=" font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Address
                </div>
                <div
                  className=" underline cursor-pointer"
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
                  className=" font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Email
                </div>
                <div
                  className=" underline cursor-pointer"
                  style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                >
                  Denise@esteemedfamilies.com
                </div>
              </div>
              <div>
                <div
                  className=" font-bold"
                  style={{ color: EColors.textSecondary }}
                >
                  Phone
                </div>
                <div
                  className=" "
                  style={{ fontFamily: "Inter", color: EColors.textSecondary }}
                >
                  202-423-0040
                </div>
              </div>
            </div>
            <div
              style={{ height: "10rem", borderRadius: "5%" }}
              className="relative  drop-shadow-lg "
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
      </div>
      <div className="2xl:hidden">
        <div
          style={{ fontFamily: "Inter" }}
          className=" flex  justify-center mt-16 text-xl "
        >
          <div className="w-3/4 text-center">
            <div className="flex justify-center mb-8 ">
              <img
                style={{ borderRadius: "5%" }}
                src="/denise-montgomery.jpg"
                className="h-44 my-4"
              />
            </div>
            <div className="mb-8 text-xl whitespace-nowrap font-bold ">
              Book in to see Denise
            </div>
            <div className="mb-10 " style={{ fontFamily: "Inter" }}>
              You're welcome to reach out at any time to discuss your goals and
              how I can support you. Our consultation is a great opportunity to
              ask questions, explore how we might work together, and see if
              we're a good fit. Many clients find this initial conversation
              incredibly helpful and reassuring.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
