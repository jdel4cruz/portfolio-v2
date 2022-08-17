import React from "react";
import Button from "../Button";
import Socials from "../Socials";

function Contact() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className=" text-background 3xl:text-background_xl text-primary_tint leading-tight -z-10 pb-4">
        CONTACT
      </div>
      <div className="flex flex-col w-6/12 items-center justify-center text-center gap-16">
        <h2 className="text-primary">Don't Be A Stranger!</h2>
        <p className="text-black_75">
          {" "}
          Whether you're looking to talk about potential opportunities, have a
          question for me, or just want to say hi, please feel free to{" "}
          <strong>contact me!</strong>
        </p>
        <Button hasShadow={true}>Say Hi!</Button>
        <Socials />
      </div>
    </div>
  );
}

export default Contact;
