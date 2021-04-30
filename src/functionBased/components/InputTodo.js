import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

// With useState Hook in function-based component, the initial state isn't limited to being a string.

const InputTodo = props => {

    // This is the setup for accommodating the state of multiple items if needed
    const [inputText, setInputText] = useState({
        title: ""
    });

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: ""
            })
        } else {
            alert("The field cannot be blank.")
        }
    }
    
      return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle style={{ 
                    color: "darkcyan", 
                    fontSize: "36px", 
                    marginTop: "2px",
                    marginRight: "-30px" }}
                />
            </button>
        </form>
      )
}

export default InputTodo