import React, {Component, PropTypes} from 'react';
import Task from './Task';

class Tasks extends Component {

  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired
      })
    ),
    /**
     * Destroy task callback: Callback(id)
     */
    onDestroy: PropTypes.func.isRequired,
    /**
     * Change task callback: Callback(id, attributes)
     */
    onChangeTask: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="tasks">
        {this.props.tasks.map((task) => {
          return <Task
            key={task.id}
            id={task.id}
            title={task.title}
            isFinished={task.isFinished}
            isEdit={task.isEdit}
            onDestroy={this.props.onDestroy}
            onChangeTask={this.props.onChangeTask}/>
        })}
      </div>
    );
  }
}

export default Tasks;