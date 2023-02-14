import React from 'react';
// import image from './selfie.jpg';


export default function Content({img, name, position, introduction, about, experence, email, linkedin, facebook, twitter, instagram, github}) {
    return (
        <div className="card">
            <img src={img} alt="account holder" className="head-pic" />
            <div className="card-title">
                <h1>{name}</h1>
                <h3>{position}</h3>
                <p>{introduction}</p>
            </div>
            <div className="contact-button">
                <form action={email}>
                    <button class="btn">
                        EMAIL ME
                    </button>
                </form>
                <form action={linkedin}>
                    <button class="btn">
                        LINKEDIN
                    </button>
                </form>
            </div>
            <div className="card-body">
                <h3>ABOUT</h3>
                <p>
                    {about}
                </p>
                <h3>EXPERIENCE</h3>
                <p>
                    {experence}
                </p>
            </div>
            <div className="social-links">
                <a href={facebook}>
                    <i class="fa fa-facebook"></i>
                </a>
                <a href={twitter}>
                    <i class="fa fa-twitter"></i>
                </a>
                <a href={instagram}>
                    <i class="fa fa-instagram"></i>
                </a>
                <a href={github}>
                    <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    )
}



















// export default function Content({img, name, position, introduction, about, experence, email, linkedin, facebook, twitter, instagram, github}) {
//     return (
//         <div className="card">
//             <img src={img} alt="account holder" className="head-pic" />
//             <div className="card-title">
//                 <h1>{name}</h1>
//                 <h3>{position}</h3>
//                 <p>{introduction}</p>
//             </div>
//             <div className="contact-button">
//                 <form action={email}>
//                     <button class="btn">
//                         EMAIL ME
//                     </button>
//                 </form>
//                 <form action={linkedin}>
//                     <button class="btn">
//                         LINKEDIN
//                     </button>
//                 </form>
//             </div>
//             <div className="card-body">
//                 <h3>ABOUT</h3>
//                 <p>
//                     {about}
//                 </p>
//                 <h3>EXPERIENCE</h3>
//                 <p>
//                     {experence}
//                 </p>
//             </div>
//             <div className="social-links">
//                 <a href={facebook}>
//                     <i class="fa fa-facebook"></i>
//                 </a>
//                 <a href={twitter}>
//                     <i class="fa fa-twitter"></i>
//                 </a>
//                 <a href={instagram}>
//                     <i class="fa fa-instagram"></i>
//                 </a>
//                 <a href={github}>
//                     <i class="fa fa-github"></i>
//                 </a>
//             </div>
//         </div>
//     )
// }

