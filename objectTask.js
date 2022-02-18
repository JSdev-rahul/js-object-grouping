let data = [

    {
        "id": "1",
        "name": "rahul",
        "class": "10",
    },
    {
        "id": "2",
        "name": "vikas",
        "class": "12",
    },
    {
        "id": "2",
        "name": "arun",
        "class": "12",
    },
    {
        "id": "1",
        "name": "rahul",
        "class": "13",
    }
]
const result = {}
data.map((value) => {

    var value_of_object = Object.values(value)
    for (const val of value_of_object)  //jisko bhi key anani hai uska first positiob pr hona jaruri
    {
        console.log(val) // yha pr  phli wli value hi  milgi hmesha
        if (!result[val])
            result[val] = []
            delete value.id  //ye nhi denge to id bhi  object me show hogi
             result[val].push(value)
        return result
    }
})
console.log(result)