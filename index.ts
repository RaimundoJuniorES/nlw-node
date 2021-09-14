interface User {
    nome: string, email: string
}

function enviarEmail(user: User){
    console.log(user)
}

enviarEmail({
    nome: "raimundo",
    email: "raimundo.nonato@gmail.com"
})

