

var body = document.getElementsByTagName("body");
var source = "";
var imgNumber = getRandomInt(3);
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
function makeImg() {
    $(".computer-img").append(`<img id="com-img" src='../imgs/${imgNumber}.jpg' alt=''>`);
};
function choosingImage() {
    var input = document.getElementById("dropdown").value;
    if (input == "rock") {
        source = 1
        $(".player-img").append(`<img id="player-img" src='../imgs/${source}.jpg' alt=''>`);
    } else if (input == "scissors") {
        source = 4
        $(".player-img").append(`<img id="player-img" src='../imgs/${source}.jpg' alt=''>`);
    } else if (input == "paper") {
        source = 2
        $(".player-img").append(`<img id="player-img" src='../imgs/${source}.jpg' alt=''>`);
    };
};
function whenPlayClicked() {
    choosingImage();
    makeImg();
    newStyles();
}
function newStyles() {
    $(".btn-container").append(`
                    <div id="play">
                        <nav>
                            <ul>
                                <li onclick="showResult()">
                                    See Results!
                                    <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </nav>
                    </div>`);
    $("#play").remove();

}


function showResult() {
    var child = document.getElementById("main-container");
    body[0].removeChild(child);
    body[0].style.background = "rgb(100, 99, 99)";
    var player = `${source}.jpg`;
    var computer = `${imgNumber}.jpg`;
    var img = "";
    var text = "";
    if (player == "4.jpg" && computer == "1.jpg") {
        text = "sorry, you lose the game. Better luck next time";
        img = "sad.jpg";
    } else if (player == "1.jpg" && computer == "0.jpg") {//rock vs scissors
        img = "happy.jpg";
        text = "YAY, you won the game!!";
    } else if (player == "2.jpg" && computer == "1.jpg") {//paper vs rock
        img = "happy.jpg";
        text = "YAY, you won the game!!";
    } else if (player == "1.jpg" && computer == "2.jpg") {//rock vs paper
        img = "sad.jpg";
        text = "sorry, you lose the game. Better luck next time";
    } else if (player == "4.jpg" && computer == "2.jpg") {//scissors vs paper
        img = "happy.jpg";
        text = "YAY, you won the game!!";
    } else if (player == "2.jpg" && computer == "0.jpg") {//paper vs scissors
        img = "sad.jpg";
        text = "sorry, you lose the game. Better luck next time";
    } else if (player == "1.jpg" && computer == "1.jpg") {// rock vs rock
        img = "draw.jpg";
        text = "Its a tie, Play again to see who is the tiebreaker";
    } else if (player == "4.jpg" && computer == "0.jpg") {// scissors vs scissors
        text = "Its a tie, Play again to see who is the tiebreaker";
        img = "draw.jpg";
    } else if (player == "2.jpg" && computer == "2.jpg") {//paper vs paper
        img = "draw.jpg";
        text = "Its a tie, Play again to see who is the tiebreaker";
    }
    
    $(body).append(`
                <div class="new-container">
                    <div class="flex-layout">
                        <div class="text-img-div">
                            <h1 id="new-h1">${text}</h1><br>
                            <div class="resultImg-con">
                                <img class="new-img" src="../imgs/${img}" alt=""> <br>
                            </div>
                        </div>
                        <div>
                            <nav>
                                <ul>
                                    <li onclick="loadBackMainPage()">
                                        Go Back To Main Page
                                        <span></span><span></span><span></span><span></span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>`);
}
function loadBackMainPage() {
    window.location.reload();
};
function dropdown() {
    $(function () {
        $("#dropdown").selectmenu();
    });
}
dropdown()

