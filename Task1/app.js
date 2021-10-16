const students = require('./data')
const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:'Add Student',

    builder:{
        id:{
            describe:'This is ID in add command',
            demandOption: true,
            type:'number'
        },
        name:{
            describe:'This is NAME in add command',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'This is SUBJECT in add command',
            demandOption: true,
            type:'string'
        },
        grade:{
            describe:'This is GRADE in add command',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'This is COMMENT in add command',
            //demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
      students.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
})



yargs.command({
    command:'remove',
    describe:'Delete student',
    builder:{
        id:{
            describe:'This is ID in add command',
            demandOption: true,
            type:'number'
        }
    },
    handler:(argv)=>{
      students.removeStudent(argv.id)
    }
})


yargs.command({
    command:'read',
    describe:'Read Student',
    builder:{
       id:{
            describe:'This is ID in add command',
            demandOption: true,
            type:'number'
        }
    },
    handler:(argv)=>{
        students.readStudent(argv.id)
    }
})

yargs.command({
    command:'list',
    describe:'List Students',
    handler:()=>{
       students.listStudents()
    }
})

//console.log(yargs.argv)

const z = yargs.parse()
// console.log(z)