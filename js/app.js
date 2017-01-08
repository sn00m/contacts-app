window.addEventListener('load', function() {
    for (let i = 0; i < food.length; i++) {
        showFood(food[i]);
    };

    addFood(food);
});

let food = [
    {
        foodName: "Potatoes",
    },
        {
        foodName: "Steak Tar Tar",
    },
        {
        foodName: "Pickled Herring",
    },
        {
        foodName: "Canned Enchiladas",
    },
        {
        foodName: "Broccoli",
    },
];

function showFood(food) {
    let parent = document.querySelector('#show-food ul');
    let child = document.createElement('li');
    let template = document.querySelector('#food-template');

    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: food.foodName,
    });

    parent.appendChild(child);
}

function addFood(food) {
    let input = document.querySelector('#add-food-item');
    
    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', function() {
        console.log('hi');

    });
}