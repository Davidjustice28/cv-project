import { Component } from 'react';
import '../stylesheets/contact.css'

class ContactSection extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(

            <div id='contact-section' className='sections'>
                <form id='contact-form' className='forms'>
                    <label htmlFor='fullname'>Name</label>
                    <input type='text'placeholder='Steve Jobs' id='fullname'></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email'placeholder='example@mail.com'id='email'></input>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' placeholder='123-456-7890' id='phone'></input>
                    <button type='button'onClick={this.props.func}>Submit</button>
                </form>
            </div>

        
        )
    }
}

export default ContactSection