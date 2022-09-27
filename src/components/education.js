import { Component } from 'react';
import '../stylesheets/education.css'


class EducationSection extends Component {
    constructor() {
        super()
        this.state = {}
    }

    updateContactInfo() {
        console.log("hello world")
    }

    render() {
        return(
            <div id='education-section' className='sections'>
                <form id='education-form' className='forms'>
                    <label htmlFor='school'>School Name</label>
                    <input type='text' id='school'></input>
                    <div id = 'schooldates'>
                        <div className='school-subsection'>
                            <label htmlFor='school-start'>Start Date</label>
                            <input type='date' id='school-start'></input>
                        </div>
                        <div className='school-subsection'>
                            <label htmlFor='school-end'>End Date</label>
                            <input type='date' id='school-end'></input>
                        </div>
                    </div>
                    <button onClick = {this.props.func} type='button' >Submit</button>
                </form>
    
            </div>
        
        )
    }
}

export default EducationSection