console.log("this is the alarm clock exercise tutorial 54");

const alarmsubmit = document.getElementById("alarmsubmit");
alarmsubmit.addEventListener("click", setalarm);

var audio=new Audio('https://interctive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function for ringing the alarm 
function ringbell(){
    audio.play();
}


// function for set alarm 
function setalarm(e) {
    e.preventDefault();
    const alarm = document.getElementById("alarm");
    const alarmDate = new Date(alarm.value);
    console.log(`your alarm is set ${alarmDate} `);

    now = new Date();

    let settoalarm = alarmDate - now;
    console.log(settoalarm);

    if (settoalarm >= 0) {

        setTimeout(() => {
console.log("ringing now ");
            ringbell();

        }, settoalarm);
    }
     else {

    }
}