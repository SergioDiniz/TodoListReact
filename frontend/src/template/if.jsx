import React from 'react'

const If = (props) => {
    console.log(props.test)
    if(props.test){
        return props.children
    } else {
        return false
    }
}

export default If