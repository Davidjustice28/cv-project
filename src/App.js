import { Component } from 'react';
import './stylesheets/App.css';
import ContactSection from './components/contact';
import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import ResultsDropdown from './components/results-dropdown';


class App extends Component {
  constructor() {
    super()
    this.state = {
      education: [],
      experiences: [],
    }
    this.updateContactInfo = this.updateContactInfo.bind(this)
    this.contactSection = document.getElementById('contact-section')
    this.resultsDiv = document.getElementById('contact-results')
  }

  
  updateContactInfo() {
    let name = document.getElementById('fullname').value
    let email = document.getElementById('email').value
    let number = document.getElementById('phone').value
    return new Promise((resolve) => {
      this.setState({contactInfo: {fullName: name, emailAddress: email, phone: number } })
      setTimeout(() => {
        resolve(this.state.contactInfo)
      },250)
    }).then((contactInfoObj) => {
      console.log(contactInfoObj)
    }).then(() => {
        console.log('div is not empty')
        const p = document.getElementById('info-text')
        p.innerText = `Full Name:  ${this.state.contactInfo.fullName}
         Email:  ${this.state.contactInfo.emailAddress}
         Cell:  ${this.state.contactInfo.phone}`    
    }).then(() => {
      const contactSection = document.getElementById('contact-section')
      const resultsDiv = document.getElementById('contact-results')
      contactSection.style.display = 'none'
      resultsDiv.style.display = 'flex'

    })
  }

  editResults() {
    const contactSection = document.getElementById('contact-section')
    const resultsDiv = document.getElementById('contact-results')
    resultsDiv.style.display = 'none'
    contactSection.style.display = 'flex'
  }

  render() {
    return (
      <div className="App">
        <h1>Contact Information</h1>
        <ContactSection func ={this.updateContactInfo}></ContactSection>
        <ResultsDropdown cssId = 'contact-results' info ={this.state.contactInfo} edit = {this.editResults} />
        <h2>Education</h2>
        <EducationSection/>
        <ResultsDropdown id='education-results'/>
        <h3>Experience</h3>
        <ExperienceSection/>
        <ResultsDropdown id='experience-results'/>
    </div>
  )
  }
}

export default App;
