import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

export default function RoomsSelect(props) {

    return (
        <div className = 'mainDiv'>
            <div className = 'roomsDivs'>
                {props.roomsList.map((room) => {
                    return(
                    <Link key = {room.name} to = {`/${room.name}room`}>
                        <button className = 'roomButtons' style = {{textTransform: "capitalize" ,backgroundColor : room.color}}>
                            <Icon>{room.img}</Icon>
                            {room.name}<br />
                            {room.type}
                        </button><br /><br />
                    </Link>
                    )
                })}
            </div>
            <Link to = '/addroom'><button className = 'linkButtons'>Add New Room</button></Link>
        </div>
    )
}
