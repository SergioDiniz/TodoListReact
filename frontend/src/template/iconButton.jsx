import React from 'react'

const IconButton = (props) => {
    if(props.hide){
        return null
    } else {
        return(
            <button className={'btn btn-lg btn-'+ props.style}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        )
    }
    
}

export default IconButton