import mysql from "mysql2";

export const dbConfig = async() => {
    const database = mysql.createConnection({
        database: "bincom_test",
        host: "127.0.0.1",
        user: "root",
        password: "Salvations@0708",
        insecureAuth: true
    })

    database.connect((error) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Database connected successfully!!")
    })

}