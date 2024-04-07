import exrpess, { json } from 'express'


const app = exrpess()

const PORT =5000

app.get("/Burger",(req,res)=>{
    res.json({
        name:"burger",
        Price:"50"
    })
});

app.get("/Pizza", (req,res)=>{
    res.json({
        name: "Pizza",
        Price: "100"
    })
})

app.listen(PORT, ()=>{
    console.log('server is running o ${PORT}');

});