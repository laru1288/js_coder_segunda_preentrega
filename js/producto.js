class Producto {
    constructor (id, nombre, precio, categoria, cant) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.cant = parseInt(cant);
    }

}