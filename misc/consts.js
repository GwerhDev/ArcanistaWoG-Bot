require('dotenv').config();
const { SISTEMA } = process.env;

const commands = 
[   
    {
        cmd: "[ayuda]",
        description: "Lista de comandos"
    },
    {
        cmd: "[quests]",
        description: "Lista de tareas"
    },
    {
        cmd: "[sistema]",
        description: "[Sistema Ainulidalë]",
        url: SISTEMA
    },
    {
        cmd: "[CLEAR]",
        description: "Limpia los últimos 100 mensajes del Canal (admin)"
    },
]


module.exports = {
    commands,
}