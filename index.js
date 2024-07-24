const zapatillas = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_1.png',
    modelo: 'Adidas',
    nombre: 'Adidas Runfalcon 3',
    precio: 70.0,
    estrellas: 5,
    boton: 'comprar'
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_2.png',
    modelo: 'New Balance',
    nombre: 'New Balance 550',
    precio: 80.0,
    estrellas: 1,
    boton: 'comprar'
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_3.png',
    modelo: 'Nike',
    nombre: 'Nike Air Force 1 Low',
    precio: 90.0,
    estrellas: 4,
    boton: 'comprar'
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_4.png',
    modelo: 'Nike',
    nombre: 'Nike Mercurial Vapor 15 Club',
    precio: 110.0,
    estrellas: 1,
    boton: 'comprar'
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193985/Proyecto2/Zapatilla_5.png',
    modelo: 'Altra',
    nombre: 'Altra Lone Peak 8',
    precio: 120.0,
    estrellas: 3,
    boton: 'comprar'
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193985/Proyecto2/Zapatilla_6.png',
    modelo: 'Adidas',
    nombre: 'Adidas Originals Gazelle',
    precio: 100.0,
    estrellas: 2,
    boton: 'comprar'
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_7.png',
    modelo: 'Vans',
    nombre: 'Vans F UA Comfy Era',
    precio: 60.0,
    estrellas: 4,
    boton: 'comprar'
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193983/Proyecto2/Zapatilla_8.png',
    modelo: 'Adidas',
    nombre: 'Adidas Fabela Zone',
    precio: 70.0,
    estrellas: 3,
    boton: 'comprar'
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193983/Proyecto2/Zapatilla_9.png',
    modelo: 'Nike',
    nombre: 'Nike Air Max Furyosa',
    precio: 100.0,
    estrellas: 2,
    boton: 'comprar'
  },
  {
    id: 10,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_10.png',
    modelo: 'Mizuno',
    nombre: 'Mizuno Contender',
    precio: 120.0,
    estrellas: 5,
    boton: 'comprar'
  },
  {
    id: 11,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_11.png',
    modelo: 'Nike',
    nombre: 'Nike Air More Uptempo',
    precio: 90.0,
    estrellas: 4,
    boton: 'comprar'
  },
  {
    id: 12,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_12.png',
    modelo: 'Fila',
    nombre: 'Fila Flash Attack',
    precio: 80.0,
    estrellas: 1,
    boton: 'comprar'
  },
  {
    id: 13,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193983/Proyecto2/Zapatilla_13.png',
    modelo: 'Adidas',
    nombre: 'Adidas Originals Gazelle',
    precio: 110.0,
    estrellas: 3,
    boton: 'comprar'
  },
  {
    id: 14,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_14.png',
    modelo: 'Adidas',
    nombre: 'Adidas Forum Low White',
    precio: 90.0,
    estrellas: 2,
    boton: 'comprar'
  },
  {
    id: 15,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_15.png',
    modelo: 'New Balance',
    nombre: 'New Balance 327',
    precio: 100.0,
    estrellas: 5,
    boton: 'comprar'
  },
  {
    id: 16,
    img: 'https://res.cloudinary.com/dvoady6dt/image/upload/v1720193984/Proyecto2/Zapatilla_16.png',
    modelo: 'Adidas',
    nombre: 'Adidas Gazelle Pink',
    precio: 120.0,
    estrellas: 1,
    boton: 'comprar'
  }
];
// Variables para guardar los criterios seleccionados por el usuario
const MODELOS = [];
const PRECIOS = [];

let MODELO = '';
let PRECIO = '';
let PRODUCTOSFILTRADOS = '';

const filtrar = () => {
  const filtered = zapatillas.filter((zapa) => {
    const modeloMatch = MODELO ? zapa.modelo === MODELO : true;
    const precioMatch = PRECIO ? zapa.precio <= PRECIO : true; // Permitir precios menores o iguales
    return modeloMatch && precioMatch;
  });
  printZapas(filtered);
};

// Función para llenar modelos únicos en un array
const fillModelos = (zapas) => {
  MODELOS.splice(0); // Vacía el array MODELOS
  for (const zapa of zapas) {
    if (!MODELOS.includes(zapa.modelo)) {
      MODELOS.push(zapa.modelo); // Añade modelos únicos al array MODELOS
    }
  }
};

// Función para llenar precios únicos en un array
const fillPrecios = (moneys) => {
  PRECIOS.splice(0); // Vacía el array MODELOS
  for (const money of moneys) {
    if (!PRECIOS.includes(money.precio)) {
      PRECIOS.push(money.precio); // Añade modelos únicos al array PRECIOS
    }
  }
};

const productosFiltrados = (zapatillas) => {
  for (const i = 0; i < zapatillas.length; i++)
    if (PRODUCTOSFILTRADOS.length <= 0) {
      // Recorrer array y si es igual a cero
      return 'esto me gusta';
      // const suggestions = zapatillas.slice(0, 3); // Tomar los primeros 3 productos como sugerencias
      // container.innerHTML = '<h3>Sugerencias:</h3>';
      // const container = document.getElementById('zapatillas');
    } else {
      return 'esto no me gusta';
      PRODUCTOSFILTRADOS = '';
    }
};
// suggestions();
fillModelos(zapatillas);
fillPrecios(zapatillas);

const createSelectModel = () => {
  const divFiltros = document.querySelector('#modelos');
  const selectModel = document.createElement('select');

  // Crea la opción por defecto "Todos los modelos"
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Todos los modelos';
  selectModel.appendChild(defaultOption);

  // Añade opciones para cada modelo único en MODELOS
  for (const modelo of MODELOS) {
    const option = document.createElement('option');

    option.value = modelo;
    option.textContent = modelo;
    selectModel.appendChild(option);
  }

  // Agrega el select al DOM y añade un event listener para cambios
  divFiltros.appendChild(selectModel);
  selectModel.addEventListener('change', (event) => {
    MODELO = event.target.value; // Actualiza MODELO con el modelo seleccionado
    filtrar(); // Filtra las zapatillas según el modelo seleccionado
  });
};

const createSelectPrecio = () => {
  const divPrecio = document.querySelector('#precio');
  const selectPrecio = document.createElement('select');

  // Crea la opción por defecto "Todos los precios"
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Todos los precios';
  selectPrecio.appendChild(defaultOption);

  // Añade opciones para cada precio único en PRECIOS
  for (const precio of PRECIOS) {
    const option = document.createElement('option');

    option.value = precio;
    option.textContent = precio;

    selectPrecio.appendChild(option);
  }

  // Agrega el select al DOM y añade un event listener para cambios
  divPrecio.appendChild(selectPrecio);
  selectPrecio.addEventListener('change', (event) => {
    PRECIO = event.target.value; // Actualiza PRECIO con el precio seleccionado
    filtrar(); // Filtra las zapatillas según el precio seleccionado
  });
};

const createResetButton = () => {
  const divFiltros = document.querySelector('#button');
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Borrar Filtros';

  // Agrega un event listener al botón para borrar filtros
  resetButton.addEventListener('click', () => {
    MODELO = ''; // Resetea MODELO
    PRECIO = ''; // Resetea PRECIO
    document.querySelector('#modelos select').value = ''; // Resetea el select de modelos
    document.querySelector('#precio select').value = ''; // Resetea el select de precios
    printZapas(zapatillas); // Muestra todas las zapatillas de nuevo
  });

  // Agrega el botón al DOM
  divFiltros.appendChild(resetButton);
};

const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas');
  divZapas.innerHTML = ''; // Vacía el contenedor de zapatillas

  // Itera sobre cada zapatilla y crea elementos HTML para mostrarlas
  for (const zapa of zapas) {
    // Crea elementos para cada propiedad de la zapatilla
    const divZapa = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const nombre = document.createElement('h3');
    const precio = document.createElement('p');
    const boton = document.createElement('button');
    const divEstrellas = document.createElement('div');

    // Crea estrellas de calificación para cada zapatilla
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div');
      estrella.className = 'estrella';
      if (zapa.estrellas >= i) {
        estrella.classList.add('rellena');
      }
      divEstrellas.appendChild(estrella);
    }

    // Añade clases y contenido a los elementos
    divZapa.className = 'flex-container';
    divImg.classList.add('imgContainer');
    divEstrellas.classList.add('estrellas');
    divEstrellas.classList.add('flex-container');
    nombre.classList.add('f2');
    boton.classList.add('f3');

    // Agrega evento al botón para resaltar al hacer clic
    boton.addEventListener('click', () => {
      boton.style.backgroundColor = 'yellow';
      boton.style.transition = '.5s ease';
    });

    // Asigna valores y contenido a los elementos
    img.src = zapa.img;
    nombre.textContent = zapa.nombre;
    precio.textContent = `${zapa.precio} €`;
    boton.textContent = zapa.boton;
    divImg.style.background = `var(--tdf-special-color-${
      Math.floor(Math.random() * 8) + 1
    })`;

    // Construye la estructura de la zapatilla y la agrega al contenedor principal
    divZapa.appendChild(divImg);
    divImg.appendChild(img);
    divZapa.appendChild(nombre);
    divZapa.appendChild(precio);
    divZapa.appendChild(divEstrellas);
    divZapa.appendChild(boton);
    divZapas.appendChild(divZapa);
  }
};

function ShowHide() {
  var container = document.getElementById('sectionfiltros');
  if (container.style.visibility == 'hidden') {
    container.style.visibility = 'visible';
  } else if ((container.style.visibility = 'visible')) {
    container.style.visibility = 'hidden';
  }
}
ShowHide();
printZapas(zapatillas);
createSelectModel();
createSelectPrecio();
createResetButton();

// header
const header = document.querySelector('header');
header.innerHTML = `<section class="encabezado">
      <div class="logo">
        <img
          src="https://res.cloudinary.com/dvoady6dt/image/upload/v1718815465/Proyecto2/dds3jqpek493orkavmci.svg"
          width="100%"
          alt="logo"
        />
      </div>
      <nav>
        <a href="#"
          ><img
            src="https://res.cloudinary.com/dvoady6dt/image/upload/v1720683803/Proyecto2/iconos/qdfr8p7dszakshlb9y3a.png"
            width="100%"
          onclick="ShowHide()"
            alt="Ajustes"
        /></a>
        <a href="#"
          ><img
            src="https://res.cloudinary.com/dvoady6dt/image/upload/v1718818082/Proyecto2/iconos/esd1cebmywgri1ztrini.png"
            width="100%"
            alt="comprar"
        /></a>
        <a href="#"
          ><img
            src="https://res.cloudinary.com/dvoady6dt/image/upload/v1718818082/Proyecto2/iconos/n38lmuxojsjp5vvvj4sk.png"
            width="100%"
            alt="login"
        /></a>
      </nav>
    </section>
    <section>
      <img
        src="https://res.cloudinary.com/dvoady6dt/image/upload/v1720600202/Proyecto2/xwhkytwseaknmvu6xs0k.png"
        width="100%"
        alt="Fondo JD"
      />
    </section>`;

// footer
const footer = document.querySelector('footer');
footer.innerHTML = `<section id="comprar">
      <h3>Compra con JD</h3>
      <p>Guia de tallas</p>
      <p>Buscador de tallas</p>
      <p>Descuento estudiantes</p>
      <p>Calendario lanzamientos</p>
      <p>Incribite a JDX</p>
      <p>JD Blog</p>
    </section>
    <section id="atencion">
      <h3>Atención al cliente</h3>
      <p>Preguntas frecuentes</p>
      <p>Envíos y devoluciones</p>
      <p>Seguimiento de envío</p>
      <p>Contacto</p>
    </section>
    <section id="legal">
      <h3>Aviso legal</h3>
      <p>Términos y condiciones</p>
      <p>Promociones y condiciones</p>
      <p>Política de privacidad</p>
      <p>Política de Cookies</p>
      <p>Ajustes de Cookies</p>
      <p>Accesibilidad</p>
    </section>`;
