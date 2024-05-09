// eventListeners 
/*
const view2 = document.querySelector("#view2");
const div = view2.querySelector("div");
const h2 = div.querySelector("h2");
*/
// syntax = addEventListener(event, function, useCapture);
/*
const doSomething = () => {
    alert("doing something!");
}
// we need add eventListener wherever we are interacting in this case it h2
// fasle is a default useCapture;
h2.addEventListener("click", doSomething, false);
// you can just ignore that false (because false default useCapture)
h2.addEventListener("click", doSomething);

// how to remove an eventListner incase if don't want it 
h2.removeEventListener("click", doSomething, false);
// now if we click on h2 element nothing happens because we are adding an eventListener and immediately removing it *** remember we can't remove if we don't have name of the function *** */

// let's add annamynous function to our eventListener
/*
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "clicked😂";
}) */

// few more examples
// let's look into an event example which is also makes it safer to start working with document object model

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
        // also we can initiate app method initApp() to load all our other events
    } 
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    });
    
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "green";
    });

    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked";
    })
}






















