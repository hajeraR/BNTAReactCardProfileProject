import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 tc'
        >
            <img src = {`https://avatars.dicebear.com/api/human/${props.name}.svg?size=100`}alt="user" />
            <h2>{props.name}</h2>
            <p>{props.username}</p>
            <p>{props.email}</p>

        </div>
    )
}

export default Card
