require('../src/db/mongoose')
const User = require('../src/models/user')

//5daad48e2b3a571f5c592808

// User.findByIdAndUpdate('5daaa8f377399b152ca0a7dd',{age : 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age : 1})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const updateByIdandCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age:age})
    const count = await User.countDocuments({age : age})
    return {user :user,
    count:count}
}

updateByIdandCount('5daaa8f377399b152ca0a7dd', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

