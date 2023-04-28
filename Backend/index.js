import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

app.use("/", (req, res, next) => {
    console.log(`\t A request came in! Method: ${req.method}`);
    next()
})

app.get("/getData", (req,res) => {
    let number = generateRandomNumber()
    if (number >= 50) {
        res.status(200).json({response: data})
    }
    else {
        res.status(500).json({response: "Sorry there is some problem from our part, try again later."})
    }
})

app.post("/postSubmitForm", (req,res) => {
    res.status(201).json({response: "Form have been registered successfully!"})
})

app.listen(3001, () => { console.log("App is running at port: 3001") })


let data = [
    {
        name: "Test Elek",
        company: "Tesco Pluss",
        position_level: 3,
        salary: 300000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 3,
        plans_to_switch_job_but_stays_in_the_country: 4,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Rich Richard",
        company: "Legal Laundry",
        position_level: 1,
        salary: 600000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Legal Lorand",
        company: "Legal Laundry",
        position_level: 5,
        salary: 15000000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Cheeslover Charly",
        company: "Street Food Bistro",
        position_level: 2,
        salary: 250000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 2,
        plans_to_switch_job_but_stays_in_the_country: 3,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Poor Paul",
        company: "Tesco Pluss",
        position_level: 1,
        salary: 120000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 1,
        plans_to_switch_job_but_stays_in_the_country: 5,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Toxic Tiffany",
        company: "Tesco Pluss",
        position_level: 2,
        salary: 150000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 1,
        plans_to_switch_job_but_stays_in_the_country: 5,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Flaming Philip",
        company: "Tesco Pluss",
        position_level: 2,
        salary: 170000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 2,
        plans_to_switch_job_but_stays_in_the_country: 4,
        plans_to_move_to_another_country: 4
    },
    {
        name: "Hacker Hermandez",
        company: "Legal Laundry",
        position_level: 1,
        salary: 600000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Suspicious Sasha",
        company: "Legal Laundry",
        position_level: 1,
        salary: 600000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Big Bobb",
        company: "Street Food Bistro",
        position_level: 3,
        salary: 280000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 4,
        plans_to_switch_job_but_stays_in_the_country: 2,
        plans_to_move_to_another_country: 3
    },
    {
        name: "Managger Merlin",
        company: "Street Food Bistro",
        position_level: 4,
        salary: 400000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 4,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 2
    },
    {
        name: "Lawyer Saul",
        company: "Legal Laundry",
        position_level: 1,
        salary: 1000000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Deptcollector Dave",
        company: "Legal Laundry",
        position_level: 1,
        salary: 800000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Laser Lucy",
        company: "Street Food Bistro",
        position_level: 3,
        salary: 280000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 3,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 5
    },
    {
        name: "Burgerflipper Barney",
        company: "Street Food Bistro",
        position_level: 2,
        salary: 240000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 2,
        plans_to_switch_job_but_stays_in_the_country: 3,
        plans_to_move_to_another_country: 3
    },
    {
        name: "Minimalwage Max",
        company: "Tesco Pluss",
        position_level: 2,
        salary: 140000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 2,
        plans_to_switch_job_but_stays_in_the_country: 5,
        plans_to_move_to_another_country: 1
    },
    {
        name: "Hardworking Harry",
        company: "Tesco Pluss",
        position_level: 3,
        salary: 180000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 3,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 2
    },
    {
        name: "Statistic Sarah",
        company: "Tesco Pluss",
        position_level: 1,
        salary: 700000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
    {
        name: "",
        company: "Tesco Pluss",
        position_level: 1,
        salary: 90000,
        // extra_benefits: [1, 6, 8],
        likes_working_here: 5,
        plans_to_switch_job_but_stays_in_the_country: 1,
        plans_to_move_to_another_country: 1
    },
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



