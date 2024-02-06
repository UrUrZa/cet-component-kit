import { FacebookAuthProvider, GoogleAuthProvider, UserInfo } from "firebase/auth";
import { Action, Store } from "redux";
import { commonState } from "../store/commonReducer";
import { IHaveId, IHaveNotificationsToken } from "./domain";

export type commandName = string;

export interface ExtendedStore<State> extends Store<State> {
  asyncDispatch: (action: Action) => Promise<unknown>;
  getActionHistory: () => Action<any>[];
  getActionHistoryRepresentation: () => string;
}

export type GenericSelector<State, Result> = (state: State) => Result;
export type ArgumentSelector<Selector> = (...args: any[]) => Selector;
export type CommonSelector<Result> = GenericSelector<commonState, Result>;

export type FirebaseUserInfo = Omit<UserInfo, "uid"> & IHaveId & IHaveNotificationsToken;
export type AuthProvider = GoogleAuthProvider | FacebookAuthProvider;

