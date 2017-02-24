import React, {Component} from 'react';
import logo from './img/logo.png';
import './App.css';
import './fonts/css/fontello.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>React Task List</h1>
        </div>
        <div className="App-body">
          <div className="create-container">
            <form>
              <input type="text" placeholder="Введите название задачи"/>
              <button type="submit" className="btn-primary">
                <i className="icon-plus"></i>
                Добавить
              </button>
            </form>
          </div>
          <div className="tasks">
            <div className="task">
              <div className="check">
                <i className="icon-check-empty"></i>
              </div>
              <div className="title">
                Название задачи
              </div>
              <div className="actions">
                <button className="btn-primary">
                  <i className="icon-edit"></i>
                </button>
                <button className="btn-danger">
                  <i className="icon-cancel"></i>
                </button>
              </div>
            </div>
            <div className="task">
              <div className="check">
                <i className="icon-check"></i>
              </div>
              <div className="title">
                <s>Название задачи</s>
              </div>
              <div className="actions">
                <button className="btn-primary">
                  <i className="icon-edit"></i>
                </button>
                <button className="btn-danger">
                  <i className="icon-cancel"></i>
                </button>
              </div>
            </div>
            <div className="task">
              <div className="check">
                <i className="icon-check"></i>
              </div>
              <div className="title">
                <input type="text" placeholder="Введите название задачи" value="Название задачи"/>
              </div>
              <div className="actions">
                <button className="btn-primary">
                  <i className="icon-floppy"></i>
                </button>
                <button className="btn-danger">
                  <i className="icon-cancel"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
