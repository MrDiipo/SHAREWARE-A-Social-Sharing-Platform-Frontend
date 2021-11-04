import React from 'react'

export default function ButtonWithProgess(props) {
    return (
        <button
         className="btn btn-primary" 
         onClick={props.onClick}
         disabled={props.pendingApiCall}>
         {props.pendingApiCall && (<div className="spinner-border text-light spinner-border-sm ml-10">
         <span className="sr-only"></span>
         </div>) 
         }
           {props.text}
         </button>
    )
}
