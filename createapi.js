const express = require('express')
const app = express()
const port = process.env.PORT ||3000;
require("./db/connect")
const Student = require("./models/students")

app.use(express.json());

const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json' , 'utf-8'));
// const Employees = data.Employees;





app.post('/students', async(req, res) => {
      try{
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser);
      }catch(e){
    res.status(400).send(e)
      }
    //   console.log(req.body);
    //   const user = new Student(req.body);
    // user.save().then(()=>{
    //      res.status(201).send(user);
    // }).catch((e)=>{
    //     res.status(400).send(e);
    // })
  })


  // get data 
  app.get('/students', async(req, res)=>{
    try{
        const studentsData= await Student.find()
        res.send(studentsData)
    }catch (e){
    res.send(e)
    }
})

// get id of particular one student
app.get('/students/:id', async(req, res)=>{
   
    try{
        const id = req.params.id;
        console.log(id)
        const studentData = await Student.findOne({_id:id})
        res.send(studentData)
        console.log(studentData)
    }catch(e){
        res.send(e)
    }
})

// delete the students by it id

app.delete('/students/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const deleteStudent= await Student.deleteOne({_id:id});
        res.send(deleteStudent);
        console.log(deleteStudent)

    }catch(e){
       res.send(e)
    }
})


app.listen(port, ()=>{
    console.log(`Example app listeniong on port ${port}`)
})