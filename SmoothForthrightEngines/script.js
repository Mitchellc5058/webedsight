

const bg ={};
bg.imageOne;
bg.imageTwo;
bg.immageThree;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function getThingFromList(list) {
  const thingIndex = list.length;
  const thing = list[getRandomInt(thingIndex)];
  return thing;
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function allTogether(x) {
  shuffleArray(x);
  let y = x.pop();
  shuffleArray(x)
  return y;
}

function allTogetherBW(x) {
  shuffleArray(x);
  let y = x.pop();
  shuffleArray(x)
  return y;
}


let bgList = ["img/thumbnail/basketball.jpg","img/thumbnail/bird.jpg","img/thumbnail/green.jpg","img/thumbnail/rose.jpg","img/thumbnail/sand.jpg","img/thumbnail/skyline.jpg","img/thumbnail/train.jpg"];

let imageOne = allTogether(bgList);
let imageTwo =  allTogether(bgList);
let imageThree =  allTogether(bgList);
let imageFour = allTogether(bgList);


bg.imageOne = "<div class='test' style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageOne+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Home</h3></div>"

bg.imageTwo = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageTwo+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>About</h3></div>"

bg.imageThree = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageThree+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Contact</h3></div>"

bg.imageFour = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageFour+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Button</h3></div>"
