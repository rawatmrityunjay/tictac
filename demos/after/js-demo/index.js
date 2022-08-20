// function on_division_click(){



// }
let counter=0;
window.onload = function() {
    var div=document.getElementsByClassName("left");
    [].forEach.call(div,element => {
        element.addEventListener('click', function handleClick(event) {
            if(counter==9)
            {
                document.getElementById("game_over").innerHTML  = "Game Over";
                return;
            }
           
            else{counter+=1;
                if(counter%2!=0)
                {
                event.target.classList.add('o','clicked');
                // event.target.classList.remove('x');
            }
                else{
                    // event.target.classList.remove('o');
                    event.target.classList.add('x','clicked');}}
 
          });    
    });
    
};


 // 1. if we click on same division again, it should show message (You cannot change your previous move) 
            // and return. Dont increase counter value
            // 2. check the combination everytime ( make a array for each type of move)
            // 3. make a game over loader (visible on game over only)

const winning_combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
const player_1 = 'x'
const player_2 = 'o'