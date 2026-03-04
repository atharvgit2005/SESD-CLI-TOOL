#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine = require("./CLI_Engine");
const greet_command = require("./commands/greet_cmd");
const engine = new cli_engine();
engine.registerCommand([greet_command]);
engine.run();
// const {Command} = require('commander')
// const axios = require('axios')
// const program = new Command();
// program
// .command("greet <name>")
// .action((name)=>{console.log(`Hello ${name}`)})
// // calculator
// program
// .command(" add <n1> <n2>")
// .action((n1,n2)=>{(console.log(`${parseInt(n1) + parseInt(n2)}`))})
// //API Fetching
// program
// .command('quote')
// .action(async()=>{
//     try{
// const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
// console.log(res)
//     }
//     catch{
// console.log("error")
//     }
// })
// program.parse()
