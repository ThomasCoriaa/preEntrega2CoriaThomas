
const stockProductos = [
    {
    id: 1,
    nombre:"monitor 24 pulgadas",
    cantidad: 1,
    descripcion:"Monitor samsung 24 pulgadas 1ms de respuesta pantalla ips",
    precio: 55000,
    img: "../assets/img/monitor24.png"
},
{
    id: 2,
    nombre:"mouse zowie",
    cantidad: 1,
    descripcion:"Sensor 3360 tecnología plug and play Ajuste de 3200 DPI",
    precio: 22000,
    img: "../assets/img/moousezowie.png"
},
{
    id: 3,
    nombre:"Musepad Logitech 640",
    cantidad: 1,
    descripcion:"MousePad logitech control de tela y goma 430 cm x 600 cm",
    precio: 10000,
    img: "../assets/img/mousepad.png"
    
},
{
    id: 4,
    nombre:"Gabinete Deepcool Matrexx",
    cantidad: 1,
    descripcion:"vidrio templado grafito, tipo de estructura Mid tower",
    precio: 10000,
    img: "../assets/img/galeria2.png"
    
},
{
    id: 5,
    nombre:"Mother asus 453",
    cantidad: 1,
    descripcion:" Contiene plataforma unicamente para Intel y una ram DDR4",
    precio: 33000,
    img: "../assets/img/mother.png"
    
},
{
    id: 6,
    nombre:"Placa de video",
    cantidad: 1,
    descripcion:"Nvidia rtx3080",
    precio: 70000,
    img: "../assets/img/nvidia.png"
    
},
]

const contenedor = document.querySelector('#contenedor')


stockProductos.forEach((prod) =>{
    const {id,nombre,cantidad,descripcion,precio,img} = prod
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top mt-2" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${descripcion}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>
    `
})

function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id == id)
 alert(id)
}





