import React, { useState } from 'react'
import ResumeScreen from './ResumeScreen'
import Experience from './Experience'
import Skills from './Skills'

function DetailScreen() {
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        github: '',
        linkedin: ''
    })

    const [professionalExperience, setProfessionalExperience] = useState([{
        company: '',
        position: '',
        address: '',
        description: '',
        to: '',
        from: ''
    }])

    return (
        <div className='flex'>
            <div className='mx-12 my-6 border border-red-500 w-[500px]'>
            <div className='text-left'>
                <label>
                    Personal Info
                </label>

                {<ul>
                    <li>
                        <input type='text' name="name" value={personalDetails.name} placeholder='name' onChange={(e) => setPersonalDetails({ ...personalDetails, 'name': e.target.value })} />
                    </li>
                    <li>
                        <input type='email' name="email" value={personalDetails.email} placeholder='email' onChange={(e) => setPersonalDetails({ ...personalDetails, 'email': e.target.value })} />
                    </li>
                    <li>
                        <input type='text' name="address" value={personalDetails.address} placeholder='address' onChange={(e) => setPersonalDetails({ ...personalDetails, 'address': e.target.value })} />
                    </li>
                    <li>
                        <input type='text' name="phone" value={personalDetails.phone} placeholder='phone' onChange={(e) => setPersonalDetails({ ...personalDetails, 'phone': e.target.value })} />

                    </li>
                    <li>
                        <input type="url" name="github" value={personalDetails.github} placeholder='github link' onChange={(e) => setPersonalDetails({ ...personalDetails, 'github': e.target.value })} />
                    </li>
                    <li>
                        <input type="url" name="linkedin" value={personalDetails.linkedin} placeholder='linkedin link' onChange={(e) => setPersonalDetails({ ...personalDetails, 'linkedin': e.target.value })} />
                    </li>
                </ul>
                }
                <br/>

<Experience/>
<Skills/>
                {/* experience */}
                {/*
                <label>Experience
                </label>
                {<ul className='block'>
                    <li>
                        <input type='text' name="company" value={professionalExperience.company} placeholder='company name' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'company': e.target.value })} />

                    </li>
                    <li>
                        <input type='text' name="position" value={professionalExperience.position} placeholder='position' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'position': e.target.value })} />
                    </li>
                    <li>
                        <input type='text' name="address" value={professionalExperience.address} placeholder='address' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'address': e.target.value })} />
                    </li>
                    <li>
                        <textarea name="description" value={professionalExperience.description} placeholder='description' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'description': e.target.value })} />
                    </li>
                    <li>
                        <input type="date" name="to" value={professionalExperience.to} placeholder='date' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'to': e.target.value })} />
                    </li>
                    <li>
                        <input type="date" name="from" value={professionalExperience.from} placeholder='from' onChange={(e) => setProfessionalExperience({ ...professionalExperience, 'from': e.target.value })} />
                    </li>
                    <li><button>Add more</button></li>
                </ul>
                }*/}
            </div>
            </div>
            <div>
                <ResumeScreen data={{ 'personalDetails': personalDetails, 'professionalExperience': professionalExperience }} />
            </div>
        </div>
    )
}

export default DetailScreen