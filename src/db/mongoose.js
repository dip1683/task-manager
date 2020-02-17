const mongoose =  require('mongoose')
//const validator =  require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify:false,
  useUnifiedTopology:true  
})



// const newTask = new Task({
//     //description:'  buy milk    '
// })

// newTask.save().then(()=>{
//     console.log('success' + newTask)
// }).catch((error)=>{
//     console.log('failure' + error)
// })




// const me = new User({
//      name: '   druhan bhowmik    ',
//      email:'DRuhan@gmail.com    ',
//      password: ' PASSWORD      '
// })

// me.save().then(()=>{
//     console.log('Success' + me)
// }).catch((error)=>{
//     console.log("Error" + error)
// })



