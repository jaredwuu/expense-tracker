import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const TransactionList = () => {
    const context = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus"> 
                    Cash <span>-$400</span> <button className = "delete-btn">X</button>
                </li>
            </ul>            
        </>
    )
}
