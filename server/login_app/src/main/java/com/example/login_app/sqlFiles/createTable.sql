CREATE SCHEMA login_app_schema;

CREATE TABLE login_app_schema.users (
                                        uid SERIAL PRIMARY KEY,
                                        first_name VARCHAR (50) NOT NULL,
                                        last_name VARCHAR (50) NOT NULL,
                                        email VARCHAR ( 255 ) UNIQUE NOT NULL,
                                        pass VARCHAR ( 50 ) NOT NULL,
                                        birthday DATE NOT NULL,
                                        user_role VARCHAR (50) NOT NULL,
                                        adresses TEXT[] NOT NULL,
                                        phone_numbers TEXT[] NOT NULL,
                                        technologies TEXT[]
);



INSERT INTO login_app_schema.users (first_name,last_name,email,pass,birthday,user_role,adresses,phone_numbers,technologies)
VALUES ('Andreea','Bugnar','andreea.bugnar@gmail.com','parola','03-12-2001','admin','{"whetever1", "whatever2"}','{"0000000000","1111111111"}','{"tech1","tech2"}');

INSERT INTO login_app_schema.users (first_name,last_name,email,pass,birthday,user_role,adresses,phone_numbers,technologies)
VALUES ('Muresan','Denisa','denisa.muresan@gmail.com','parola','04-07-1999','user','{"adress1", "adress2"}','{"2222222222","3333333333"}','{"tech3","tech4"}'),
       ('Suster','Roxana','roxana.suster@gmail.com','parola','11-17-1998','user','{"adress1", "adress2"}','{"4444444444"}','{"tech2","tech5"}'),
       ('Bouaru','Radu','radu.bouaru@gmail.com','parola','09-12-1998','admin','{"first_adress", "second_adress"}','{"5555555555","6666666666"}','{"tech1","tech4"}'),
       ('Peter','Peter','peter.peter@gmail.com','parola','01-01-1985','user','{"first_adress1", "second_adress2"}','{"7777777777"}','{"tech1","tech2","tech4"}');

SELECT * FROM login_app_schema.users
