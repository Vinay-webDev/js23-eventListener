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
/*
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
} */

/* in this case while having useCapture set it to true
 the events works it's way from out to the inside the best 
 to visualize this is to have something called stopPropagation()*/
 /*
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
        // remember we need use stopPrapagation before this
        
        view.style.backgroundColor = "green";
    }, false)
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "yellow";
    }, false)
    h2.addEventListener("click", (event) => {
        event.stopPropagation();
        event.target.textContent = "clicked";
        //h2.style.color = "black";
    }, false)
} */
/* we have stopped the event propagation exactly at section and if you notice while having useCapture set it to true it'll prevent event bubbling and the way the event propagation works it's way from outer most element to the inner most element */
// let's try it the other way (put stopPrapagation at h2 and set useCapture to default (false));
/* now the event propagation stopped exactly at h2 element and we also prevented event bubbling */ 
/* so as we can say whenever we use default false useCapture then
the event propagation works it's way from in to the out and if we 
use true as useCapture then it works it's way from out the in **/
/* useCapture = false (default) ===>>> in to the out 
   useCapture = true ===>>> out to the in */
/////////////////////////////////////////////////////////////////
// now let's look at the event.target 
/* 
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
        
        event.target.style.backgroundColor = "green";
    })
    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "yellow";
        
    })
    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked";
    })
} */
/* event.target is not about what the event we added 
it's about what the target is */ 
/* 1.===>> as you can see when I clicked on h2 the text and
the backgroundColor of h2 only changed to "green" even though
we are not able to see. it actually first changed to "yellow" then 
it changed to "green" 
2. when i clicked div on same happens
3. clicked on section  
4. clicked on section then div then h2*/ 
//////////////////////////////////////////////////////////////////////////////////////////////
// how to add classes 
// classLists
/* document.addEventListener("readystatechange", (event) => {
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
        view.classList.toggle("green");
        view.classList.toggle("darkBlue");
    }, false)
    div.addEventListener("click", (event) => {
        div.classList.toggle("yellow");
    }, false)
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View"? (event.target.textContent = "clicked"):
                                  (event.target.textContent = "My 2n View");
    }, false)
} */
/* we konw we can easily toggle the backgroundColors but how to toggle
text in h2??? 
we can't just toggle the textContent directly like we did it with 
backgroundColor to do that we need to use some code with ternary
as you can notice we can't just leave to strings ("My 2nd view" and "clicked")
we need that with event.target.textContent*/
/* here it's not working bcz I had h2 "My 2nd View" in my ternary 
 I have "My 2nd view" so that's what causing problem here!!!! 
 idk what f happed it's only working first time!!! **/

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
        view.classList.toggle("green");
        view.classList.toggle("darkblue");
    })
    div.addEventListener("click", (event) => {
        div.classList.toggle("yellow");
    })
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" ? 
                    (event.target.textContent =  "clicked" ):
                    (event.target.textContent = "My 2nd View");
    })
    // let's move on to our next example
    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
        /* we noticed that height is changing back to original
        size let's if we can toggle between height100 and 
        original height */
        /* it only changes when we mouseover again this 
        not kinda of a thing we would like to have */
        // so let's add another event
    })
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })
    // so this should work fine now!
}















