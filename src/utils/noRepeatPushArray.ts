const noRepeatPushArray = (array: string[], value: string) => {
  if (!array.includes(value)) {
    array.push(value);
  }
};

export default noRepeatPushArray;
