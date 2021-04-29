// import React, { Component } from 'react';
 


// constructor(props) {
//     super(props)
//     this.state = {
//        records: []
//    }
// };

// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(records => {
//     this.setState({
//     records: records
//     })
// }).catch(error => console.log(error))
// }

// renderListing() {
//     let recordList = []
//     this.state.records.map(record => {
//     return recordList.push(<li key={record.id}>{record.name}</li>)
//     })
//     return recordList;
//     }
        
//     render() {
//     return (
//     <ul>
//     {this.renderListing()}
//     </ul>
//     );
// }

// class Listing extends Component {
 
//     render() {
//         return (
//             <h1>Listing data</h1>
//         );
//     }
// }
 
// export default Listing;