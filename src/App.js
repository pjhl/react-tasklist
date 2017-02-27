import React, {Component} from 'react';
import './App.css';
import './fonts/css/fontello.css';

import Header from './components/Header';
import CreateTaskForm from './components/CreateTaskForm';
import Tasks from './components/Tasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentWillMount() {
    // Load tasks from localStorage
    var tasks = localStorage['tasks'];

    // Set default items if the state wasn't saved never
    if (tasks === undefined) {
      return this.setState({
        tasks: [
          {
            id: 1,
            title: 'Learn ES6',
            isFinished: true
          },
          {
            id: 2,
            title: 'Learn react, redux. Practice more',
            isFinished: false
          }
        ]
      });
    }

    if (tasks && tasks.length > 0) {
      return this.setState({tasks: tasks});
    }

  }

  destroyHandler(id) {
    this.setState({
      // Remove task by id
      tasks: this.state.tasks.filter(function(task){
        return task.id !== id;
      })
    });
  }

  changeHandler(id, attributes) {
    // Update task by id and attributes object
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        // Update task
        for (var key in attributes) {
          if (attributes.hasOwnProperty(key)) {
            task[key] = attributes[key];
          }
        }

        return task;
      })
    });

  }

  onAddhandler(title) {
    var lastId = 0;
    this.state.tasks.map(function(task){
      lastId = lastId < task.id ? task.id : lastId;
      return task;
    });
    // Add new task
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: lastId+1,
          title: title,
          isFinished: false
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <CreateTaskForm onAdd={this.onAddhandler.bind(this)}/>
          <Tasks tasks={this.state.tasks}
                 onDestroy={this.destroyHandler.bind(this)}
                 onChangeTask={this.changeHandler.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
