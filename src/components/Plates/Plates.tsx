"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

type Props = {
  children: React.ReactNode[];
  width?: string;
  error?: string;
  open: boolean;
};

const variants = {
  initial: (direction: 1 | -1) => ({
    x: `${110 * direction}%`,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 1 | -1) => ({
    x: `${-110 * direction}%`,
    opacity: 0,
  }),
};

function Plates({ children, width, open, error }: Props) {
  const [ref, bounds] = useMeasure();
  const [direction, setDirection] = useState<1 | -1>(1);
  const [index, setIndex] = useState<number>(0);

  function handleIncStep() {
    if (index === children.length - 1) {
      setDirection(-1);
    } else {
      setDirection(1);
    }

    setIndex((c) => c + 1);
  }

  function handleDecStep() {
    if (index === 0) {
      setDirection(1);
    } else {
      setDirection(-1);
    }

    setIndex((c) => c - 1);
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="w-full p-2 sm:rounded-2xl rounded-xl overflow-hidden"
          style={{ width }}
          initial={{ boxShadow: "none", background: "transparent", y: 10 }}
          animate={{
            background: "rgb(249 250 251 / 0.8)",
            boxShadow: `rgba(${!!error ? "254 202 202, 1" : "0, 0, 0, 0.15"}) 0px 5px 15px 0px`,
            transition: {
              boxShadow: { duration: 1 },
            },
            y: 0,
          }}
          exit={{
            boxShadow: "none",
            opacity: 0,
            transition: { boxShadow: { duration: 0.15, opacity: 0.1 } },
            y: 10,
          }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              border: `1px solid rgb(${!!error ? "254 202 202, 1" : "229 229 229, 1"})`,
              height: bounds.height + 54,
              transition: {
                height: { duration: 0.1, type: "spring", bounce: 0 },
              },
            }}
            className="w-full bg-white rounded-lg flex flex-col overflow-hidden relative">
            <div ref={ref}>
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}>
                <motion.div
                  key={index}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    bounce: 0,
                  }}
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="p-2">
                  {children[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              layout
              className="px-2 py-2 flex justify-between">
              <button
                onClick={handleDecStep}
                disabled={index === 0}
                className={`border border-indigo-100 text-indigo-800 transition-colors px-6 py-1 rounded-md outline-transparent hover:bg-indigo-50 font-medium outline-offset-[3px] focus-within:outline-2 focus-within:outline-indigo-300 hover:border-indigo-300 disabled:opacity-50 ${index === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                back
              </button>

              <button
                onClick={handleIncStep}
                disabled={index === children.length - 1}
                className={`bg-indigo-500 text-white transition-colors px-6 py-1 rounded-md outline-transparent hover:bg-indigo-700 font-semibold outline-offset-[3px] focus-within:outline-2 
                    disabled:opacity-50 focus-within:outline-indigo-300 ${index === children.length - 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                continue
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Plates;
