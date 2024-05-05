import React from 'react'
import './card.css'
import sandTime from '../../assets/sandTime.png'

const cardObject = {
    companyName: "Dropbox",
    jdLink: "https://weekday.works",
    jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    jobDetailsFromCompany: "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    jobRole: "frontend",
    location: "delhi ncr",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
    maxExp: 6,
    maxJdSalary: 61,
    minExp: 3,
    minJdSalary: null,
    salaryCurrencyCode: "USD"
};

const Card = () => {
    return (
        <div className='container'>
            <div className='datePosted' style={{ width: "120px", display: "flex", gap: "5px", alignItems: "center" }}>
                <img src={sandTime} alt="" width={9} height={10} />
                Posted 10 days ago
            </div>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "start",
            }}>
                <div>
                    <img src={cardObject.logoUrl} alt="" style={{ height: " 2.5rem" }} />
                </div>
                <div >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <span className='companyName'>{cardObject.companyName}</span>
                        <span className='jobRole'>{cardObject.jobRole}</span>
                        <span>{cardObject.location}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card