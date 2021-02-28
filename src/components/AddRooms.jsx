import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export default function AddRooms(props) {

    const [roomType, setRoomType] = useState('');
    const [roomName, setRoomName] = useState('');
    const [roomColor, setRoomColor] = useState('');

    return (
        <div className = 'mainDiv'>
            <div className = 'addRoomRegister'>
            <label>Choose Room type :</label><select id="roomType" onChange = {(element) => {setRoomType(element.target.value)}}>
                    <option value =''>Room Type :</option>
                    <option value="Badroom">Badroom</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Kitchen">Kitchen</option>
                </select><br />
                <label>Choose Room Name :</label><input className = "roomName" onChange = {(element) => {setRoomName(element.target.value)}} placeholder = 'Room Name'/><br />
                <label>Choose Room Color :</label><input type = 'color' className = "roomColor" onChange = {(element) => {setRoomColor(element.target.value)}} placeholder = 'Room Color'/><br />
                <Link to = '/'><button className = 'linkButtons' onClick = {() => {props.addRooms(roomType, roomName, roomColor)}}>Add New Room</button></Link>
            </div>
        </div>
    )
}