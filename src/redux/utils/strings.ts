export const prepareString = (value: string) => {
  const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  const newValue = value.split('');
  newValue.forEach((letter, index) => {
    const i = accents.indexOf(letter);
    if (i !== -1) {
      newValue[index] = accentsOut[i];
    }
  });
  return newValue.join('');
};

export default {
  prepareString,
};