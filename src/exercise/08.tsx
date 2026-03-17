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

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
