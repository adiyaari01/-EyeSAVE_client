export const initialValues = {
  parent: {
    firstName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20,
      helperText: "Custom error message"
    },
    lastName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20
    },
    email: {
      value: "",
      error: "",
      required: true,
      validate: "email"
    },
    phone: {
      value: "",
      error: "",
      required: true,
      validate: "phone",
      maxLength: 15
    },
    address: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 10,
      maxLength: 40
    },
    id: {
      value: "",
      error: "",
      required: true,
      validate: "number",
      minLength: 9,
      maxLength: 9
    },
    photo: {
      value: null,
      error: "",
      required: true
    }
  },
  child: {
    firstName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20,
      helperText: "Custom error message"
    },
    lastName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20
    },
    gender: {
      value: "",
      error: "",
      required: true,
      validate: "select"
    },
    date: {
      value: "",
      required: true,
      error: ""
    },
    id: {
      value: "",
      error: "",
      required: true,
      validate: "number",
      minLength: 9,
      maxLength: 9
    },
    address: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 10,
      maxLength: 40
    },
    photo: {
      value: "",
      error: "",
      required: true
    }
  },
  escort: {
    firstName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20,
      helperText: "Custom error message"
    },
    lastName: {
      value: "",
      error: "",
      required: true,
      validate: "text",
      minLength: 2,
      maxLength: 20
    },
    agreenemt: {
      value: false,
      error: "",
      required: true,
      validate: "checkbox",
      helperText: "Please accept our terms and conditions"
    },
    phone: {
      value: "",
      error: "",
      required: true,
      validate: "phone",
      maxLength: 15
    },
    photo: {
      value: "",
      error: "",
      required: true
    }
  }
};
