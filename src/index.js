import React from "react";
import ReactDOM from "react-dom";
import Content from "./content";
// import image from './selfie.jpg';
import datalist from "./data";

const data = datalist.map(content => {
    return (
        <Content
            img={content.img}
            name={content.name}
            position={content.position}
            introduction={content.introduction}
            about={content.about}
            experence={content.experence}
            email={content.contact.email}
            linkedin={content.contact.linkedin}
            facebook={content.socialinks.facebook}
            twitter={content.socialinks.twitter}
            instagram={content.socialinks.instagram}
            github={content.socialinks.github}
        />
    )
})

ReactDOM.render(data, document.getElementById("root"));




// ReactDOM.render(<Content
//                     img={image}
//                     name="John Doe"
//                     position="CEO of ABC Company"
//                     introduction="~ One sentence introduction ~"
//                     about="0000000000000000000000000000000000000000"
//                     experence="0000000000000000000000000000000000000000"
//                     email="https://www.google.com/intl/zh-TW/gmail/about/"
//                     linkedin="https://www.linkedin.com/"
//                     facebook="https://www.facebook.com"
//                     twitter="https://www.twitter.com"
//                     instagram="https://www.instagram.com"
//                     github="https://www.github.com"
//                 />, document.getElementById("root"));



