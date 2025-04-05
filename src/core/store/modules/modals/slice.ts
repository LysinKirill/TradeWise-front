import { createSlice } from '@reduxjs/toolkit';

import { IModalState } from '../../types';

const initialState: IModalState = {
  getStarted: {
    isOpen: false,
  },
  registration: {
    isOpen: false,
  },
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openGetStartedModal(state) {
      return {
        ...state,
        getStarted: {
          isOpen: true,  
        },
      };
    },
    closeGetStartedModal(state) {
      return {
        ...state,
        getStarted: {
          isOpen: false, 
        },
      };
    },
    openRegistrationModal(state) {
      return {
        ...state,
        registration: {
          isOpen: true,  
        },
      };
    },
    closeRegistrationModal(state) {
      return {
        ...state,
        registration: {
          isOpen: false, 
        },
      };
    },
  },
});

export const { 
  openGetStartedModal, 
  closeGetStartedModal,
  openRegistrationModal,
  closeRegistrationModal,
} = modalSlice.actions;

export default modalSlice.reducer;
