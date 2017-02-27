import React, { Component, PropTypes } from 'react';

class CreateTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  onChangeTitle(e) {
    this.setState({title: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    var title = this.state.title;
    if (title) {
      this.props.onAdd(title);
      this.setState({title: ''});
    }
  }

  render() {
    return (
      <div className="create-container">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter the name of the task"
            value={this.state.title}
            onChange={this.onChangeTitle.bind(this)}/>
          <button type="submit" className="btn-primary">
            <i className="icon-plus"></i>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTaskForm;