import { MessagePayload, getToken, onMessage } from "firebase/messaging";
import { messaging } from "../api/firebaseMessaging";


const vapidKey = "BJk6KiXNo2Sr852NiIjfb-pcQwWLONzLeAdTHgSUFyO3NMm47pVsudbb9coGAYOQ5LmMe5bSj378J7bw-XD7O0k";

export const requestPermission = async (): Promise< string | undefined > => {
  const token = await getToken(messaging, { vapidKey });
  return token;
}

export const onMessageListener = () =>{
  return new Promise<MessagePayload>((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});}
