function RSP(){
 this.check = (player_input) => {
    if(player_input === "scissors" ){
      return 'pc win';
    }else if (player_input === "rock" ){
      return 'Tie';
    }else if (player_input === "paper"){
      return "player win";
    }else{ 
      return "Correct your input"
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RSP;
}


























