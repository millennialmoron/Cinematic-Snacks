export const UPDATE_CHOICES = "UPDATE_CHOICES";

export const updateChoices = (choices) => {
  return {
    type: UPDATE_CHOICES,
    payload: choices,
  };
};
