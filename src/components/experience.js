import '../stylesheets/experience.css'
import { Component } from 'react';

class ExperienceSection extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id ='experience-section' className='sections'>
                <form id='experience-form' className='forms'>
                    <label htmlFor='company'>Company</label>
                    <input type='text' id='company'></input>
                    <label htmlFor='position'>Position</label>
                    <input type='text' id='position'></input>
                    <div id = 'jobdate-range'>
                        <div className='job-subsections'>
                            <label htmlFor='job-start'>Start Date</label>
                            <input type='date' id='job-start'></input>
                        </div>
                        <div className='job-subsections'>
                            <label htmlFor='job-end'>End Date</label>
                            <input type='date' id='job-end'></input>
                        </div>
                    </div>
                    <button onClick={this.props.func} type = 'button'>Submit</button>
                </form>
            </div>

        )
    }
}

export default ExperienceSection