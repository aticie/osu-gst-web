import { rejects } from "assert";
import axios from "axios";
import { notify } from "./hooks/useNotify";
import { PlayerlessTeam } from "./Models/Team";

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const uploadAvatar = (): Promise<PlayerlessTeam> => {
  return new Promise(async (resolve, reject) => {
    let inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = ".png,.jpg,.jpeg,.gif";

    inputElement.addEventListener("change", async event => {
      let target = event.target as HTMLInputElement;
      if (!target.files) return;
      let file = target.files[0];

      if (file.size / 1000 > 10_000) {
        notify({
          title: "Banner Upload",
          message: "File size cannot exceed 10MB"
        });

        return reject();
      }

      const formData = new FormData();
      formData.append("file", target.files[0]);

      try {
        const response = await axios.post<PlayerlessTeam>(
          "/avatar/upload",
          formData
        );

        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });

    inputElement.click();
  })
}