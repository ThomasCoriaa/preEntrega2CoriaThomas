const productos = [
    {
    id: 01,
    nombre:"monitor 24 pulgadas",
    descripcion:"Monitor samsung 24 pulgadas 1ms de respuesta pantalla ips",
    precio: 55000,
    stock:15
},
{
    id: 02,
    nombre:"mouse zowie",
    descripcion:"Sensor 3360 tecnología plug and play Ajuste de 3200 DPI",
    precio: 22000,
    stock:4
},
{
    id: 03,
    nombre:"Musepad",
    descripcion:"MousePad control de tela y goma 430 cm x 600 cm",
    precio: 10000,
    stock:1
},

]

const carrito = []
let cantidadTotal = 0

productos.forEach((producto,index)=>{
    const agregarCarrito = document.querySelector(`#${producto.id}`)
    agregarCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidadproducto = parseInt(e.target.children["cantidadPasajeros"].value)
        carrito.push({
            id:productos[index].id,
            nombre: productos[index].nombre,
            descripcion: productos[index].descripcion,
            cantidadProductos:cantidadproductos
        }) 
        cantidadTotal = cantidadTotal + cantidadProducto
        const numeroCarrito = document.querySelector("#numeroCarrito")
        numeroCarrito.innerText = cantidadTotal

    })
})



