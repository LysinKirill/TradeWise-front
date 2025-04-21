export interface IUserRegistrationData {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

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