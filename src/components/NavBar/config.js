import { Link } from 'react-router-dom'
import FlagImage from '../FlagImage/FlagImage'

const flagNames = [
    'Rainbow',
    'QPOC',
    'Progress',
    'Polysexual',
    'Phillypride',
    'Pan',
    'Asexual',
    'Bisexual',
    'Demisexual',
    'GenderQueer',
    'Intersex',
    'Lesbian',
    'Nonbinary',
    'OGpride',
    'Transgender',
    'StraightAlly'
]

export const flagLinks = flagNames.map (flag => (
    { value: flag , text: <Link to={`/flagpage/${flag}`}><FlagImage flag={flag}/></Link>, key: flag}
))



// export const flags = [
//     { value:'rainbow', text: <Link to="/flagpage/rainbow"></Link>, key: 'rainbow'},
//     { value:'QPOC', text: 'QPOC', key: 'QPOC'},
//     { value:'progress', text: 'progress', key: 'progress'},
//     { value:'Polysexual', text: 'Polysexual', key: 'Polysexual'},
//     { value:'phillypride', text: 'phillypride', key: 'phillypride'},
//     { value:'pan', text: 'pan', key: 'pan'},
//     { value:'Asexual', text: 'Asexual', key: 'Asexual'},
//     { value:'bisexual', text: 'bisexual', key: 'bisexual'},
//     { value:'Demisexual', text: 'Demisexual', key: 'Demisexual'},
//     { value:'genderqueer', text: 'genderqueer', key: 'genderqueer'},
//     { value:'Intersex', text: 'Intersex', key: 'Intersex'},
//     { value:'Lesbian', text: 'Lesbian', key: 'Lesbian'},
//     { value:'nonbinary', text: 'nonbinary', key: 'nonbinary'},
//     { value:'originalpride', text: 'originalpride', key: 'originalpride'},
// ]

