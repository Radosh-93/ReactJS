import Tasks from "./Tasks";
const {connect} = require("react-redux");

let mapStateToProps = (state) => ({
	tasksData: state.tasksPage.tasksToSolve,
	source: state.tasksPage.sourcePage
})
let mapDispatchToProps = (dispatch) => ({

})

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer