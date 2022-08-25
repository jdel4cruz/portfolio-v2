import React from "react";
import ContactButton from "../ContactButton";
import Socials from "../Socials";

const Contact = React.forwardRef(({ setIsContactOpen }, ref) => {
  return (
    <div
      className="w-screen max-w-full min-h-[75vw] lg:min-h-screen flex flex-col justify-center items-center pb-16 lg:pb-0"
      id="contact"
      ref={ref}
    >
      <div className="text-background_sm md:text-background_md lg:text-background 3xl:text-background_xl text-primary_tone leading-tight -z-10 pb-4">
        CONTACT
      </div>
      <div className="flex flex-col  w-3/4 lg:w-1/2 items-center justify-center text-center gap-8 sm:gap-16">
        <h2 className="text-primary_tint">Don't Be A Stranger!</h2>
        <p className="text-black_75">
          {" "}
          Whether you're looking to talk about potential opportunities, have a
          question for me, or just want to say hi, please feel free to{" "}
          <strong>contact me!</strong>
        </p>
        <ContactButton
          hasShadow={true}
          onPress={setIsContactOpen}
          onPressParams={true}
        >
          Say Hi!
        </ContactButton>
        <Socials />
      </div>
    </div>
  );
});

export default Contact;
