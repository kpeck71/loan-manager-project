export const addPayment = (payment) => {
  return {
    type: 'ADD_PAYMENT',
    payment
  };
};

export const fetchGoals = (fetchGoals) => {
  return {
    type: 'FETCH_GOALS',
    fetchGoals
  }
}
