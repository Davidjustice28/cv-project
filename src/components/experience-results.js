import { Component } from "react";
import "../stylesheets/experience.css"

class ExperienceResults extends Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        const experienceArray = this.props.array
        console.log(experienceArray)
        return (
            <div id="experience-results">
                {experienceArray.map(job => {
                    return (
                        <div className="job-div">
                            <p>{job[0]}</p>
                            <p>{job[1]}</p>
                            <p>Start Date: {job[2]}</p>
                            <p>End Date: {job[3]}</p>
                            <button>Delete</button>
                        </div>
                    )
                })}
                <button onClick={this.props.button} type='button' id="exp-button">Add</button>
            </div>
        )
    }
}

export default ExperienceResults