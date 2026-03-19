"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  // 🐶 Remplace le type `any` de `doSomeThing` qui est trop généraliste
  //  pour ques les fonctions `doSomeThing` ci-après fonctionnement
  let doSomeThing: Function

  // ❌ NE PAS MODIFIER
  doSomeThing = () => {
    displayText(`Hello developpeur`)
  }
  doSomeThing()

  doSomeThing = (name: string) => {
    displayText(`Hello ${name}`)
  }
  doSomeThing("John")
  // ❌ END

  // 🐶 Implemente et spécifie les paramètres et types de la fonction `sum`
  // n'oublie pas de spécifier le type de retour
  function sum(a: number, b: number): number {
    return a + b
  }

  // 🚀 N'oublie pas les bonus

  //bonus 2

  type CalculExpFunction = {
    description: string;
    (nbr: number): number
  }

  //creation de la fonction callback
  let callback: (nombre: number, puissance?: number) => number
  callback = (nombre: number, puissance?: number) => {
    return Math.pow(nombre, puissance || 1)
  }

  displayText(`${callback(4, 5)}`)
  //creation de la fonction carre

  function carre(nbr: number) {
    return nbr * nbr
  }
  carre.description = "fonction du carre"
  // creation de la fonction calculExp
  let calculExp: (cb: CalculExpFunction, base: number) => number
  calculExp = (cb: CalculExpFunction, base: number) => cb(base)

  displayText(`${calculExp(carre, 5)}`)
  // la fonction cube
  let cube: (nbr: number) => number
  cube = (nbr: number) => nbr * nbr * nbr

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
