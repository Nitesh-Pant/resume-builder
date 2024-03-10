import React from 'react'
function ResumeScreen(props) {
    return (
        <div className='border border-b-900 w-[750px]'>
            {/*console.log(props.data)*/}
            <div>
                <h2 className='font-bold text-black'>{props && props.data.personalDetails.name}</h2>
                <hr></hr>
                <span>{props && props.data.personalDetails.email + '|yyy'} | {props && props.data.personalDetails.address} | {props && props.data.personalDetails.phone} | <a href={props && props.data.personalDetails.github}>{props && props.data.personalDetails.github}</a> | <a href={props && props.data.personalDetails.linkedin}>{props && props.data.personalDetails.linkedin}</a></span>
            </div>

            {/* experience */}
            <div>
                <h2 className='font-bold text-black'>Professional Experience</h2>
                <hr></hr>
                {console.log(props.data.professionalExperience)}
                <div className='flex'>
                    <p className='text-lg w-[75%] text-left'>{props && props.data.professionalExperience.company}</p>
                    <p className='text-right inline-block'>{props && props.data.professionalExperience.to} to {props && props.data.professionalExperience.from}</p>

                </div>
                <div className='flex'>
                    <p className='italic text-left w-[90%]'> {props && props.data.professionalExperience.position}</p>
                    <p className='text-right'>{props && props.data.professionalExperience.address}</p>
                </div>
                <div className='text-left'>
                    {props && props.data.professionalExperience.description}
                </div>

            </div>


        </div >
    )
}

export default ResumeScreen