'use client';

import { createContext, useReducer } from 'react';

enum Actions {
  UPDATE_USER = 'UPDATE_USER',
}

const reducer = (state: object, action: IUserContextAction) => {
  switch (action.type) {
    case Actions.UPDATE_USER:
      localStorage.setItem(
        `${import.meta.env.APP_NAME}-USER`,
        JSON.stringify(action.payload.user)
      );
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export const UserContext = createContext<IUserContext>({
  user: JSON.parse(
    localStorage.getItem(`${import.meta.env.APP_NAME}-USER`) as string
  ),
});

export const UserContextConsumer = UserContext.Consumer;

export const UserContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const updateUser = (user?: IUser) =>
    new Promise((resolve) =>
      resolve(
        dispatch({
          type: Actions.UPDATE_USER,
          payload: {
            user: user as IUser,
          },
        })
      )
    );
  return (
    <UserContext.Provider value={{ updateUser, ...state }}>
      {props.children}
    </UserContext.Provider>
  );
};
