CREATE DATABASE IF NOT EXISTS gestionconger;

use gestionconger;

CREATE TABLE IF NOT EXISTS sexe(
    id_sexe INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    sexe VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS departement(
    id_departement INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    departement VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS fonction(
    id_fonction INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fonction VARCHAR(100) NOT NULL,
    departement_id INT,
    CONSTRAINT fk_departement_fonction FOREIGN KEY (departement_id) REFERENCES departement(id_departement)
);

CREATE TABLE IF NOT EXISTS grade(
    id_grade INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    grade INT(3)
);

CREATE TABLE IF NOT EXISTS employee(
    id_employee INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(200) NOT NULL,
    prenom VARCHAR(200) NOT NULL,
    adresse VARCHAR(100) NOT NULL,
    telephone VARCHAR(16) NOT NULL,
    date_naissance DATE,
    conge_annuel INT,
    fonction_id INT,
    grade_id INT,
    CONSTRAINT fk_fonction_employee FOREIGN KEY (fonction_id) REFERENCES fonction(id_fonction),
    CONSTRAINT fk_grade_employee FOREIGN KEY (grade_id) REFERENCES grade(id_grade)
);

CREATE TABLE IF NOT EXISTS congee(
    id_congee INT PRIMARY KEY AUTO_INCREMENT NOT NULL,  
    date_demande DATE,
    date_debut DATE,
    date_fin DATE,
    durre INT,
    motif VARCHAR(2000),
    id_employee INT,
    CONSTRAINT fk_employee_conge FOREIGN KEY (id_employee) REFERENCES employee(id_employee)
);

CREATE TABLE IF NOT EXISTS role(
    id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    role VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS users(
    id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    roles INT,
    CONSTRAINT fk_role_users FOREIGN KEY (roles) REFERENCES role(id_role)
);

CREATE TABLE IF NOT EXISTS conger_refuser(
    id_conger_refuser INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_congee INT,
    date_refus DATE,
    id_users INT,
    CONSTRAINT fk_conge_refus FOREIGN KEY (id_congee) REFERENCES congee(id_congee),
    CONSTRAINT fk_users_refus FOREIGN KEY (id_users) REFERENCES users(id_user)
);

CREATE TABLE IF NOT EXISTS conger_valider(
    id_conger_valider INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_congee INT,
    date_validation DATE,
    id_users INT,
    CONSTRAINT fk_conge_valide FOREIGN KEY (id_congee) REFERENCES congee(id_congee),
    CONSTRAINT fk_users_valide FOREIGN KEY (id_users) REFERENCES users(id_user)
);



select * from congee c
                LEFT JOIN employee e ON e.id_employee = c.id_employee
                LEFT JOIN fonction f ON f.id_fonction = e.fonction_id
            where c.date_debut = "26-01-2025" and f.id_fonction = 1;


SELECT COUNT(c.durre) AS nombre_conges, SUM(c.durre) AS total_duree
    FROM congee c
    WHERE MONTH(c.date_debut) = 2
    AND YEAR(c.date_debut) = 2025
    AND c.id_employee = 4;

    SELECT 
    COALESCE(SUM(c.durre), 0) AS total_duree
FROM congee c
WHERE MONTH(c.date_debut) = 4
AND YEAR(c.date_debut) = 2025
AND c.id_employee = 3;

