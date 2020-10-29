window.onload = run;
/**
 * the position of the bird relative to the left side of the page
 */
let left = 0;

/** starts the program on page load. */
function run(){
    fly();
}
/** sets an interval to make the bird "fly" */
function fly(){
    setInterval(MoveBirdToTheRight, 5)
}
   /** moves the bird small step to the right. */
function MoveBirdToTheRight(){
    // feth teh bird from html
    const bird = document.querySelector('img');
    //update position
    left += 0.5;
    // render position
    bird.style.left = left + '%';
}
