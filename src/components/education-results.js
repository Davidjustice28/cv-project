import { Component } from "react";
import "../stylesheets/education-results.css"

class EducationResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myeducation: this.props.array
        }
    }

    render() {
        const array = this.props.array 
        console.log(array.length)
        return (
            <div id='education-results'>
                {array.map(item => {
                    return (
                        <div className="educationitem-div">
                            <p>{item[0]}</p>
                            <p>Start Date: {item[1]}</p>
                            <p>End Date: {item[2]}</p>
                            <button>Delete</button>
                        </div>
                    )
                })}
                <button onClick={this.props.button} id="education-addbutton">Add</button>
            </div>
        )
    }
}

export default EducationResults