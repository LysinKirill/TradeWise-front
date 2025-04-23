import { IUserAuthData } from "@/features/auth/types";

export type TFormFieldConfig = {
  name: keyof IUserAuthData;
  label: string;
  type: string;
  required: boolean;
  validation?: {
    pattern?: {
      value: RegExp;
      message: string;
    };
    custom?: (value: string, formData: IUserAuthData) => string | null;
  };
};