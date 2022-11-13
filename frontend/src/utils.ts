export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const getFileInputElement = () => {
  let inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = ".png,.jpg,.jpeg,.gif";
  return inputElement;
}
