// src/features/auth/constants/formConfig.ts
import { TFormFieldConfig } from './types';

export const formFields: TFormFieldConfig[] = [
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
    name: 'fullName',
    label: 'Full name',
    type: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    validation: {
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        message: 'Password must contain at least 8 characters, one uppercase, one lowercase and one number',
      },
    },
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    required: true,
    validation: {
      custom: (value, formData) => 
        value !== formData.password ? 'Passwords do not match' : null
    },
  },
];