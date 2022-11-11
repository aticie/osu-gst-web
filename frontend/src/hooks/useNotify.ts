import mitt from "mitt";

type Events = {
  info: string
}

export const events = mitt<Events>();

export const notifify = (text: string) => {
  events.emit("info", text);
}
