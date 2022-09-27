import { Component } from 'react';
import '../stylesheets/results-dropdown.css'
class ResultsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
        return (
            
            <div className='results-dropdown' id = {this.props.cssId}>
                <p id='info-text'></p>
                <button onClick={this.props.button}>{this.props.buttonName}</button>
            </div>
        )
    }
}

export default ResultsDropdown