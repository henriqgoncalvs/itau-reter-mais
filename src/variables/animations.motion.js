export const TOP_VARIANT = {
  end: { opacity: 1, y: 0 },
  init: { opacity: 0, y: -50 },
};

export const BOTTOM_VARIANT = {
  end: { opacity: 1, y: 0 },
  init: { opacity: 0, y: 50 },
};

export const LEFT_VARIANT = {
  end: { opacity: 1, x: 0 },
  init: { opacity: 0, x: -300 },
};

export const RIGHT_VARIANT = {
  end: { opacity: 1, x: 0 },
  init: { opacity: 0, x: 300 },
};

export default {
  right: RIGHT_VARIANT,
  left: LEFT_VARIANT,
  bottom: BOTTOM_VARIANT,
  top: TOP_VARIANT,
};
