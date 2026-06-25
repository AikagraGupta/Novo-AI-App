import type { Transition, Variants } from "framer-motion";

export const premiumEase = [0.16, 1, 0.3, 1] as const;

export const premiumTransition: Transition = {
  duration: 0.65,
  ease: premiumEase
};

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0.72,
    y: 10
  },
  show: {
    opacity: 1,
    y: 0,
    transition: premiumTransition
  }
};

export const softReveal: Variants = {
  hidden: {
    opacity: 0.82,
    scale: 0.992
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: premiumTransition
  }
};
