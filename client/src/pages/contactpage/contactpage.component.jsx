import React from 'react';
import axios from 'axios';
import useForm from '../../custom-hooks/useForm'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './contactpage.style.scss'

const ContactPage =({history})=>{

    const [formValues,handleChange]=useForm({name:'', email:'', subject:'',message:''})

    const handleFormSubmit=async(event)=>{
     event.preventDefault();
     const response = await axios.post('localhost:5000/api/mendls/surveys',formValues)
    }

    return(
        <div className="contact-page-container">
            <div className="contact-page-form">
            <span className="form-header">
                <h1>CONTACT US</h1>
                <h2>Just fill in the form below and click the "Send Message" button.</h2>
            </span>
                <form onSubmit={handleFormSubmit}>
               <div className="contact-form-div">
                <FormInput
                    name='name'
                    type='text'
                    handleChange={handleChange}
                    value={formValues.name}
                    label='Your Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={formValues.email}
                    label='Your email'
                    required
                />
               
                <FormInput
                    name='subject'
                    type='text'
                    handleChange={handleChange}
                    value={formValues.subject}
                    label='Subject'
                    required
                />
                <textarea
                    className="text-area"
                    name='message'
                    onChange={handleChange}
                    value={formValues.message}
                    placeholder='Message'
                    required
                />
                <CustomButton className="form-submit"
                    type='submit'
                >
                     Send message
                </CustomButton>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;