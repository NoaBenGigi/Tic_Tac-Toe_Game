import { StyleSheet, View, Text, ImageBackground, Image, Pressable, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [activePlayer,setActivePlayer] = useState('X')
  const [markers, setMarkers] = useState([
    null,null,null,
    null,null,null,
    null,null,null
  ])
  const markPosition = (position: any) =>{
      if(!markers[position]){
      let temp: any = [...markers]
      temp[position] = activePlayer
      setMarkers(temp)
      if(activePlayer === 'X'){
        setActivePlayer('O')
      }else{
        setActivePlayer('X')
      }
    }
  }

  const resetMarkers = ()=>{
    setMarkers([
      null,null,null,
      null,null,null,
      null,null,null
    ])
    setActivePlayer('X')
  }
  const checkWinner = (squares:any) =>{
    const winningPositions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
    for(let i = 0; i<winningPositions.length; i++){
      const [a,b,c] = winningPositions[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    checkDraw(markers)
    return null
  }
  const checkDraw = ((markers:any)=>{
    let emptyCells=9
    for(let i = 0; i<markers.length; i++ ){
        if(markers[i])
          emptyCells--;
    }
    if(emptyCells == 0){
      alert('DRAW')
      resetMarkers()
    }
  })
  useEffect(()=>{
    const winner = checkWinner(markers)
    if(winner === 'X'){
      alert('Player X won!')
      resetMarkers()
    }else if(winner === 'O'){
      alert('Player O won!')
      resetMarkers()
    }
    
  },[markers])
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.jpeg')} resizeMode="cover" style={styles.imagebg}>
        <Text style={styles.playerText}>{activePlayer}'s turn </Text>
        <View style={styles.map}> 
          <Pressable style ={styles.cell} onPress ={() =>markPosition(0)}>
            {markers[0] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[0] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(1)}>
            {markers[1] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[1] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(2)}>
            {markers[2] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[2] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(3)}>
            {markers[3] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[3] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(4)}>
            {markers[4] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[4] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(5)}>
            {markers[5] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[5] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(6)}>
            {markers[6] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[6] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}          
            </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(7)}>
            {markers[7] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[7] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}
          </Pressable>
          <Pressable style ={styles.cell} onPress ={() =>markPosition(8)}>
            {markers[8] === 'X' && <Image source={require('./assets/x.png')} style={styles.shape}/>}
            {markers[8] === 'O' && <Image source={require('./assets/o.png')} style={styles.shape}/>}          
            </Pressable>
        </View>
        <View>
        <Pressable style ={styles.cell} onPress ={resetMarkers}>
            <Image source={require('./assets/reload.png')} style={styles.reloadBbtn}/>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagebg:{
    width: '100%',
    height: '100%',
  },
  playerText : {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
    marginTop: 50,
    backgroundColor: '#000000c0',
  },
  map:{
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 140,
  },
  cell:{
    width: windowWidth/3.2,
    height: windowWidth/3.2,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shape: {
    width: 95,
    height: 95,
  },
  reloadBbtn: {
    marginTop: 150,
    width: 50,
    height: 50,
  },
});

export default App