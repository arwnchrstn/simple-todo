//for the parent container
export const variantHeight = {
  hidden: {
    height: "0",
  },
  visible: {
    height: "100%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  removed: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//sliding animation
export const variantSlide = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  removed: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.3,
    },
  },
};

//fading animation
export const variantFade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  removed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
