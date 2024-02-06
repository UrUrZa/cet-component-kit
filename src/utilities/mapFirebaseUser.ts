import { UserInfo } from "firebase/auth";
import { FirebaseUserInfo } from "../types/utility";

export const mapFirebaseUser = ({uid, ...rest}: UserInfo): FirebaseUserInfo => {
  return {
    notificationsToken: '',
    ...rest,
    id: uid,
  }
}
