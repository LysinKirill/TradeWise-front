import { createSlice } from '@reduxjs/toolkit';

import { IModalState } from '../../types';

const initialState: IModalState = {
  profile: {
    isOpen: false,
    sid: '',
  },
  incident: {
    isOpen: false,
  },
  addIncident: false,
  changeIncident: false,
  inProgress: false,
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openProfileModal(state, { payload }) {
      return {
        ...state,
        profile: {
          isOpen: true,
          sid: payload,
        },
      };
    },
    closeProfileModal(state) {
      return {
        ...state,
        profile: {
          isOpen: false,
          sid: '',
        },
      };
    },
    openAddIncidentModal(state) {
      return {
        ...state,
        addIncident: true,
      };
    },
    closeAddIncidentModal(state) {
      return {
        ...state,
        addIncident: false,
      };
    },
    openInProgressModal(state) {
      return {
        ...state,
        inProgress: true,
      };
    },
    closeInProgressModal(state) {
      return {
        ...state,
        inProgress: false,
      };
    },
    openChangeIncidentModal(state) {
      return {
        ...state,
        changeIncident: true,
      };
    },
    closeChangeIncidentModal(state) {
      return {
        ...state,
        changeIncident: false,
      };
    },
    openIncidentInfoModal(state) {
      return {
        ...state,
        incident: {
          isOpen: true,
        },
      };
    },
    closeIncidentInfoModal(state) {
      return {
        ...state,
        incident: {
          isOpen: false,
          id: '',
        },
      };
    },
  },
});

export const { 
  openProfileModal, 
  closeProfileModal,
  openAddIncidentModal, 
  closeAddIncidentModal, 
  openChangeIncidentModal, 
  closeChangeIncidentModal,
  openIncidentInfoModal,
  closeIncidentInfoModal,
  openInProgressModal,
  closeInProgressModal,
} = modalSlice.actions;

export default modalSlice.reducer;
