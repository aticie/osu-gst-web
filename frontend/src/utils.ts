const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const createId = (length: number) => {
    var result           = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
