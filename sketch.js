let userinput;

function setup() {
  createCanvas(400, 400);
  
  
  userinput = select("#startnode");
  //userinput.changed(gowiki);
  var an = is_valid_link("Albert Einstein", "fr");
  console.log(an);
};
  



function draw() {
  background(220);
}