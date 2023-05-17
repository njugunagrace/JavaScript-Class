const work=()=>{
    console.log("let's work");
}
work();

const reminder=()=>{
    console.log("Please attend the meeting");
}
setTimeout(reminder,4000);           //4 min*1000 miliseconds
setInterval(reminder,1000)            //calls fun after every 1 sec

const takeBreak=()=>{
    console.log('please rest');
}
takeBreak();
