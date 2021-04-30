import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.title.trim()) {
          this.props.addTodoProps(this.state.title)
          this.setState({
            title: "",
          })
        } else {
          alert("\nPlease enter something into the box before submitting.")
        }
      }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}
export default InputTodo