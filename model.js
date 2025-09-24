import { connection } from './bd.js';

class App {
    async autenticarUsuario(login, senha) {
        let conn;
        try {
            conn = await connection();
            
            const [rows] = await conn.query('SELECT login, senha FROM cliente WHERE login = ? AND senha = ?', [login, senha]);
            
            if (rows.length > 0) {
                console.log("Usuário autenticado com sucesso!");
                return true;
            } else {
                console.log("Login ou senha incorretos.");
                return false;
            }

        } catch (error) {
            console.error("Erro ao autenticar usuário:", error);
            return false;
        } finally {            
            if (conn) {
                await conn.end();
            }
        }
    }
}

const app = new App();
const loginUsuario = 'ringo';
const senhaUsuario = 's1234@';

app.autenticarUsuario(loginUsuario, senhaUsuario);