// Libraries
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"

// Components
import TodoContainer from "./functionBased/components/TodoContainer"

// Stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    // Strict mode provides extra checks and error messages while in dev
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>  
    </React.StrictMode>, 
     document.getElementById("root")
)