// You are building a logging system for an online store's server. You need to log every incoming request with its method and URL. Implement a middleware function to achieve this, and ensure that it works for all routes.(Easy)

const express=require('express')
const app=express();
const port=3000;

const requestLogger