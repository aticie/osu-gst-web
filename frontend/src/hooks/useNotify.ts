import mitt from "mitt";

type Events = {
  info: Notification 
}

export interface Notification {
  id: number,
  title: string,
  message: string
}

export const events = mitt<Events>();

export const notify = (info: { title: string, message: string }) => {
  events.emit("info", {
    id: Math.random() * 100,
    ...info
  })
}
