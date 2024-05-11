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
// let's look into an event example which  also makes it safer to start working with document object model
/*
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
} */

// let's look into an event that also makes safer to start working with DOM (document object model) or web page or web app
/*
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");  */
/*
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        // to kick-off our web app or web page we have initApp() or init()
        initApp();
        // now i need to define this initApp() 
    }
})
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    // what I'm gonna do is now I'm gonna add eventListener to each of these variables 
    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "green";
    })
    
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "yellow";
    })

    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked";
        h2.style.color = "black";
    })
} */
// worth noticing I'm only clicking on the h2 element but the entire section is changed why?

/* It's because of ***event bubbling*** useCapture which is set false default 
even though we click only h2 element still which is inside a div which bubbles up and triggers the event in div and then triggers the event in section. as we see it works it's way from inside to the = event bubbling */ 
// if we use useCapture set it to true the things will change
// imma work it again for practice
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
})
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "green";
    }, true)
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "yellow";
    }, true)
    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked";
        h2.style.color = "black";
    }, true)
}
/* in this case while having useCapture set it to true the events works it's way from out to the inside the best to visualize this is to have something called stopPropagation()*/






