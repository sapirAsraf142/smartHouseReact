import React,{useState} from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Title from './components/Title';
import RoomsSelect from './components/RoomsSelect';
import AddRooms from './components/AddRooms';
import Room from './components/Room';

function App() {
  
  const [roomsList , setRoomsList] = useState([]);

  const addNewRoom = (type, name, color) => {
    let newRoomsList = [...roomsList];
    if(name.length >= 1 && name.length <= 8 && type.length !== 0){
      if(type === 'Badroom'){
        newRoomsList = [...roomsList , {type : type, name : name, color : color,img: 'hotel', products : []}];
      }else if(type === 'Bathroom'){
        newRoomsList = [...roomsList , {type : type, name : name, color : color,img: 'bathtub', products : []}];
      }else{
        newRoomsList = [...roomsList , {type : type, name : name, color : color,img: 'restaurant', products : []}];
      }
    }else{
      alert('Error!! You did not enter name or type');
    }
    setRoomsList(newRoomsList);
  }
  
  const addProducts = (product, i) => {
    if(product === undefined){
      alert('Choose Product from the products list');
      return
    }
    let finalList = [...roomsList];
    if(finalList[i]['products'].length >= 5){
      alert('Error !!! It is not possible to add more than 5 products');
    }else{
      if(product === 'Boilermaker'){
        if(finalList[i].type === 'Bathroom'){
          finalList[i]['products'] = [...finalList[i].products, {productType : product,icon: 'bathtub', status : false}];
          setRoomsList(finalList);
        }else{
          alert('Error !!! you can add a boilermaker ONLY to Bathroom/Shower');
        }
      }else if(product === 'Stereo System'){
        let stereo = finalList[i]['products'].filter((element) =>{
          if(element.productType === 'Stereo System'){
            return(
              element
              )
            }
          })
          if(stereo.length === 0){
            finalList[i]['products'] = [...finalList[i].products, {productType : product, icon: 'radio', status : false}];
            setRoomsList(finalList);
          }else{
            alert('Error !!! You have already selected 1 stereo system once');
          }
        }else if(product !== 'Stereo System' && product !== 'Boilermaker'){
          if(product === 'Lamp'){
            finalList[i]['products'] = [...finalList[i].products, {productType : product,icon: 'light', status : false}];
            setRoomsList(finalList);
          }else{
            finalList[i]['products'] = [...finalList[i].products, {productType : product,icon: 'toys', status : false}];
            setRoomsList(finalList);
          }
        }
      }
    }
    const onOrOff = ((index, i)=>{
      let newArrey = [...roomsList];
      newArrey[index].products[i].status = !newArrey[index].products[i].status;
      setRoomsList(newArrey);
    })

    return (
    <div className="App">
      <Router>
      <Title />
        <Switch>
          <Route exact path = '/' component = {() => <RoomsSelect roomsList = {roomsList} />}/>
          <Route exact path = '/addroom' component = {() => <AddRooms addRooms = {addNewRoom}/>}/>
          {roomsList.map((room, i) => {
            return(
            <Route exact path = {`/${room.name}room`} key = {room.name} component ={() => <Room onOrOff ={onOrOff} index = {i} addProducts = {addProducts} roomsList = {roomsList} name = {room.name} type = {room.type} />}/>
            )
            })}
        </Switch>
      </Router>
    </div>
  );
}
export default App;