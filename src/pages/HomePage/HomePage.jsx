import React from 'react';
import { Link } from 'react-router-dom'


export default function HomePage (props){
    return (
          <>
        <div><Link to="https://www.tripridetn.org/pride-flags/">You can find information about all the Pride Flags here!</Link></div>
        <div><Link to="https://www.loftgaycenter.org/announcing_virtual_support_groups">This is a link to virtual support groups!</Link></div>
        <div><Link to="https://www.pride.com/">This link leads you to a news website for LGBTQIA!</Link></div>
        <div><Link to="https://www.lgbtcenters.org/LGBTCenters?gclid=Cj0KCQjw1PSDBhDbARIsAPeTqreoEABzp9bqOH8Oi5_72gaWyGVrQR1jpI8ZoWHXUsnkYBUr1vstJOAaAgoREALw_wcB">If you're comfortable with it, this link is for in person LGBTQIA centers!</Link></div>
        </>
      );
    }