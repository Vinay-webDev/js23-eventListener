// eventListeners 

const view2 = document.querySelector("#view2");
const div = view2.querySelector("div");
const h2 = div.querySelector("h2");

// syntax = addEventListener(event, function, useCapture);

const doSomething = () => {
    alert("doing something!");
}
// we need add eventListener wherever we are interacting in this case it h2
h2.addEventListener("click", doSomething, false);
// fasle is a default useCapture;









