require('dotenv').config();
const { SISTEMA } = process.env;

const commands = 
[   
    {
        cmd: "[CLEAN]",
        description: "Limpia los últimos 100 mensajes del Canal (admin)"
    },
    {
        cmd: "[sistema]",
        description: "[Sistema Ainulidalë]",
        url: SISTEMA
    },
    {
        cmd: "[quests]",
        description: "Lista de tareas"
    },
    {
        cmd: "[ayuda]",
        description: "Lista de comandos"
    },
]


module.exports = {
    commands,
}