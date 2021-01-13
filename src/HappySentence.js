import React from 'react';

const HappySentence = ({person, thing, adjective, color}) => {
    return (
        <>
         <p>{`I wish I was ${adjective} ${person} he has a ${color} ${thing}.`}</p>
        </>
    )
}

export default HappySentence;