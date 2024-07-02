const { db } = require("../config/database/config");

const queryString = `CREATE TABLE ResetPasswordToken (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    Token_value VARCHAR(350) NOT NULL,
    created_at datetime  NOT NULL ,
    expired_at datetime  NOT NULL,
    used INT(11) NOT NULL default "0",
    inserted_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE INDEX id_UNIQUE (id ASC))`;

const result =  db.query(queryString);

result.then(() => console.log("ResetPasswordToken created")).catch(err => console.log(err));
