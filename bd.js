import mysql from 'mysql2/promise'

export async function connection(){

    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:'',
            database: 'usuario'
    })
        return connection

        console.log("Conexão realizada")
        return connection

    } catch (error){
        console.error("Não conectado!")
    }
}