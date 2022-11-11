import mitt from "mitt";

type Events = {
  info: string
}

export const events = mitt<Events>();

export const useNotify = (text: string) => {
  events.emit("info", text);
}
