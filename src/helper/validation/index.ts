export const PASSWORD_INPUT_VALIDATION = {
  required: "Password is required",
  minLength: {
    value: 5,
    message: "At least six characters, combination of letters and numbers",
  },
};

export const PHONE_NUMBER_INPUT_VALIDATION = {
  required: "Phone number is required",
  minLength: {
    value: 11,
    message: "Must be eleven digits",
  },
  maxLength: {
    value: 11,
    message: "Must be eleven digits",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Phone number can only contain numbers",
  },
};

export const ACCOUNT_NUMBER_INPUT_VALIDATION = {
  required: "Account number is required",
  minLength: {
    value: 10,
    message: "Must be ten digits",
  },
  maxLength: {
    value: 10,
    message: "Must be ten digits",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Account number can only contain numbers",
  },
};

export const FULL_NAME_INPUT_VALIDATION = {
  required: "Full name is required",
  minLength: {
    value: 6,
    message: "At least six characters",
  },
};

export const FIRST_NAME_INPUT_VALIDATION = {
  required: "First name is required",
  minLength: {
    value: 3,
    message: "At least three characters",
  },
};

export const LAST_NAME_INPUT_VALIDATION = {
  required: "Last name is required",
  minLength: {
    value: 3,
    message: "At least three letters",
  },
};

export const MIDDLE_NAME_INPUT_VALIDATION = {
  required: "Middle name is required",
  minLength: {
    value: 3,
    message: "At least three letters",
  },
};

export const NAME_INPUT_VALIDATION = {
  required: "Name is required",
  minLength: {
    value: 3,
    message: "At least three letters",
  },
};

export const ID_INPUT_VALIDATION = {
  required: "ID is required",
  minLength: {
    value: 3,
    message: "At least three letters",
  },
};

export const NULLABLE_NAME_INPUT_VALIDATION = {
  minLength: {
    value: 3,
    message: "At least three characters",
  },
};

export const PIN_INPUT_VALIDATION = {
  required: "PIN is required",
  maxLength: {
    value: 4,
    message: "Must be four digits",
  },
  minLength: {
    value: 4,
    message: "Must be four digits",
  },
  pattern: {
    value: /^[0-9]/,
    message: "PIN number can only contain numbers",
  },
};

export const CUSTOMER_ID_VALIDATION = {
  required: "customer id is required",
  minLength: {
    value: 5,
    message: "At least five numbers",
  },
  pattern: {
    value: /^[0-9]/,
    message: "customer id can only contain numbers",
  },
};

export const BVN_INPUT_VALIDATION = {
  required: "Provide a valid BVN",
  minLength: {
    value: 11,
    message: "Must be eleven digits",
  },
  maxLength: {
    value: 11,
    message: "Must be eleven digits",
  },
  pattern: {
    value: /^[0-9]/,
    message: "BVN can only contain numbers",
  },
};

export const NIN_INPUT_VALIDATION = {
  required: "provide a valid NIN",
  minLength: {
    value: 11,
    message: "Must be eleven digits",
  },
  pattern: {
    value: /^[0-9]/,
    message: "NIN can only contain numbers",
  },
};

export const AMOUNT_INPUT_VALIDATION = {
  required: "Please enter an amount",
  min: {
    value: 1,
    message: "Please enter an amount",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const AIRTIME_AMOUNT_INPUT_VALIDATION = {
  required: "Please enter an amount",
  min: {
    value: 10,
    message: "Amount should be ₦10 and above",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const DUMMY_BALANCE_AMOUNT_INPUT_VALIDATION = {
  required: "Please enter an amount",
  min: {
    value: 0,
    message: "Please enter an amount between 0 - 1000",
  },
  max: {
    value: 1000,
    message: "Please enter an amount between 0 - 1000",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const LOAN_REQUEST_AMOUNT_INPUT_VALIDATION = {
  required: "Field is required",
  min: {
    value: 5000,
    message: "Amount should be ₦5000 and above",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const LOAN_REQUEST_REASON_INPUT_VALIDATION = {
  required: "Field is required",
};

export const DURATION_INPUT_VALIDATION = {
  required: "Field is required",
  min: {
    value: 1,
    message: "Amount should be ₦100 and above",
  },
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const WORD_INPUT_VALIDATION = {
  required: "Field is required",
};

export const NARRATION_INPUT_VALIDATION = {};

export const WORD_INPUT_VALIDATION_NOT_IMPORTANT = {};

export const EMAIL_INPUT_VALIDATION = {
  required: "Email is required",

  pattern: {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: "This is not a valid email",
  },
};

export const ADDRESS_INPUT_VALIDATION = {
  required: "Field is required",
  minLength: {
    value: 3,
    message: "At least three characters",
  },
};

export const COUNTRY_INPUT_VALIDATION = {
  required: "Field is required",
};

export const RESIDENCE_STATUS_INPUT_VALIDATION = {
  required: "Field is required",
};

export const POSTALCODE_INPUT_VALIDATION = {
  required: "Field is required",
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const DATE_INPUT_VALIDATION = {
  required: "Field is required",
  pattern: {
    value:
      /(((0[1-9])|([12][0-9])|(3[01]))-((0[0-9])|(1[012]))-((20[012]\d|19\d\d)|(1\d|2[0123])))/,
    message: "Must be a date",
  },
};

export const MOBILE_NETWORK_SELECT_INPUT_VALIDATION = {
  required: "Field is required",
};

export const NUMBER_INPUT_VALIDATION = {
  required: "Field is required",
  pattern: {
    value: /^[0-9]/,
    message: "Can only contain numbers",
  },
};

export const getRandomProfileImage = () => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200?random=${randomImageId}`;
};
