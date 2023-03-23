import mysql from "mysql2";

// export const dbConfig = async() => {
    const database = mysql.createConnection({
        database: "bincom_inyang",
        host: "db4free.net",
        user: "ifiokinyang",
        port: "3306",
        password: "Salvations@0708",
        insecureAuth: true
    })

    database.connect((error) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Database connected successfully!!")
    })


    export default database;
// }