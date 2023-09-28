'use client'
import { createContext, useContext, useReducer } from 'react';

import {
  CHANGE_UNIT,
} from './actions';

const DEFAULT_STATE = {
  unit: 'metric',
};

const UserConfigContext = createContext(DEFAULT_STATE);

const userConfigReducer = (state, { type, payload }) => { 
  switch (type) {
    case CHANGE_UNIT:
      return { ...state, unit: payload };
    default:
      return state;
  }
};

const UserConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userConfigReducer, DEFAULT_STATE);
  const value = { state, dispatch };

  return (
    <UserConfigContext.Provider value={value}>
      {children}
    </UserConfigContext.Provider>
  );
};

const useUserConfigContext = () => {
  const context = useContext(UserConfigContext);

  return context;
};

export { UserConfigProvider, useUserConfigContext };
