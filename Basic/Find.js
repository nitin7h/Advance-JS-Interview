// const data = [5, 8, 9, 5, 41, 6, 5, 7]

// const newData = data.find((items) => {
//     console.log("items : ", items);

//     return items === 7

// })

// console.log("newData : ", newData);


const data = [{
        id: 1,
        name: "Nitin"
    },
    {
        id: 2,
        name: "Kumar"
    },
    {
        id: 3,
        name: "Rahul"
    },
    {
        id: 4,
        name: "Yadav"
    },
    {
        id: 5,
        name: "AK"
    },
]



const dataFind = data.find((item) => item.id === 3)
console.log("dataFind : ", dataFind);
const dataFindIndex = data.findIndex((item) => item.id === 3)
console.log("dataFindIndex : ", dataFindIndex);