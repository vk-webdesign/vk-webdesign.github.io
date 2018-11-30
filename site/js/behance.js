var cnv;
var img;
 //object1 "projects", random select object in array, covers, max_808. 

var img__result;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function preload() {
    loadJSON('https://www.behance.net/v2/projects/?api_key=2X2KbdNdGiu8CUCPA5qCh3RW6di15qo6');
}

function setup() {
    cnv = createCanvas(400, 800);
    centerCanvas();
    var i = random(0,48);
    img__result = img.projects[i].covers.max_808;
    img = createImg(img__result); 
}

function windowResized() {
    centerCanvas();
}

function gotData(data) {
    print(data);
    pic = data;
    var i = random(0, 48); 
    img__result = (img__result.projects[i].covers.max_808);
    img = createImg(img__result); 
}

function draw() {
    background(12,12,12);
    fill(20,50,100);
    ellipse(10,10,50);
    if (img) {
        ellipse(width/2, height/2, 50)
        image(img__result, 100, 100);
    }
}