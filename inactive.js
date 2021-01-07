const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    var currentTime=new Date().getTime();
    var time = Math.round(currentTime / 60 * 1000);
    var userTime=Math.round(user.lastActivity/60 *1000);
    if (time - userTime > 1) {
        inactiveFirstStage()
    } else if (time - userTime > 3) {
        inactiveSecondStage()
    } if (time - userTime > 5) {
        inactiveThirdStage()
    }
}, 1000);
