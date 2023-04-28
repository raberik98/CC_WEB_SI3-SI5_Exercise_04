import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())

app.get("/getData", (req,res) => {

})


let data = [
    {
        name: "Test Elek",
        company: "Tesco Pluss",
        position_level: 3,
        salary: 300000,
        extra_benefits: [1, 6, 8],
        likes_working_here: 3,
        likely_will_stay_here: 4,
        plans_to_move_to_another_country: 1
    }
]

let extra_benefits = [
    {
        id: 1,
        benefit: "free health insurance"
    },
    {
        id: 2,
        benefit: "company phone"
    },
    {
        id: 3,
        benefit: "company laptop"
    },
    {
        id: 4,
        benefit: "company car"
    },
    {
        id: 5,
        benefit: "company discount"
    },
    {
        id: 6,
        benefit: "SZEP card"
    },
    {
        id: 7,
        benefit: "payed gas"
    },
    {
        id: 8,
        benefit: "free dentist"
    },
]



app.listen(3001, () => { console.log("App is running at port: 3001") })