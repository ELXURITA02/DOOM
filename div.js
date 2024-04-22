 export const crearDiv =(texto )=>{
    const menuPrincipal = document.createElement('div');
    //se asigna la clase del div
    menuPrincipal.classList.add("principal");
    //poner un parrafo
    let p = document.createElement('p');
    p.innerHTML =texto;
    menuPrincipal.appendChild(p);
    return menuPrincipal;
};

