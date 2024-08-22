const {format}=require('date-fns')
const {v4:uuid}=require("uuid")
const fs=require("fs")
const fsPromises=require("fs").promises
const path=require("path")

const logEvenets=async(message,logFileName)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logTime=`${dateTime}\t${uuid()}\t${message}\n`
}