CREATE SCHEMA login_app_schema;

CREATE TABLE login_app_schema.users (
                                        uid INT CONSTRAINT users_uid_pk PRIMARY KEY,
                                        first_name VARCHAR (50) NOT NULL,
                                        last_name VARCHAR (50) NOT NULL,
                                        email VARCHAR ( 255 ) UNIQUE NOT NULL,
                                        pass VARCHAR ( 50 ) NOT NULL,
                                        birthday DATE NOT NULL,
                                        user_role VARCHAR (50) NOT NULL,
                                        adresses VARCHAR(200) NOT NULL,
                                        phone_numbers VARCHAR(200) NOT NULL,
                                        technologies VARCHAR(200)
);



INSERT INTO login_app_schema.users (uid,first_name,last_name,email,pass,birthday,user_role,adresses,phone_numbers,technologies)
VALUES (1,'Andreea','Bugnar','andreea.bugnar@gmail.com','parola','03-12-2001','ADMIN','whetever1','0000000000','tech1');

INSERT INTO login_app_schema.users (uid,first_name,last_name,email,pass,birthday,user_role,adresses,phone_numbers,technologies)
VALUES (2,'Muresan','Denisa','denisa.muresan@gmail.com','parola','04-07-1999','USER','adress1','2222222222','tech3'),
       (3,'Suster','Roxana','roxana.suster@gmail.com','parola','11-17-1998','USER','adress2','4444444444','tech2'),
       (4,'Bouaru','Radu','radu.bouaru@gmail.com','parola','09-12-1998','ADMIN','adress3','5555555555','tech1'),
       (5,'Peter','Peter','peter.peter@gmail.com','parola','01-01-1985','USER','adress4','7777777777','tech1');

SELECT * FROM login_app_schema.users;

CREATE SEQUENCE users_uid_seq START 7;
ALTER TABLE login_app_schema.users
    ALTER COLUMN uid SET DEFAULT nextval('users_uid_seq')
