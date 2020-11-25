import React from 'react'

const CharacterDetails = ({item}) => {
    return (
        <div className="card">
            <div className="cardfront">
                <img src={item.img} alt=""/>
            </div>
            <div className="cardback">
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Actor Name:</strong> {item.portrayed}
                    </li>
                    <li>
                        <strong>Nickname:</strong> {item.nickname}
                    </li>
                    <li>
                        <strong>Birthday:</strong> {item.birthday}
                    </li>
                    <li>
                         <strong>Status:</strong> {item.status}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterDetails
