
class Libro {
  constructor(id,nombre, autor, valor){
    this.nombre = nombre;
    this.valor = valor;
    this.autor = autor;
    this.id = id;
  }
}

const libro1 = new Libro(1,"La Iliada", "Homero", 250);
const libro2 = new Libro(2,"Crimen y Castigo", "Dostoievski" ,200);
const libro3 = new Libro(3,"El Proceso", "Kafka",150);
const libro4 = new Libro(4,"Divina Comedia", "Dante Alighieri", 220);



let libros_Libreria = [libro1, libro2, libro3, libro4];


const lista = (catalogo) => {
  let num = confirm("Desea ver el orden numerado? ")
  let lista;
    if (num){
      lista ="ol";
    } else {
      lista = "ul";
    }
      let elemento = document.createElement(lista);
    

            catalogo.forEach( libro => {
                elemento.innerHTML += `
                                    <li>
                                        <div class="${libro.id}">
                                          <p> Nombre: ${libro.nombre}</p>
                                          <p>  Autor: ${libro.autor}</p>
                                          <b> $ ${libro.valor}</b>
                                      </li>
                                      <br>
                                    </div>
                `
            });
      document.body.append(elemento); 
}
lista(libros_Libreria);


