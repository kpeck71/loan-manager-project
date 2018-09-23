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

export function updateBudget(newBudget) {
  return function(dispatch) {
    dispatch({type: 'LOADING_BUDGET'});
    return fetch(`/api/v1/budgets/3`, {
        method: 'PUT',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          budget: {
            income: newBudget.income
          }
        })
      }).then(response => response.json())
      .then(response => dispatch({ type: 'UPDATE_BUDGET', newBudget }));
    }
  }

export function createExpense(newExpense) {
  console.log('hi youre in createExpense', JSON.stringify(newExpense))
  return function(dispatch) {
    debugger
    return fetch('/api/v1/expenses', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          expense: {
            name: newExpense.name,
            amount: newExpense.amount,
            category: newExpense.category
          }
        })
      }).then(response => response.json())
        .then(newExpense => dispatch({ type: 'ADD_EXPENSE', newExpense }));
    }
  }

export function createGoal(newGoal) {
  return function(dispatch) {
    dispatch({type: 'LOADING_GOALS'});
    return fetch('/api/v1/goals', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          goal: {
            title: newGoal.title,
            total: newGoal.total,
            category: newGoal.category
          }
        })
      }).then(response => response.json())
      .then(newGoal => dispatch({ type: 'ADD_GOAL', newGoal }));
    }
  }

// FETCH

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

// UPDATE ITEMS

export function goalPaid(id, status) {
  return function(dispatch) {
    debugger
    dispatch({type: 'GOAL_PAID', id})
    return fetch(`/api/v1/goals/${id}`, {
        method: 'PUT',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({'paid': status})
      }).then(response => response.json())
    }
  }

//DELETE ITEMS

  export function deleteGoal(id) {
    return function(dispatch) {
      return fetch(`/api/v1/goals/${id})`, {
        method: 'DELETE',
      }).then((response) => { console.log('Goal was deleted!')
      }).then(response => dispatch({ type: 'DELETE_GOAL', id }))
    }
  }


  export function deleteExpense(id) {
    debugger
    return function(dispatch) {
      return fetch(`/api/v1/expenses/${id})`, {
        method: 'DELETE',
      }).then((response) => { console.log('Expense was deleted!')
    }).then(response => dispatch({ type: 'DELETE_EXPENSE', id }))
  }}
