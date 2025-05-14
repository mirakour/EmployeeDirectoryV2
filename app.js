import express from "express"
const app = express()

import employeeRouter from "./api/employees.js"

// Middleware to parse JSON
app.use(express.json())

// Root route
app.get("/", (req, res) => {
  res.send("Hello employees!")
})

// Mount /employees router
app.use("/employees", employeeRouter)

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err)
  res.status(500).send("An unexpected error occurred.")
})

export default app