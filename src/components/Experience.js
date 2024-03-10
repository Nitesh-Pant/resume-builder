import React, { useState } from 'react'

function Experience() {

    const [professionalExperience, setProfessionalExperience] = useState([{
        company: '',
        position: '',
        address: '',
        description: '',
        to: '',
        from: ''
    }])

    return (
       
            <div className='text-left'>
                <br/>

                {/* experience */}
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
                }
            </div>
    )
}

export default Experience