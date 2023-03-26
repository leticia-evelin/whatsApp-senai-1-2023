'use strict'

export const getUsuarios = async () => {

    let url = "http://localhost:8080/v2/senai/contato/1"
    let response = await fetch(url);
    let data = await response.json();

    return {
        ...data.contatos
    }
}
const teste = await getUsuarios(1);
//console.log(await getUsuarios());