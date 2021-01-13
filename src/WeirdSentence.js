import React from 'react';

const WeirdSentence = ({person, thing, adjective, color}) => {
    return (
        <>
         <p>{`Don't go near ${adjective} ${person} he carries a ${color} ${thing} everywhere he goes.`}</p>
        </>
    )
}

export default WeirdSentence;