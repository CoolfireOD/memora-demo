export const loginValidation = {
  required: { value: true, message: "This field is required" },
  minLength: {
    value: 6,
    message: "Minimal login length is 6 characters",
  },
};

export const emailValidation = {
  required: { value: true, message: "This field is required" },
  pattern: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Invalid email address",
  },
};

export const nameValidation = {
  required: {
    value: true,
    message: "This field is required",
  },
};

export const surnameValidation = {
  required: {
    value: true,
    message: "This field is required",
  },
};
