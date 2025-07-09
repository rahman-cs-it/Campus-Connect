import express, { json } from 'express';
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
app.use(json());
app.use(cors());
import { json as _json } from 'body-parser';
app.use(_json())


const PORT = process.env.PORT
const URI = process.env.URI
// Connection
import { connection } from "./Config/Conn";
connection(URI)    // function call

app.listen(PORT ,() => {
    console.log(`Backend Started on port ${PORT}` )
});

// Importing Routes
import facultyRoute from "./Routes/FacultyRegistrationRoutes";
app.use("/api/fac",facultyRoute)

import AdmissionRoute from "./Routes/AdmissionRoutes";
app.use("/api/stu",AdmissionRoute)

import AssignmentRoute from "./Routes/AssignmentRoutes";
app.use("/api/ass",AssignmentRoute)

import NoticeRoute from "./Routes/NoticeRoute";
app.use("/api/notice",NoticeRoute)

import attendenceRoute from "./Routes/AttendenceRoute";
app.use("/api/att",attendenceRoute)

