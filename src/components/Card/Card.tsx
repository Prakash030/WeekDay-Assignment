import React, {CSSProperties} from 'react'
import './card.css'
import sandTime from '../../assets/sandTime.png'
import avatar from '../../assets/avatar.png'

// const cardObject = {
//     companyName: "Dropbox",
//     jdLink: "https://weekday.works",
//     jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
//     jobDetailsFromCompany: "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
//     jobRole: "frontend",
//     location: "delhi ncr",
//     logoUrl: "https://logo.clearbit.com/dropbox.com",
//     maxExp: 6,
//     maxJdSalary: 61,
//     minJdSalary: 41,
//     minExp: 3,
//     salaryCurrencyCode: "USD"
// };

const Card = ({cardObject}) => {
    const containerStyle: CSSProperties = {
        maxHeight: "200px",
        overflow: 'hidden',
        position: 'relative',
      };
    
      const blurOverlayStyle: CSSProperties = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '70px', // Adjust the height of the blurred area as needed
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 5))',
        pointerEvents: 'none',
      };
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
                        <span className='location'>{cardObject.location}</span>
                    </div>
                </div>
            </div>
            <div className='salary'>
                Estimated Salary: {cardObject.minJdSalary}K - {cardObject.maxJdSalary}K {cardObject.salaryCurrencyCode} 
                ✅
            </div>
            <div>
                <p className='aboutCompany'>About Company:</p>
            </div>
            <div className='jobDesciption' style={containerStyle}>
                {cardObject.jobDetailsFromCompany}
                <div style={blurOverlayStyle}></div>
            </div>
            <div>
                <span className='buttonView'
                onClick={() => window.open(cardObject.jdLink)}
                >View job</span>
            </div>
            <div>
                <h3 className='expDesc'>Minimum Experience</h3>
                <p className='expYear'>{cardObject.minExp} years</p>
            </div>
            <button className='buttonApply'>⚡Easy Apply</button>
            <button className='buttonreferral'>
                <img src={avatar} alt="" height={25} style={{
                    marginRight: "5px",
                    borderRadius: "50%",
                    filter: "blur(1px)"
                }}/>
                <img src={avatar} alt="" height={25}
                style={{
                    marginRight: "8px",
                    borderRadius: "50%",
                    filter: "blur(1px)"
                }}/>
                <span>Unlock referral asks</span></button>
        </div>
    )
}

export default Card