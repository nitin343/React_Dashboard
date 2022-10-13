export const AddGoal= (goals) => (dispatch,getState) => {
    console.log(goals,'goal' , getState,'state', dispatch,'dispatch');
  
    const {
        Goal: {goal},
      } = getState();

      let percentage = (20/goals)*100;

      dispatch({
        type: "ADD_GOAL",
        payload: {goals,percentage},
      })
}