interface IUserContext {
  user?: IUser;
  updateUser?: (user?: IUser) => void;
}

interface IUserContextPayload {
  user: IUser;
}

interface IUserContextAction {
  type: string;
  payload: IPayload;
}
