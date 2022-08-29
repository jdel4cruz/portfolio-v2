import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string(),
  })
  .required();

// Components
import CloseIcon from "../CloseIcon";

const textModal = {
  initial: { x: "300%" },
  animate: { x: "0" },
  exit: {
    x: "-300%",
    transition: { type: "tween", duration: 0.25 },
  },
};

const formModal = {
  initial: { x: "-300%" },
  animate: { x: "0" },
  exit: {
    x: "300%",
    transition: { type: "tween", duration: 0.25 },
  },
};

const overlayVariant = {
  initial: { opacity: 0 },
  animate: { opacity: "75%" },
  exit: { opacity: 0 },
};

function ContactModal({ isOpen, setIsOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    // const response = await fetch(())
  };

  const handleClose = () => setIsOpen(false);

  const test = process.env.BURNER_EMAIL;
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed flex items-center justify-center w-screen max-w-full h-screen z-50 overflow">
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-black -z-10"
            variants={overlayVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={handleClose}
          />

          <div className="flex flex-col items-center w-[600px]">
            <motion.div
              variants={textModal}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white p-12 pb-8 rounded-tl-3xl rounded-tr-3xl w-full"
            >
              <CloseIcon
                handleClose={handleClose}
                color="bg-primary"
                size="w-12 h-12"
                delay={0.4}
              />
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
              onSubmit={handleSubmit(onSubmit)}
              variants={formModal}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-4 text-white bg-primary p-12 pt-8 rounded-bl-3xl rounded-br-3xl w-[600px]"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-h2_sm w-fit">
                  Name:
                </label>
                <input
                  {...register("name")}
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
                  {...register("email")}
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
                  {...register("message")}
                  id="message"
                  className="resize-none p-4 text-black_75 h-[200px]"
                  placeholder="Message"
                />
              </div>
              <input
                className="bg-secondary rounded-lg px-8 py-4 text-p text-white w-1/3"
                type="submit"
                value="Submit!"
              />
            </motion.form>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
