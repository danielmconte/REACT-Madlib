import React, {useState} from 'react';
import './Madlib.css';
import HappySentence from './HappySentence';
import WeirdSentence from './WeirdSentence';
import SadSentence from './SadSentence'


const Madlib = () => {
    const bottomDiv = document.querySelector('#sentence');
    const happyDiv = document.querySelector('#happy');
    const sadDiv = document.querySelector('#sad');
    const weirdDiv = document.querySelector('#weird');


    const beforeTheWords = {
        person: "",
        thing: "",
        adjective: "",
        color: ""
    }
    const [theWords, setTheWords] = useState(beforeTheWords)
    const handleChange = (e) => {
        const { placeholder, value } = e.target;
        setTheWords(data => ({
            ...data,
            [placeholder]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const choiceOne = document.querySelector('input[id="one"]:checked');
        const choiceTwo = document.querySelector('input[id="two"]:checked');
    
        const {person, thing, adjective, color} = theWords;  
        if (person.length > 0  && thing.length > 0 && adjective.length > 0 && color.length > 0){
            bottomDiv.classList.remove('beSeen');
            if (choiceOne) {
                happyDiv.classList.remove('seenHappy');
                sadDiv.classList.add('seenSad');
                weirdDiv.classList.add('seenWeird');
            } else if(choiceTwo){
                sadDiv.classList.remove('seenSad');
                happyDiv.classList.add('seenHappy');
                weirdDiv.classList.add('seenWeird');
                
            } else {
                weirdDiv.classList.remove('seenWeird');
                happyDiv.classList.add('seenHappy');
                sadDiv.classList.add('seenSad');
            }

        } else {
        alert(`Please fill out all fields.`) 
        }
    }
    
    const handleRestart = (e) => {
        e.preventDefault();
        bottomDiv.classList.add('beSeen')
        happyDiv.classList.add('seenHappy');
        sadDiv.classList.add('seenSad');
        weirdDiv.classList.add('seenWeird');
        document.querySelector('input[name="choice"]').checked = false;
        setTheWords(beforeTheWords);
    }
    
   
    return (
        <>
            <h1>MADLIB</h1>
            
            <hr/>
            <form>
                <label htmlFor = "choice">
                <input id = "one" type="radio" name = "choice" className = "lineUp"/> Envy
                <input id = "two" type="radio" name = "choice" className = "lineUp"/> Pity
                <input id = "three" type="radio" name = "choice" className = "lineUp"/> Fear
                </label>
                </form>
             <hr></hr>            

            <form>
                <label > Choose your words, carfully:  
                    <input 
                    type = "text" 
                    placeholder = "person" 
                    value = {theWords.person} 
                    onChange = {handleChange}
                    />

                    <input 
                    type = "text" 
                    placeholder = "thing" 
                    value = {theWords.thing} 
                    onChange = {handleChange}
                    />
                    
                    <input 
                    type = "text" 
                    placeholder = "adjective" 
                    value = {theWords.adjective} 
                    onChange = {handleChange}
                    />

                    <input 
                    type = "text" 
                    placeholder = "color" 
                    value = {theWords.color} 
                    onChange = {handleChange}
                    />

                    <button onClick={handleSubmit}>Create Madlib</button>
                    <button onClick={handleRestart}>Restart</button>
                </label>
            </form>
        <div id = "sentence"  className = "beSeen">
            <div id = "happy" className = "seenHappy">
            <HappySentence
                person = {theWords.person}
                thing = {theWords.thing} 
                adjective = {theWords.adjective}
                color = {theWords.color}
            />
            </div>

            <div id = "sad" className = "seenSad">
            <SadSentence
                person = {theWords.person}
                thing = {theWords.thing} 
                adjective = {theWords.adjective}
                color = {theWords.color}
            />
            </div>

            <div id = "weird" className = "seenWeird">
            <WeirdSentence
                person = {theWords.person}
                thing = {theWords.thing} 
                adjective = {theWords.adjective}
                color = {theWords.color}
            />
            </div>
       </div>
       </>
    )
}

export default Madlib;