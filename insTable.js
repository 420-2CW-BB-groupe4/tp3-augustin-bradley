function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const c_ul = document.getElementById("clients");
const c_url = "http://localhost:8080/ords/hr2/clients";
fetch(c_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items; //.results;
        return employees.map(function (client) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${client.id_client} ${client.nom} ${client.prenom} ${client.email} ${client.adresse}`;
            append(li, span);
            append(c_ul, li);
            // } 
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
const d_ul = document.getElementById("dates");
const d_url = "http://localhost:8080/ords/hr2/dates";
fetch(d_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items; //.results;
        return employees.map(function (date) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${date.id_date} ${date.date_vente}`;
            append(li, span);
            append(d_ul, li);
            // } 
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
const p_ul = document.getElementById("produits");
const p_url = "http://localhost:8080/ords/hr2/produits";
fetch(p_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items; //.results;
        return employees.map(function (produit) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${produit.id_produit} ${produit.nom_produit} ${produit.description} ${produit.prix} ${produit.quantite_en_stock}`;
            append(li, span);
            append(p_ul, li);
            // } 
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
const m_ul = document.getElementById("magasins");
const m_url = "http://localhost:8080/ords/hr2/magasins";
fetch(m_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items; //.results;
        return employees.map(function (magasin) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${magasin.id_magasin} ${magasin.nom_magasin} ${magasin.adresse_magasin} ${magasin.telephone}`;
            append(li, span);
            append(m_ul, li);
            // } 
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
const v_ul = document.getElementById("ventes");
const v_url = "http://localhost:8080/ords/hr2/ventes";
fetch(v_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let employees = data.items; //.results;
        return employees.map(function (vente) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${vente.id_vente} ${vente.id_client} ${vente.id_produit} ${vente.id_date} ${vente.id_magasin} ${vente.quantite}`;
            append(li, span);
            append(v_ul, li);
            // } 
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
