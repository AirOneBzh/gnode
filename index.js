const options = { /* ... */ };
const io = require("socket.io")(options);

var id
io.on('connection', (socket) => {
  // detect header path room
  // -> send room info
  // renvoi sur page vide
  // sinon demande infos
  socket.on('login',msg=>{
    id = addPlayer(msg,socket.id)
    io.emit('event','nouveau joueur: '+msg)
  })
  socket.on('listRooms',msg=>{
    io.emit('listRooms',listRooms())
  })
  socket.on('joinRoom',msg=>{
    playerJoin(id,msg)
    io.emit('joinRoom',getroom(msg))
  })
});


io.listen(3000);
// nb joueurs + nom room
// demande noms joueurs
// génère liste de cartes (complots 1 et 2) lg?
// envoie une carte à chacun
// tour a tour pioche et poser une carte, nombre de carte en pioche et tas dans la room le reste en privé

var players=[]
var rooms=[]
var sids=[]


function getId(str){
   return players.find(element => element.nom == str).id
}

function getSid(id){
   return sids.filter(element => element.id = id).map(f => f.sid)
}

function addSid(id, sid){
   sids.push({id:id,sid:sid})
}

function addPlayer(name,id){
   players.push({nom:name,id:id})
}

function removePlayer(id){
   
}

function playerGetRooms(id){
   return rooms.filter(element => element.id == id).map(element => element.room)
}

function listRooms(){
   return rooms
}

function playerJoin(id,title){

}

function playerLeaves(){

}

function getRoom(title){
   var ids = rooms.filter(element => element.room == title).map(element => element.id)
   return ids.map(element => {
      return players.find(f => f.id == element).id
   })
}


console.log(getRoom("air"))