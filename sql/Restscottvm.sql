-- Table pour les clients
CREATE TABLE tp3_clients (
    id_client INT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    adresse VARCHAR(255)
);
-- Table pour les produits
CREATE TABLE tp3_produits (
    id_produit INT PRIMARY KEY,
    nom_produit VARCHAR(255) NOT NULL,
    description VARCHAR2(4000),
    prix DECIMAL(10, 2) NOT NULL,
    quantite_en_stock INT NOT NULL
);


-- Table pour les magasins
CREATE TABLE tp3_magasins (
    id_magasin INT PRIMARY KEY,
    nom_magasin VARCHAR(255) NOT NULL,
    adresse_magasin VARCHAR(255) NOT NULL,
    telephone VARCHAR(20)
);


-- Table pour les dates
CREATE TABLE tp3_dates (
    id_date INT PRIMARY KEY,
    date_vente DATE NOT NULL
);


-- Table pour les ventes
CREATE TABLE tp3_ventes (
    id_vente INT PRIMARY KEY,
    id_client INT,
    id_produit INT,
    id_date INT,
    id_magasin INT,
    quantite INT NOT NULL,
    FOREIGN KEY (id_client) REFERENCES tp3_clients(id_client),
    FOREIGN KEY (id_produit) REFERENCES tp3_produits(id_produit),
    FOREIGN KEY (id_date) REFERENCES tp3_dates(id_date),
    FOREIGN KEY (id_magasin) REFERENCES tp3_magasins(id_magasin)
);


-- Table pour les clients
INSERT INTO tp3_clients (id_client, nom, prenom, email, adresse) VALUES (1,'Dupont', 'Jean', 'jean.dupont@example.com', 'Paris');
INSERT INTO tp3_clients (id_client, nom, prenom, email, adresse) VALUES (2,'Lefebvre', 'Marie', 'marie.lefebvre@example.com', 'Lyon');
INSERT INTO tp3_clients (id_client, nom, prenom, email, adresse) VALUES (3,'Martin', 'Pierre', 'pierre.martin@example.com', 'Marseille');




-- Table pour les produits
INSERT INTO tp3_produits (id_produit, nom_produit, description, prix, quantite_en_stock) VALUES (1,'T�l�phone', 'Smartphone haut de gamme', 999.99, 100);
INSERT INTO tp3_produits (id_produit, nom_produit, description, prix, quantite_en_stock) VALUES (2,'T�l�vision', 'T�l�viseur LCD HD', 1999.99, 50);
INSERT INTO tp3_produits (id_produit, nom_produit, description, prix, quantite_en_stock) VALUES (3,'Ordinateur portable', 'Ordinateur portable l�ger et portable', 2499.99, 80);


-- Table pour les magasins
INSERT INTO tp3_magasins (id_magasin, nom_magasin, adresse_magasin, telephone) VALUES (1,'Boutique Paris', 'Rue de Rivoli, Paris', '01 23 45 67 89');
INSERT INTO tp3_magasins (id_magasin, nom_magasin, adresse_magasin, telephone) VALUES (2,'Boutique Lyon', 'Rue Victor Hugo, Lyon', '04 56 78 90 12');
INSERT INTO tp3_magasins (id_magasin, nom_magasin, adresse_magasin, telephone) VALUES (3,'Boutique Marseille', 'Avenue du Prado, Marseille', '06 54 32 10 98');


-- Table pour les dates
INSERT INTO tp3_dates (id_date, date_vente) VALUES (1, TO_DATE('2023-05-01', 'YYYY-MM-DD'));
INSERT INTO tp3_dates (id_date, date_vente) VALUES (2, TO_DATE('2023-05-05', 'YYYY-MM-DD'));
INSERT INTO tp3_dates (id_date, date_vente) VALUES (3, TO_DATE('2023-05-10', 'YYYY-MM-DD'));


-- Table pour les ventes
INSERT INTO tp3_ventes (id_vente, id_client, id_produit, id_date, id_magasin, quantite) VALUES (1, 1, 1, 1, 1, 2);
INSERT INTO tp3_ventes (id_vente, id_client, id_produit, id_date, id_magasin, quantite) VALUES (2, 2, 2, 2, 2, 1);
INSERT INTO tp3_ventes (id_vente, id_client, id_produit, id_date, id_magasin, quantite) VALUES (3, 3, 3, 3, 3, 3);

SELECT * FROM tp3_ventes;
