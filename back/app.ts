import express from "express";

const app = express();

app.listhen(443, () => console.log("Start server on 443 port"));
