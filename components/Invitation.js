import React , {Component} from 'react'
export default function Invitation(props){
    return (
      <div>
        <h1>You've been invited!</h1>
        {props.children}
      </div>
    )
}
