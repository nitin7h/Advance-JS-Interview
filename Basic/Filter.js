const data = [4, 8, 9, 10, 2, 16, 47]

const filterData = data.filter((items) => {
    return items !== 10
})

console.log("filterData : ", filterData);