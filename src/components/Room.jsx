import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import '../App.css'; 

export default function Room(props) {

    const [product, setproduct] = useState();

    return (
        <div className = 'mainDiv'>
            <p style = {{textTransform: "capitalize" }}>Room Name : {props.name}</p> 
            <p style = {{textTransform: "capitalize" }}>Room Type : {props.type}</p>
            <div className = 'productsList'>
                {props.roomsList[props.index].products.map((element, i) => {

                    return(
                    <button className = {element.status ? "green" : "red"} onClick = {() => {props.onOrOff(props.index, i);}} id = "productButton" key = {i}><span className ='icon'><Icon>{element.icon}</Icon></span><br /> {element.productType}</button>
                    )
                })}
            </div>
            <br /><button className = 'linkButtons' onClick = {() => {document.getElementById('displayDiv').style.display = 'block'}}>Add Products</button><br />
            <div id = 'displayDiv'>
                <br /><select className="selectProducts" onChange = {(element) => setproduct(element.target.value)}>
                    <option value="">Choose Product :</option>
                    <option value="Air-Conditioner">Air-Conditioner</option>
                    <option value="Boilermaker">Boilermaker</option>
                    <option value="Stereo System">Stereo System</option>
                    <option value="Lamp">Lamp</option>
                </select><br />
                <br /><button className = 'addProduct' onClick = {() => {props.addProducts(product, props.index);}}>Add</button><br />
            </div>
        </div>
    )
}
