import { TFormFieldConfig } from "./types";

export const authFormFields: TFormFieldConfig[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
  },
];