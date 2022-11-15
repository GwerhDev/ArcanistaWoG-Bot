

const urlList = 
{
    sistema: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXjr-Ru-P6-__EqRLFSsRs0f3NBS7rgxeQSIFGZU7tMKHZoKkJbNK1Ju1bAVPqRYbqgTKdkILz9TWB/pubhtml"
}
const commands = 
[   
    {
        cmd: "[escudero]",
        description: "Lista de comandos"
    },
    {
        cmd: "[quests]",
        description: "Lista de tareas"
    },
    {
        cmd: "[sistema]",
        description: "[Sistema Ainulidalë]",
        url: urlList.sistema
    }
]


module.exports = {
    commands,
    urlList
}