export interface IAuthState {
  signUp: IThunkState;
  signIn: IThunkState;
  signOut: IThunkState;
}

export interface IProfileState {
  changePassword: IThunkState;
  changeNickname: IThunkState;
  getUserInfo: IThunkState;
}

export interface IThunkState {
  loading: boolean;
  error: string;
  success: boolean;
}

export interface IModalState {
  profile: {
    isOpen: boolean,
    sid: string,
  };
  incident: {
    isOpen: boolean,
  };
  addIncident: boolean;
  changeIncident: boolean;
  inProgress: boolean;
}

export interface INotificationState {
  id: string;
  text: string;
  type: ENotificationColorTypeEnum;
}

export interface INewNotification {
  text: string;
  type?: ENotificationColorTypeEnum;
}

export enum ENotificationColorTypeEnum {
  error = 'error',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
}
