require('dotenv').config();
const express = require('express');
const server = express();

const port = process.env.PORT || 5000;

server.listen(port, () =>
console.log('Server running on http://localhost:5000 !!'));

server.use(express.json());

let jobs = [
{id:1, company: 'Strategic Employment Partners (SEP) Company Location ', dateApplied: 'November 14th'}, 
{id:2, company: 'Podium', dateApplied: 'November 14th'}, 
{id:3, company: 'Apex Systems', dateApplied: 'November 14th'}, 
{id:4, company: '3form', dateApplied: 'November 14th'}, 
{id:5, company: 'Monnit', dateApplied: 'November 14th'}, 
{id:6, company: 'Go Farther', dateApplied: 'November 14th'}, 
{id:7, company: 'Thesis', dateApplied: 'November 14th'}, 
{id:8, company: 'Trilithon', dateApplied: 'November 14th'}, 
{id:9, company: 'Blerp', dateApplied: 'November 14th'}, 
{id:10, company: 'PrinterLogic', dateApplied: 'November 14th'}, 
{id:11, company: 'Start Studio', dateApplied: 'November 14th'}, 
{id:12, company: 'Tukios', dateApplied: 'November 14th'}, 
{id:13, company: 'NextME', dateApplied: 'November 14th'}, 
{id:14, company: 'Floodlight Design', dateApplied: 'November 14th'}, 
{id:15, company: 'XEL IT Solutions', dateApplied: 'November 14th'}, 
{id:16, company: 'PenBay Media', dateApplied: 'November 14th'}, 
{id:17, company: 'Gun.io', dateApplied: 'November 14th'}, 
{id:18, company: 'SimpleCitizen', dateApplied: 'November 14th'}, 
{id:19, company: 'ooda', dateApplied: 'November 14th'}, 
{id:20, company: 'Clearview', dateApplied: 'November 14th'}, 
{id:21, company: 'Depth Interactive', dateApplied: 'November 14th'}, 
{id:22, company: 'Revature', dateApplied: 'November 14th'}, 
{id:23, company: 'Cardinal Financial', dateApplied: 'November 14th'}, 
{id:24, company: 'Tesla', dateApplied: 'November 14th'}, 
{id:25, company: 'Crossroads technology', dateApplied: 'November 14th'}, 
{id:26, company: 'Homie', dateApplied: 'November 14th'}, 
{id:27, company: 'Felivine', dateApplied: 'November 14th'}, 
{id:28, company: 'CaptiveAire', dateApplied: 'November 14th'}, 
{id:29, company: 'Tek Stystems', dateApplied: 'November 14th'}, 
{id:30, company: 'Chatbooks', dateApplied: 'November 14th'}, 
{id:31, company: 'Myer & Myer Consulting', dateApplied: 'November 14th'}, 
{id:32, company: 'Opiniion', dateApplied: 'November 14th'}, 
{id:33, company: 'AmerisourceBergen', dateApplied: 'November 14th'}, 
{id:34, company: 'Santa Cruz Bicycles', dateApplied: 'November 14th'}, 
{id:35, company: 'Mind Fire', dateApplied: 'November 14th'}, 
{id:36, company: 'EFileCabinent', dateApplied: 'November 18th'}, 
{id:37, company: 'Workman Success Systems', dateApplied: 'November 18th'}
]
let id = 37;
const getID = () =>{
    id++;
    return id;
}

server.get('/api/jobs', (req, res) =>{
    res.status(200).send(jobs);
})

server.post('/api/jobs', (req, res) =>{
    if(!req.body) res.send('invalid data sent');
    if(!req.body.company) res.send('company is required');
    if(!req.body.dateApplied) res.send('dateApplied is required');
    const job = {id: getID(),...req.body}
    jobs = [...jobs, job];
    res.send(jobs);
})

server.delete('/api/jobs', (req, res) =>{
    if(!req.body) res.send('invalid data sent');
    if(!req.body.id) res.send('id is required');
    jobs = jobs.filter(job => job.id != req.body.id);
    res.send(jobs);
})

server.put('/api/jobs', (req, res) =>{
    if(!req.body) res.send('invalid data sent');
    if(!req.body.company) res.send('company is required');
    if(!req.body.dateApplied) res.send('dateApplied is required');
    const jobIndex = jobs.findIndex(job => job.id == req.body.id);
    if(jobIndex === -1) res.send('No job found with that id');
    jobs[req.body.id] = req.body;
    res.send(jobs);
})
