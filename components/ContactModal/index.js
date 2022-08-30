import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Spinner from "../Spinner";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
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
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const emailResponseVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.25 } },
};

const defaultFormValues = { name: "", email: "", message: "" };

function ContactModal({ isOpen, setIsOpen }) {
  const [emailResponse, setEmailResponse] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (!sendingMessage) {
      setTimeout(() => {
        reset(defaultFormValues);
        setEmailResponse(null);
        setIsOpen(false);
      }, 1000);
    }
  }, [sendingMessage]);

  const onSubmit = async (data) => {
    setSendingMessage(true);
    const url = process.env.NEXT_PUBLIC_API_URL;

    const apiResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { response } = await apiResponse.json();
    setSendingMessage(false);
    setEmailResponse(response);
  };

  const handleClose = () => setIsOpen(false);

  console.log(errors);

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

          <div className="flex flex-col items-center w-full h-full sm:h-fit sm:w-[600px] overflow-scroll sm:overflow-visible">
            <motion.div
              variants={textModal}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-4 bg-white p-12 pb-8 sm:rounded-tl-3xl sm:rounded-tr-3xl w-full"
            >
              <CloseIcon
                handleClose={handleClose}
                color="bg-primary"
                size="w-10 h-10 sm:w-12 sm:h-12"
                delay={0.4}
              />
              <motion.h2 className="text-h2_md text-primary sm:mb-4">
                Hey There!
              </motion.h2>
              <motion.p className="sm:text-xl text-black_75">
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
              className="flex flex-col gap-4 text-white bg-primary p-12 pt-8 sm:rounded-bl-3xl sm:rounded-br-3xl w-full"
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="name"
                    className="text-p_md leading-relaxed w-fit"
                  >
                    Name:
                  </label>
                  <AnimatePresence>
                    {errors.name && (
                      <div className="overflow-hidden h-fit">
                        <motion.p
                          className="text-p_sm sm:text-p_md"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "100%" }}
                        >
                          {errors.name.message}
                        </motion.p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                <input
                  {...register("name")}
                  type="text"
                  className="text-black_75 p-4"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="text-p_md leading-relaxed w-fit"
                  >
                    Email:
                  </label>
                  <AnimatePresence>
                    {errors.email && (
                      <div className="overflow-hidden h-fit">
                        <motion.p
                          className="text-p_sm sm:text-p_md"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "100%" }}
                        >
                          {errors.email.message}
                        </motion.p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  {...register("email")}
                  type="text"
                  className="text-black_75 p-4"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col pb-4">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="message"
                    className="text-p_md leading-relaxed w-fit"
                  >
                    Message:
                  </label>
                  <AnimatePresence>
                    {errors.message && (
                      <div className="overflow-hidden h-fit">
                        <motion.p
                          className="text-p_sm sm:text-p_md"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "100%" }}
                        >
                          {errors.message.message}
                        </motion.p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
                <textarea
                  {...register("message")}
                  id="message"
                  className="resize-none p-4 text-black_75 h-[200px]"
                  placeholder="Message"
                />
              </div>
              <div className="flex items-center gap-8">
                <button
                  className="bg-secondary rounded-lg px-12 py-4 flex justify-center items-center"
                  type="submit"
                  value="Submit!"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-10 h-10 md:w-12 md:h-12"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button>
                <Spinner isSending={sendingMessage} />
                <div>
                  {emailResponse && (
                    <motion.h2
                      className="text-h2_sm"
                      variants={emailResponseVariant}
                      initial="initial"
                      animate="animate"
                    >
                      {emailResponse}
                    </motion.h2>
                  )}
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
