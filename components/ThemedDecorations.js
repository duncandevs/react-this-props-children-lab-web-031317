import React , {Component} from 'react'
export default function ThemedDecorations(props){
    return (
      <div>
        {React.Children.map(props.children, child =>
            <div className={props.theme}>{child}</div>
        )}
      </div>
    )
}
