import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    let fiveH = []
    let spam = <Spam />
    for(let i=0 ; i<500 ; i++){
        fiveH.push(spam)
    }
    return fiveH
}

export default Spamalot

