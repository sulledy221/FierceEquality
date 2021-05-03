import React from 'react';
import { Link } from 'react-router-dom'


export default function HomePage (props){
    return (
          <>
        <div className="homepage"><h1>You're safe here!</h1></div>
        <div className="homepage"><Link to="https://www.tripridetn.org/pride-flags/"><img className="homeimage" src="Assets/flag.jpeg" alt=""/>You can find information about all the Pride Flags here!</Link></div>
        <div className="homepage"><Link to="https://www.loftgaycenter.org/announcing_virtual_support_groups"><img className="homeimage" src="Assets/meetings.jpeg" alt=""/>This is a link to virtual support groups!</Link></div>
        <div className="homepage"><Link to="https://www.pride.com/"><img className="homeimage" src="Assets/pridenews.jpeg"/>This link leads you to a news website for LGBTQIA!</Link></div>
        <div className="homepage"><Link to="https://www.lgbtcenters.org/LGBTCenters?gclid=Cj0KCQjw1PSDBhDbARIsAPeTqreoEABzp9bqOH8Oi5_72gaWyGVrQR1jpI8ZoWHXUsnkYBUr1vstJOAaAgoREALw_wcB"><img className="homeimage" src="Assets/centers.jpeg"/>If you're comfortable with it, this link is for in person LGBTQIA centers!</Link></div>
        </>
      );
    }