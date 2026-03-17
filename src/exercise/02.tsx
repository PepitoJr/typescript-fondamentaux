"use client"
// Les tableaux
// http://localhost:3000/alone/exercise/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Créer une variable `names` mais sans initiliser de valeurs
  //  ajoute ensuite 'John' et 'doe' à `name` sans utiliser la méthode `push()`
  let names: string[] = []

  names = ["John", "doe"]

  // 🤖 affiche 'Il y a 2 noms' dans le navigateur grace à `displayText` et `.length`
  displayText(`Il y'a ${names.length} noms`)
  // 🐶 Créer une constante `games` et initialise avec un tableau vide
  let games: string[] = []
  // avec la méthode `push()` ajoute 3 jeux
  games.push("soccer", "basket-Ball", "handball")
  // ⛏️ const games
  // 🤖 affiche le nombre d'élément à l'ecran
  displayText(` il ya ${games.length} jeux dans le tableau`)

  // 🐶 Créer une constante `things` : un tableau qui peut prendre n'importe quel type de donnée

  let things: any[] = []

  // ⛏️ const things
  things.push("yop", 2, true, false)
  // 🤖 affiche le nombre d'élément à l'ecran
  displayText(`Il ya ${things.length} dans ce tableau things`)
  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
