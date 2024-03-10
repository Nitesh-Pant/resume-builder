import React, { useState } from 'react'

function Skills() {
    const [skills, setSkills] = useState([])
    const [currentSkill, setCurrentSkill] = useState('')


    return (

        <div className='text-left'>
            <label>
                Skills
            </label>

            <div><input type='text' name="name" value={currentSkill} placeholder='Skill' onChange={(e)=> setCurrentSkill(e.target.value)}/>
                <button onClick={()=> setSkills([...skills, currentSkill])}>Add</button></div>

            {<ul className='flex flex-wrap'>
                {skills && skills.map((item, index) => {
                    return (
                        <li className='border border-grey-600 p-1 m-1'>
                            {item}
                        </li>
                    )
                })}

            </ul>
            }
            <br />
        </div>
    )
}

export default Skills