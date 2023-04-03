const productos = [];
productos.push (new Producto("1","Cafe colombiano 1k","1500","cafe","4"));
productos.push (new Producto("2","Cafe colombiano 500gm","800","cafe","2"));
productos.push (new Producto("3","Cafe italiano 1k","1600","cafe","2"));
productos.push (new Producto("4","Cafe italiano 500gm","900","cafe","3"));
productos.push (new Producto("5","Blend cafe 1k","2000","cafe","1"));
productos.push (new Producto("6","Blend cafe 500gm","1200","cafe","3"));
productos.push (new Producto("7","Taza especial","2500","accesorios","1"));
productos.push (new Producto("8","Azucar en cubos 500gm","500","extras","2"));
productos.push (new Producto("9","Cuchara fancy","600","accesorios","2"));
productos.push (new Producto("10","Amaretis 250gm","400","extras","3"));

const carrito = [];

function listar (prods){
    return prods.map(prods => {
        return `Id: ${prods.id}, nombre: ${prods.nombre}, precio: ${prods.precio}, categoria: ${prods.categoria}, cantidad: ${prods.cant}`
    }).join("\n");
};

function agregar (prods, carrito){
    let idProd;
    let buscado; 
    let otro;
    do{
        idProd = prompt (listar(prods) +"\nIngrese el id del producto que desea agregar");
        buscado = prods.find(producto => producto.id === idProd);
        if (buscado) {
            carrito.push (buscado);
            alert ("Agregado con exito!");
        }else{
            alert("El id ingresado no existe");
        }
    
        otro = prompt("Desea agregar otro producto al carrito? S/N");
    } while (otro == "s" || otro == "S");

};


function filtrar (prods){
    let cat = prompt("Ingrese la categoria:").toLowerCase();
    let filtrado = prods.filter(prods => prods.categoria === cat);

    if (filtrado.length >0){
        alert(listar(filtrado));
    }else{
        alert("No vendemos "+ cat);
    }
};

function ordenar (prods){
    let orden = prompt("Ingrese A para ordenar de manera ascendente y D para ordenar de manera descendente");
    if (orden == "a" || orden == "A"){
        prods.sort((a,b)=>a.precio-b.precio);
        alert(listar(prods));
    }else {if (orden == "d" || orden == "D"){
        prods.sort((a,b)=>b.precio-a.precio);
        alert(listar(prods));
    }else{
        alert("Opcion no valida");
    }}
};

function azar(prods){
    let cual = Math.round(Math.random()*10);
    let este = prods.filter((p)=> p.id==cual);
    alert(listar(este));
};

let menu = "Ingrese la opcion deseada: \n1-Ver productos\n2-Agregar productos al carrito\n3-Filtrar por categoria\n4-Ver mi carrito \n5-Ordenar productos por precio \n6-Quiero ver un producto al azar!!!\n0-Salir";
let opcion;

do{
    opcion = Number(prompt(menu));
    
    switch (opcion) {
        case 1:
            alert(listar(productos));
            break;
        case 2:
            agregar(productos, carrito); 
            break;
        case 3:
            filtrar(productos);
            break;
        case 4:
            alert(listar(carrito));
            break;
        case 5:
            ordenar(productos);
            break;
        case 6:
            azar(productos);
            break;
        default:
             if (opcion != 0){
                alert("opcion invalida");
             }
            break;
    }

}while (opcion != 0);

