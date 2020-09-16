import React from "react";
import {Button} from "./Button";

export const Table = ({list, onDismiss}) => {
    return (
        <ul className='table'>
            {list.map(item => (
                    <li key={item.objectID} className='table-row'>
                        <span style={{ width: '37%' }}><a href={item.url}>{item.title}</a></span>
                        <span style={{ width: '30%' }}>{item.author}</span>
                        <span style={{ width: '10%' }}>{item.num_comments}</span>
                        <span style={{ width: '8%' }}>{item.points}</span>
                        <span style={{ width: '15%' }}>
                             <Button onClick={() => onDismiss(item.objectID)}
                                     className='button-inline'
                             >
                                 Dismiss
                             </Button>
                        </span>

                    </li>
                ))}
        </ul>
    )
}