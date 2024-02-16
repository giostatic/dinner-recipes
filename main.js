let recipeLinks = 
    ["https://giostatic.github.io/odin-recipes/recipes/ribs.html",
    "https://thecozycook.com/mushroom-chicken/",

    ];

// let goSomewhere= (recipes) => {
//     let recipes = recipeLinks[Math.floor(Math.random()*recipeLinks.length)];
//     window.location = recipes; //redirects the button
// };

let button = document.getElementById("button");
button.addEventListener("click", goSomewhere);

function goSomewhere() {
    let recipes = recipeLinks[Math.floor(Math.random()*recipeLinks.length)];
    window.location = recipes; //redirects the button
    document.getElementById("button").innerHTML = "YOU CLICKED ME!";
}