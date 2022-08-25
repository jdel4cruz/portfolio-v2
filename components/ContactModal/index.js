import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../ContactButton";

function ContactModal({ isOpen, setIsOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed flex items-center justify-center w-screen max-w-full h-screen z-50 overflow">
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-black -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: "75%" }}
            exit={{ opacity: 0 }}
          />

          <div
            className="flex flex-col items-center w-screen"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{
                x: "300%",
                transition: { type: "tween", duration: 0.25 },
              }}
              className="bg-white p-12 pb-8 rounded-tl-3xl rounded-tr-3xl w-[600px]"
            >
              <motion.h2 className="text-h2_md text-primary mb-4">
                Hey There!
              </motion.h2>
              <motion.p className="text-p_md text-black_75">
                If you'd like to talk about freelance work, ask a question, or
                just want to say hi, please fill out the form below and I'll get
                back to you ASAP.
              </motion.p>
            </motion.div>
            <motion.form
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              exit={{
                x: "-300%",
                transition: { type: "tween", duration: 0.25 },
              }}
              className="flex flex-col gap-4 text-white bg-primary p-12 pt-8 rounded-bl-3xl rounded-br-3xl w-[600px]"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-h2_sm w-fit">
                  Name:
                </label>
                <input
                  type="text"
                  className="text-black_75 p-4"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-h2_sm w-fit">
                  Email:
                </label>
                <input
                  type="text"
                  className="text-black_75 p-4"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col pb-4">
                <label htmlFor="message" className="text-h2_sm w-fit">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="resize-none p-4 text-black_75 h-[200px]"
                  placeholder="Message"
                />
              </div>
              <button
                className="bg-secondary rounded-lg px-8 py-4 text-p text-white w-1/3"
                onClick={() => handleSubmit()}
              >
                Submit!
              </button>
            </motion.form>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
