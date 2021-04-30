import { Link } from "react-router-dom"

const TransgenderLinks = [{
    title: "Transgender Clothing Resources",
    url:"https://www.atrh.org/gender-affirming-products"
}, {
    title: "The Trevor Project",
    url:"https://www.thetrevorproject.org/?gclid=Cj0KCQjw6-SDBhCMARIsAGbI7Ujxab-jZepXcjbUc5hRuK43KcEIMrrpamuzB0m9qbkcHxBYr61EPKoaAlvuEALw_wcB"
}]







const allLinks = {TransgenderLinks}

export default function FlagLinks ({flag}) {
    console.log("flag   ", flag)
    if (allLinks[`${flag}Links`]){
        return allLinks[`${flag}Links`].map(link => (<div><a href={link.url}><p>{link.title}</p></a></div>))
    }
    return <p>hoob</p>
}