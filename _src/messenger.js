import "whatwg-fetch";
import * as http from "./http";

const MESSENGER_SERVER = "http://messenger.davemiddleton.co";

const SMS_MESSAGE_ENDPOINT = `${MESSENGER_SERVER}/sms`;
const RECIPIENT_PHONE_NUMBER = "+19166004645";

export const send = (data, heading) => {
  return http.post(SMS_MESSAGE_ENDPOINT, {
    to: RECIPIENT_PHONE_NUMBER,
    message: toMessage(data, heading)
  })
}

const toMessage = (data, heading) => {
  let message = "";
  if (heading) {
    message += heading
    message += "\n\n";
  }
  message += `Name: ${data.name}\n`;
  message += `Email: ${data.email}\n`;
  message += "\n";
  message += `${data.message}`;
  return message
}

export default {
  send: send
}
