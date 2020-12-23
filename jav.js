const cars = [
    {
        id: 1,
        brand: "kia",
        model: "Rio",
        colour: "gray",
        age: 2020,
        price: "28.000"
    },
    {
        id: 2,
        brand: "Mercedes Benz",
        model: "class A",
        colour: "White",
        age: 2021,
        price: "137.000"
    },
    {
        id: 3,
        brand: "Mazda",
        model: "Grand touring",
        colour: "red",
        age: 2017,
        price: "86.000"
    },
    {
        id: 4,
        brand: "Volkswagen",
        model: "Gol trendline",
        colour: "White",
        age: 2020,
        price: "40.000"
    },
    {
        id: 5,
        brand: "Kia",
        model: "Rio 2",
        colour: "blue",
        age: 2019,
        price: "32.000"
    },
]
function printCars () {
    const carsTable = document.getElementById ('cars-table');
    let html = " ";
    cars.forEach ((cars) => {
       html += `<tr><td>${cars.brand}</td>
                    <td>${cars.model}</td>
                    <td>${cars.colour}</td>
                    <td>${cars.age}</td>
                    <td>${cars.price}</td>
                    <td><button onclick="deleteCars(${cars.id})" class="btn btn-danger">
                            Eliminar
                        </button></td>
                </tr>`;
    });
    carsTable.innerHTML = html;
}
function deleteCars(id) {
    const index = cars.findIndex((cars) => cars.id == id);
    cars.splice (index, 1);
    printCars();
}
function addCars () {
    const inputBrand = document.getElementById ('brand');
    const brand = inputBrand.value;
    const inputModel = document.getElementById ('model');
    const model = inputModel.value;
    const inputColour = document.getElementById ('colour');
    const colour = inputColour.value;
    const inputAge = document.getElementById ('age');
    const age = inputAge.value;
    const inputPrice = document.getElementById ('price');
    const price = inputPrice.value;
    const id = cars[cars.length - 1] + 1;
    const newCar = {
        id:id,
        brand: brand,
        model: model,
        colour: colour,
        age: age,
        price: price,
    };
    cars.push (newCar);
    printCars();
    document.getElementById ("form-cars").reset();
}
printCars();
