 // Initialize Firebase
var config = {
    apiKey: "AIzaSyCqlANyM6vKUKuwvf9QfBdiBm569swMryI",
    authDomain: "collaborativesketch.firebaseapp.com",
    databaseURL: "https://collaborativesketch.firebaseio.com",
    storageBucket: "collaborativesketch.appspot.com",
    messagingSenderId: "1045683636343"
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup(){
    createCanvas(400, 400);
    background(255);//white
    fill(0)//black
    pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
    
}

function draw(){
    background(255);
    
    for(var i=0; i<points.length; i++){
        var point = points[i];
        ellipse(point.x,point.y,5,5);
    }
}


