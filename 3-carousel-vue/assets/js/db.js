import { Image } from "./Models/Image.js"; // import of a default export

/* Image list */

const images = [
  new Image(
    './assets/img/01.webp',
    'Marvel\'s Spiderman Miles Morale',
    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'),
  new Image(
    './assets/img/02.webp',
    'Ratchet & Clank: Rift Apart',
    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'),
  new Image(
    './assets/img/04.webp',
    'Stray',
    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'),
  new Image(
    './assets/img/03.webp',
    'Fortnite',
    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."),
  new Image(
    './assets/img/05.webp',
    'Marvel\'s Avengers',
    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',),
]

export { images } // named export