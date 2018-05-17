import React from 'react';
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'


// const getBooksQuery = gql`{ books{ name id }`

const BookList =()=>{

        console.log(this.props)
        return (
            <div>
                <ul id="book-list">
                    <li>Test Book instance</li>
                </ul>
            </div>
        )
}

export default BookList
// export default graphql(getBooksQuery)(BookList)



//
// import React from 'react';
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
//
// const GET_DOG = gql`
//   query {
//     dog(breed: "bulldog") {
//       id
//       breed
//       displayImage
//     }
//   }
// `
//
// export const BookList = () => (
//     <Query query={GET_DOG}>
//         {({ loading, error, data }) => {
//             if (loading) return <div>Loading...</div>;
//             if (error) return <div>Error :(</div>;
//
//             return (
//                 <Dog url={data.dog.displayImage} breed={data.dog.breed} />
//             )
//         }}
//     </Query>
// )
