import React, {Component, PropTypes} from 'react';

class Task extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    isEdit: PropTypes.bool,
    onDestroy: PropTypes.func.isRequired,
    onChangeTask: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      isFinished: props.isFinished,
      isEdit: !!props.isEdit,
      newTitle: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      isFinished: nextProps.isFinished,
      isEdit: !!nextProps.isEdit,
      newTitle: null
    });
  }

  onClickFinished() {
    this.setState({isFinished: !this.state.isFinished});
  }

  onClickEdit() {
    this.setState({
      isEdit: true,
      newTitle: this.state.title
    });
  }

  onChangeNewTitle(e) {
    this.setState({newTitle: e.target.value});
  }

  save() {
    // Say perent to change title
    this.props.onChangeTask(this.props.id, {
      title: this.state.newTitle,
      isFinished: this.state.isFinished,
      isEdit: false
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.save();
  }

  onKeyUp (e) {
    if (e.key === 'Escape') {
      // Disable editing
      this.setState({isEdit: false});
    }
  }

  onClickDestroy() {
    this.props.onDestroy(this.props.id);
  }

  render() {
    return (
      <div className="task">
        <div className="check" onClick={this.onClickFinished.bind(this)}>
          {this.state.isFinished ? <i className="icon-check"></i> : <i className="icon-check-empty"></i>}
        </div>
        <div className="title">
          {this.state.isEdit
            ? (
              <form className="editForm" onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                       placeholder="Введите название задачи"
                       value={this.state.newTitle}
                       onChange={this.onChangeNewTitle.bind(this)}
                       onKeyUp={this.onKeyUp.bind(this)} />
              </form>
            )
            : (this.state.isFinished ? <s>{this.state.title}</s> : this.state.title)
          }
        </div>
        <div className="actions">
          {this.state.isEdit
            ? (
              <button className="btn-primary" onClick={this.save.bind(this)}>
                <i className="icon-floppy"></i>
              </button>
            )
            : (
              <button className="btn-primary"
                      onClick={this.onClickEdit.bind(this)}
                      style={{visibility: this.state.isFinished ? 'hidden' : 'visible'}}>
                <i className="icon-edit"></i>
              </button>
            )
          }

          <button className="btn-danger" onClick={this.onClickDestroy.bind(this)}>
            <i className="icon-cancel"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Task;