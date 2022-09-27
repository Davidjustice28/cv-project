import { Component } from 'react';
import './stylesheets/App.css';
import ContactSection from './components/contact';
import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import ResultsDropdown from './components/results-dropdown';
import EducationResults from './components/education-results';
import ExperienceResults from './components/experience-results';


class App extends Component {
  constructor() {
    super()
    this.state = {
      display: "form",
      education: [],
      experiences: [],
    }
    this.updateContactInfo = this.updateContactInfo.bind(this)
    this.addEducation  = this.addEducation.bind(this)
    this.addExperience = this.addExperience.bind(this)
    this.previewCv = this.previewCv.bind(this)
    this.displayForm = this.displayForm.bind(this)
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

  editContactResults() {
    const contactSection = document.getElementById('contact-section')
    const resultsDiv = document.getElementById('contact-results')
    resultsDiv.style.display = 'none'
    contactSection.style.display = 'flex'
  }

  addEducation() {
    
    let school = document.getElementById('school').value
    let startDate = document.getElementById('school-start').value
    let endDate = document.getElementById('school-end').value
    return new Promise((resolve,reject) => {
      this.setState({education: this.state.education.concat([[school, startDate, endDate]])})
      setTimeout(() => {
        resolve(this.state.education)
      }, 250)
    }).then((educationObj) => {
      console.log(educationObj)
      return educationObj
    }).then(() => {
      document.getElementById('school').value = ' '
      document.getElementById('school-start').value = ' '
      document.getElementById('school-end').value = ''
      document.getElementById('education-section').style.display = "none"
    }).then(() => {
      let div = document.getElementById('education-results');
      div.style.display = "flex"
      div.style.flexDirection = "column"
      div.style.alignItems = "center"
    })
  }

  displayEducationForm() {
    console.log("education display button working")
    document.getElementById('education-section').style.display = "flex"
  }

  addExperience() {
    let company = document.getElementById('company').value
    let position = document.getElementById('position').value
    let startDate = document.getElementById('job-start').value
    let endDate = document.getElementById('job-end').value

    return new Promise((resolve,reject) => {
      this.setState({experiences: this.state.experiences.concat([[company, position, startDate, endDate]])})
      setTimeout(() => {
        resolve(this.state.experiences)
      }, 250)
    }).then((experiencesObj) => {
      console.log(experiencesObj)
      return experiencesObj
    }).then(() => {
      document.getElementById('company').value = ' '
      document.getElementById('position').value = ' '
      document.getElementById('job-start').value = ' '
      document.getElementById('job-end').value = ' '
      document.getElementById('experience-section').style.display = "none"
    }).then(() => {
      let div = document.getElementById('experience-results');
      div.style.display = "flex"
      div.style.flexDirection = "column"
      div.style.alignItems = "center"
    })
  }

  displayExperienceForm() {
    console.log("Experience display button working")
    document.getElementById('experience-section').style.display = "flex"
  }

  previewCv() {
    if(this.state.contactInfo != null ) {
      this.setState({display: "cv"});
    }
  }

  displayForm() {
    this.setState({display: "form"})
  }
  

  render() {
    if(this.state.display === "form") {
      return (
        <div className="App">
          <h1>Contact Information</h1>
          <ContactSection func ={this.updateContactInfo}></ContactSection>
          <ResultsDropdown cssId = 'contact-results' button = {this.editContactResults} buttonName = 'Edit' />
          <h2>Education</h2>
          <EducationSection func ={this.addEducation}/>
          <EducationResults array = {this.state.education} button = {this.displayEducationForm}/>
          <h3>Experience</h3>
          <ExperienceSection func ={this.addExperience}/>
          <ExperienceResults array = {this.state.experiences} button ={this.displayExperienceForm}/>
          <button id = "preview-button" onClick={this.previewCv}>Preview CV</button>
          <small>*Only click when you are completely finished adding all your information.</small>
      </div>
      )
    }

    if(this.state.display === "cv") {
      const {education, experiences} = this.state
      return (
        <div id='cv-screen'>
          <h1>My CV</h1>
          <div id='cv'>
            <h2>Contact Information</h2>
            <div id='cv-contactinfo'>
              <p>Full Name: {this.state.contactInfo.fullName}</p>
              <p>Phone Number: {this.state.contactInfo.phone}</p>
              <p>Email: {this.state.contactInfo.emailAddress}</p>
            </div>
            <h2>My Education</h2>
            <div id='cv-education'>
              {education.map((item) => {
                return (
                  <div className='cv-educationdiv'>
                    <p>{item[0]}</p>
                    <p>{item[1]}</p>
                    <p>{item[2]}</p>
                  </div>
                )
              })}
            </div>
            <h2>My Experience</h2>
            <div id='cv-experience'>
              {experiences.map((item) => {
                return (
                  <div className='cv-experiencediv'>
                    <p>{item[0]}</p>
                    <p>{item[1]}</p>
                    <p>{item[2]}</p>
                  </div>
                )
              })}

            </div>
          </div>
          <button id = "cv-button" onClick={this.displayForm}>Edit CV</button>
        </div>
      )
    }

  }
}

export default App;
