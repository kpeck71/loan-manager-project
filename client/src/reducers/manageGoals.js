// add goal
// amount needed for all goals
//

import cuid from 'cuid';
// export const cuidFn = cuid;


export default function manageGoals(state = { goals: [] }, action) {
let goal;
  switch (action.type) {
    case 'ADD_GOAL':
      goal = {
        id: cuid(),
        title: action.title,
        total: action.total,
        category: action.category
      }
      return { ...state, goals: [...state.goals, goal] }

    case 'ADD_PAYMENT':
      goal = {
        total: action.total - action.payment
      }
      return { ...state, goals: [...state.goals, goal] }

      default:
        return state
    }
};
