"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

export default function MotionProvider({ children }: PropsWithChildren) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
