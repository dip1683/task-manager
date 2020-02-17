require('../src/db/mongoose')
const Task =  require('../src/models/task')

// Task.findByIdAndDelete('5dabe37d30a9a81efc55683a').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteByIdandCount = async (id,completed) =>{
    const user = await Task.findByIdAndDelete(id)
    const count =  await Task.countDocuments({completed:completed})

    return output = {
        user: user,
        count: count
    }
}

deleteByIdandCount('5dac218455a4193a34fec75e', completed = false).then((output)=>{
    console.log(output)
}).catch((e)=>{
    console.log(e)
})