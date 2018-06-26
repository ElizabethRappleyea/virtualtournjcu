var images = [
    "#libraryWalk",
    "#whatever",
];

var messages = [
    "Hello World",
    "ok"
];


function init(){
    
    $ = (queryString) => document.querySelector(queryString);

    var index = 0;
    var clicked = false;        
    var sceneEl = document.querySelector('a-scene');
    //alert(sceneEl);
    var plane1text = $('#stairsPlaneText');
    var env1 = $('#environment');
    var environment1 = (env1.getAttribute('src'));


    alert(plane1text.getAttribute('value'));
    //plane1text.setAttribute('value', 'Hello again!');

    /*if(env1.getAttribute('src') == '#JFKentrance')
    {
        plane1text.setAttribute('value', 'Hello again!');
        alert(plane1text.getAttribute('value'));
    }*/

    var stairsPlane = $('#something');
    
    stairsPlane.addEventListener('click', function() {
        if(clicked == false){
            clicked=true;
        }
        else if(env1.getAttribute('src') == images[index]){
            clicked=false;
            plane1text.setAttribute("value", messages[index]);
            index++;
        }
    });

}