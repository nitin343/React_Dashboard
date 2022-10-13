export const GoalReducer = (state = {goal: '', percentage:''} , action) => {

    switch(action.type){
       case "ADD_GOAL":
           return{ goal: action.payload.goals, percentage: action.payload.percentage};
       default:
           return state;
    }
   };