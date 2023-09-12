const person = [
    {
        "name": "Taylor Bright",
        "age": 0
    },
    {
        "name": "Kaylor William",
        "age": 2
    },
    {
        "name": "Nico Harding",
        "age": 2
    },
    {
        "name": "August Case",
        "age": 5
    },
    {
        "name": "Rory Sexton",
        "age": 10
    }
];

let personData = "";
person.forEach(function (item, index) {
    personData += `<tr>
        <th>${index + 1}</th>
        <td>${item.name}</td>
        <td>${item.age}</td>
    </tr>`;
});

console.log('personData', personData);


document.getElementById("userInfo").innerHTML = personData;
