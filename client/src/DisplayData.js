import React from 'react'
import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetMovies {
        movies {
            name
        }
    }
`

const DisplayData = () => {
    const { data, loading } = useQuery(QUERY_ALL_USERS);
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

    if (loading) {
        return <h3> Data is loading...</h3>
    }

    if (data) {
        console.log(data);
    }

    return (
        <div>
            {data &&
                data.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <h4>{user.username}</h4>
                            <h4>{user.age}</h4>
                            <h4>{user.nationality}</h4>
                        </div>
                    )
                })
            }

            {movieData &&
                movieData.movies.map((film) => {
                    return (
                        <div>
                            <h1>{film.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayData