CREATE SCHEMA login_app_schema;

CREATE TABLE login_app_schema.users (
                                        uid INT CONSTRAINT users_uid_pk PRIMARY KEY,
                                        first_name VARCHAR (50) NOT NULL,
                                        last_name VARCHAR (50) NOT NULL,
                                        email VARCHAR ( 255 ) UNIQUE NOT NULL,
                                        pass VARCHAR ( 500 ) NOT NULL,
                                        birthday DATE NOT NULL,
                                        user_role VARCHAR (50) NOT NULL,
                                        adresses VARCHAR(200) NOT NULL,
                                        phone_numbers VARCHAR(200) NOT NULL
);


CREATE TABLE login_app_schema.technologies (
                                        tid SERIAL PRIMARY KEY,
                                        name VARCHAR(50) NOT NULL
);

CREATE TABLE login_app_schema.users_technologies (
                                            user_id INTEGER REFERENCES login_app_schema.users(uid),
                                            technology_id INTEGER REFERENCES login_app_schema.technologies(tid),
                                            PRIMARY KEY (user_id, technology_id)
);

INSERT INTO login_app_schema.technologies (tid,name)
VALUES (1,'tech1'),
       (2,'tech2'),
       (3,'tech3'),
       (4,'tech4'),
       (5,'tech5');

INSERT INTO login_app_schema.users (uid,first_name,last_name,email,pass,birthday,user_role,adresses,phone_numbers)
VALUES (1,'Andreea','Bugnar','andreea.bugnar@gmail.com','$2y$10$uIdeJzPkCDLJ1QEWS4wDzOlxyo3jAj3ueSN9GtOJi3lkVbyzBM1Ji','03-12-2001','ADMIN','whetever1','0000000000'),
       (2,'Muresan','Denisa','denisa.muresan@gmail.com','$2y$10$uIdeJzPkCDLJ1QEWS4wDzOlxyo3jAj3ueSN9GtOJi3lkVbyzBM1Ji','04-07-1999','USER','adress1','2222222222'),
       (3,'Suster','Roxana','roxana.suster@gmail.com','$2y$10$uIdeJzPkCDLJ1QEWS4wDzOlxyo3jAj3ueSN9GtOJi3lkVbyzBM1Ji','11-17-1998','USER','adress2','4444444444'),
       (4,'Bouaru','Radu','radu.bouaru@gmail.com','$2y$10$uIdeJzPkCDLJ1QEWS4wDzOlxyo3jAj3ueSN9GtOJi3lkVbyzBM1Ji','09-12-1998','ADMIN','adress3','5555555555'),
       (5,'Peter','Peter','peter.peter@gmail.com','$2y$10$uIdeJzPkCDLJ1QEWS4wDzOlxyo3jAj3ueSN9GtOJi3lkVbyzBM1Ji','01-01-1985','USER','adress4','7777777777');

INSERT INTO login_app_schema.users_technologies (user_id, technology_id)
VALUES (1,1),
       (1,2),
       (2,3),
       (3,4),
       (4,1),
       (4,5),
       (5,4),
       (5,5);


SELECT * FROM login_app_schema.users;

CREATE SEQUENCE users_uid_seq START 7;
ALTER TABLE login_app_schema.users
    ALTER COLUMN uid SET DEFAULT nextval('users_uid_seq');

SELECT login_app_schema.users.email, login_app_schema.technologies.name
FROM login_app_schema.users
    INNER JOIN login_app_schema.users_technologies ON
        login_app_schema.users.uid = login_app_schema.users_technologies.user_id
    INNER JOIN login_app_schema.technologies ON
        technologies.tid = login_app_schema.users_technologies.technology_id;