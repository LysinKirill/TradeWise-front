import { IUserRegistrationData } from "@/features/auth/types";

export type TFormFieldConfig = {
  name: keyof IUserRegistrationData;
  label: string;
  type: string;
  required: boolean;
  validation?: {
    pattern?: {
      value: RegExp;
      message: string;
    };
    custom?: (value: string, formData: IUserRegistrationData) => string | null;
  };
};