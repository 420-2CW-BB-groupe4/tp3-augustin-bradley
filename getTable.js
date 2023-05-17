function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
// Clients
const c_ul = document.getElementById("clients");
console.log(c_ul);
const c_url = "http://localhost:8080/ords/hr2/clients";
let table = document.createElement('table');
table.id = "myTable";
let headers = ['ID Client', 'Nom', 'Prénom', 'Email', 'Adresse'];
let tr = document.createElement('tr');
headers.forEach(headerText => {
    let th = document.createElement('th');
    th.innerHTML = headerText;
    tr.appendChild(th);
});
table.appendChild(tr);
fetch(c_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items;
        return employees.map(function (client) {
            let tr = document.createElement('tr');
            ['id_client', 'nom', 'prenom', 'email', 'adresse'].forEach(function(prop) {
                let td = document.createElement('td');
                td.innerHTML = client[prop];
                tr.appendChild(td);
            });
            table.appendChild(tr);
        })
    })
    .then(function() {
        c_ul.appendChild(table);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })
// Dates
const d_ul = document.getElementById("dates");
console.log(d_ul);
const d_url = "http://localhost:8080/ords/hr2/dates";

let tableDates = document.createElement('table');
tableDates.id = "myTable";

let headersDates = ['ID Date', 'Date de vente'];
let trDates = document.createElement('tr');
headersDates.forEach(headerText => {
    let th = document.createElement('th');
    th.innerHTML = headerText;
    trDates.appendChild(th);
});
tableDates.appendChild(trDates);

fetch(d_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let dates = data.items;
        return dates.map(function (date) {
            let tr = document.createElement('tr');
            ['id_date', 'date_vente'].forEach(function(prop) {
                let td = document.createElement('td');
                td.innerHTML = date[prop];
                tr.appendChild(td);
            });
            tableDates.appendChild(tr);
        })
    })
    .then(function() {
        d_ul.appendChild(tableDates);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })

// Produits
const p_ul = document.getElementById("produits");
console.log(p_ul);
const p_url = "http://localhost:8080/ords/hr2/produits";

let tableProduits = document.createElement('table');
tableProduits.id = "myTable";

let headersProduits = ['ID Produit', 'Nom Produit', 'Description', 'Prix', 'Quantité en stock'];
let trProduits = document.createElement('tr');
headersProduits.forEach(headerText => {
    let th = document.createElement('th');
    th.innerHTML = headerText;
    trProduits.appendChild(th);
});
tableProduits.appendChild(trProduits);

fetch(p_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let produits = data.items;
        return produits.map(function (produit) {
            let tr = document.createElement('tr');
            ['id_produit', 'nom_produit', 'description', 'prix', 'quantite_en_stock'].forEach(function(prop) {
                let td = document.createElement('td');
                td.innerHTML = produit[prop];
                tr.appendChild(td);
            });
            tableProduits.appendChild(tr);
        })
    })
    .then(function() {
        p_ul.appendChild(tableProduits);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })

// Magasins
const m_ul = document.getElementById("magasins");
console.log(m_ul);
const m_url = "http://localhost:8080/ords/hr2/magasins";

let tableMagasins = document.createElement('table');
tableMagasins.id = "myTable";

let headersMagasins = ['ID Magasin', 'Nom Magasin', 'Adresse Magasin', 'Téléphone'];
let trMagasins = document.createElement('tr');
headersMagasins.forEach(headerText => {
    let th = document.createElement('th');
    th.innerHTML = headerText;
    trMagasins.appendChild(th);
});
tableMagasins.appendChild(trMagasins);
fetch(m_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let magasins = data.items;
        return magasins.map(function (magasin) {
            let tr = document.createElement('tr');
            ['id_magasin', 'nom_magasin', 'adresse_magasin', 'telephone'].forEach(function(prop){
                let td = document.createElement('td');
                td.innerHTML = magasin[prop];
                tr.appendChild(td);
            });
            tableMagasins.appendChild(tr);
        })
    })
    .then(function() {
        m_ul.appendChild(tableMagasins);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })
            

// Ventes
const v_ul = document.getElementById("ventes");
console.log(v_ul);
const v_url = "http://localhost:8080/ords/hr2/ventes";

let tableVentes = document.createElement('table');
tableVentes.id = "myTable";

let headersVentes = ['ID Vente', 'ID Client', 'ID Produit', 'ID Date', 'ID Magasin', 'Quantité'];
let trVentes = document.createElement('tr');
headersVentes.forEach(headerText => {
    let th = document.createElement('th');
    th.innerHTML = headerText;
    trVentes.appendChild(th);
});
tableVentes.appendChild(trVentes);

fetch(v_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let ventes = data.items;
        return ventes.map(function (vente) {
            let tr = document.createElement('tr');
            ['id_vente', 'id_client', 'id_produit', 'id_date', 'id_magasin', 'quantite'].forEach(function(prop) {
                let td = document.createElement('td');
                td.innerHTML = vente[prop];
                tr.appendChild(td);
            });
            tableVentes.appendChild(tr);
        })
    })
    .then(function() {
        v_ul.appendChild(tableVentes);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })