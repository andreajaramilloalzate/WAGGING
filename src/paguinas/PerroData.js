import perro1 from '../images/perro 1.jpg';
import perro2 from '../images/perro 2.jpg';
import perro3 from '../images/perro 3.jpeg';
import perro4 from '../images/perro 4.jpg';
import perro5 from '../images/perro 5.jpeg';
import perro6 from '../images/perro 6.jpeg';
import perro7 from '../images/perro 7.jpg';
import perro8 from '../images/perro 8.webp';
import perro9 from '../images/perro 9.jpg';
import perro10 from '../images/perro10.jpg';
import perro11 from '../images/perro 11.jpg';
import perro12 from '../images/perro 12.jpg';
import perro13 from '../images/perro 13.jpg';
import perro14 from '../images/perro 14.webp';
import perro15 from '../images/perro 15.webp';
import perro16  from '../images/perro 16.webp';
import perro17 from '../images/perro 17.webp';
import perro18 from '../images/perro 18.webp';
import perro19 from '../images/perro 19.jpg';
import perro20 from '../images/perro 20.webp';

const PerroData = [
    {id: 1,image: perro1, name: 'Doberman',gender: 'Macho',age:'5', color:'Negro',location:'Medellin', info:'El Doberman  es una raza de perro muy conocida por su inteligencia, lealtad y capacidad de trabajo.'},
    {id: 2,image: perro2, name: 'Pog',gender: 'Macho',age:'3', color:'Blanco',location:'Itagui', info:'El Pug es una raza de perro pequeña conocida por su apariencia adorable y su personalidad encantadora.'},
    {id: 3,image: perro3, name: 'Golde Retriver',gender: 'Macho',age:'7', color:'Cafe',location:'Bello', info:'El Golden Retriever es una de las razas de perro más populares y queridas en todo el mundo. Son conocidos por su apariencia hermosa, su naturaleza amigable y su inteligencia.'},
    {id: 4,image: perro4, name: 'Shih Tzu',gender: 'hembra',age:'2', color:'Blanco',location:'Niquia', info:'El Shih Tzu es una raza de perro pequeño y encantador, conocido por su apariencia distintiva y su personalidad amigable.'},
    {id: 5,image: perro5, name: 'Pastor Aleman',gender: 'Macho',age:'4', color:'Negro',location:'Medellin', info:'El Pastor Alemán es una raza de perro grande y versátil, conocida por su inteligencia, lealtad y habilidades como perro de trabajo.'},
    {id: 6,image: perro6, name: 'Pomerania',gender: 'hembra',age:'2', color:'Cafe',location:'Niquia', info:'El Pomerania es una raza de perro pequeño y encantador, conocida por su pelaje esponjoso y su personalidad animada.'},
    {id: 7,image: perro7, name: 'Schnauzer Estandar',gender: 'Macho',age:'5', color:'Gris',location:'Medellin', info:'El Schnauzer Estándar es una raza de perro mediana conocida por su apariencia distintiva y su naturaleza enérgica y leal.'},
    {id: 8,image: perro8, name: 'Bulldog',gender: 'hembra',age:'3', color:'Cafe',location:'Bello', info:'El Bulldog es una raza de perro mediana conocida por su apariencia robusta y su naturaleza calmada y amigable.'},
    {id: 9,image: perro9, name: 'husky',gender: 'hembra',age:'3', color:'negro',location:'Itagui', info:'El Pomsky es una raza híbrida resultante del cruce entre un Pomerania y un Husky Siberiano. Esta mezcla combina la apariencia llamativa y la personalidad vivaz de ambas razas progenitoras'},
    {id: 10,image: perro10, name: 'Cockapoo',gender: 'Macho',age:'4', color:'Cafe',location:'Medellin', info:'El Cockapoo es una raza de perro que es una mezcla entre el Cocker Spaniel (Americano o Inglés) y el Poodle (Caniche)'},
    {id: 11,image: perro11, name: 'Labradoodle',gender: 'Macho',age:'4', color:'Blanco',location:'Niquia', info:'La combinación de los rasgos familiares del labrador retriever y la naturaleza inteligente y cariñosa'},
    {id: 12,image: perro12, name: 'Puggle',gender: 'hembra',age:'5', color:'Cafe',location:'Niquia', info:'El puggle, mezcla de pug y beagle, es un compañero cariñoso y activo.'},
    {id: 13,image: perro13, name: 'Cavachón',gender: 'hembra',age:'3', color:'Blaco',location:'Medellin', info:'con el cavachón puedes esperar un animalito mimoso y devoto, cuya naturaleza amante de la diversión te proporcionará mucho entretenimiento.'},
    {id: 14,image: perro14, name: 'Cavapoo',gender: 'hembra',age:'3', color:'Cafe',location:'Itagui', info:'. A estos perros de gran corazón les encanta dar y recibir atención, así que lo mejor para ellos es estar en tu compañía o, mejor aún, acurrucados en tu regazo'},
    {id: 15,image: perro15, name: 'Lurcher',gender: 'Macho',age:'6', color:'blanco',location:'Bello', info:'A menudo confundidos con una raza propiamente dicha, los lurchers son en realidad una raza mixta. Son una combinación de un lebrel, como un galgo o un lebrel irlandés, con otra raza de trabajo, del grupo de los terriers o de los pastores.'},
    {id: 16,image: perro16, name: 'Schnoodle',gender: 'hembra',age:'3', color:'Gris',location:'Medellin', info:'Son perros falderos leales con mucho amor que dar y una gran elección para los dueños primerizos o de edad avanzada. '},
    {id: 17,image: perro17, name: 'Chiweenie',gender: 'Macho',age:'5', color:'Cafe',location:'Niquia', info:' Un perro con un gran corazón y personalidad. '},
    {id: 18,image: perro18, name: 'Morkie',gender: 'hembra',age:'1', color:'negro',location:'Medellin', info:'Este cruce de los terriers yorkshire y maltés es muy cariñoso, con una gran personalidad y una vena vivaz. '},
    {id: 19,image: perro19, name: 'Bernedoodle',gender: 'hembra',age:'1', color:'negro',location:'Bello', info:' conocido por su carácter tierno y cariñoso. Son perros inteligentes y tienen fama de ser los más testarudos de los cruces de caniche, por lo que un buen adiestramiento y una socialización temprana son fundamentales'},
    {id: 20,image: perro20, name: 'Aussiedoodle',gender: 'hembra',age:'2', color:'Cafe',location:'Itagui', info:'es una combinación del leal y juguetón pastor australiano y la inteligencia del caniche. Como compañeros afectuosos, son buenos perros de terapia debido a la facilidad con que establecen vínculos con los humanos.'},
  ];
  export default PerroData;