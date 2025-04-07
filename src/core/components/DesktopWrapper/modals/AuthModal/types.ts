export interface IUserAuthData {
  email: string;
  password: string;
}

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