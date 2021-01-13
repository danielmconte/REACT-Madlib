import React from 'react';

const SadSentence = ({person, thing, adjective, color}) => {
    return (
        <>
         <p>{`Look at poor ${adjective} ${person} whose favorite thing is a cheap ${color} ${thing}.`}</p>
        </>
    )
}

export default SadSentence;