export const addPayment = (payment) => {
  return {
    type: 'ADD_PAYMENT',
    payment
  };
};

export const addGoal = (goal) => {
  return {
    type: 'ADD_GOAL',
    goal
  };
};

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};
export const addBudget = (budget) => {
  return {
    type: 'ADD_BUDGET',
    budget
  };
};

export function createBudget(newBudget) {
  console.log('hi youre in createBudget', JSON.stringify(newBudget))
  return function(dispatch) {
    dispatch({type: 'ADD_BUDGET', newBudget})
    return fetch('/api/v1/budgets.json', {
        method: 'POST',
        body: JSON.stringify({newBudget})
      }).then(response => response.json())
    }
  }

export function createExpense(newExpense) {
  console.log('hi youre in createExpense', JSON.stringify(newExpense))
  return function(dispatch) {
    dispatch({type: 'ADD_EXPENSE', newExpense})
    return fetch('/api/v1/expenses.json', {
        method: 'POST',
        body: JSON.stringify({newExpense})
      }).then(response => response.json())
    }
  }

export const deleteGoal = goal => {
  return {
    type: 'DELETE_GOAL',
    goal
  }
}
export function createGoal(newGoal) {
  console.log('hi youre in createGoal', JSON.stringify(newGoal))
  return function(dispatch) {
    dispatch({type: 'ADD_GOAL', newGoal})
    return fetch('/api/v1/goals.json', {
        method: 'POST',
        body: JSON.stringify({newGoal})
      }).then(response => response.json())
    }
  }

export function fetchGoals() {
  return(dispatch) => {
    dispatch({type: 'LOADING_GOALS'});
    return fetch('/api/v1/goals.json')
      .then(response => response.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS', payload: goals }));
    };
}

export function fetchBudget() {
  return(dispatch) => {
    return fetch('/api/v1/budgets.json')
      .then(response => response.json())
      .then(budget => dispatch({ type: 'FETCH_BUDGET', payload: budget }));
    };
}

export function fetchExpenses() {
  return(dispatch) => {
    return fetch('/api/v1/expenses.json')
      .then(response => response.json())
      .then(expenses => dispatch({ type: 'FETCH_EXPENSES', payload: expenses }));
    };
}
