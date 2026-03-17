"use client"
// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  //BONUS
  enum Protocol {
    HTTP = "http",
    HTTPS = "https",
    FTP = "ftp",
  }
  // 🐶 Déclare un type `Connexion` un tuple contennant toutes les informations utile a la connexion
  type Connexion = [string, Protocol, string, number, string, string]
  // - le nom de la connexion  (ex : Connexion à Google) `string`
  // - le protocole (ex : ftp, http) `string`
  // - le hostname (ex : google.com) `string`
  // - le port  (ex : 423) `number`
  // - le username : (ex : admin) `string`
  // - le password (ex : admin) `string`
  // 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

  // type Connexion

  // 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
  let google: Connexion = [
    "Google",
    Protocol.HTTP,
    "google.com",
    8080,
    "admin",
    "admin",
  ]

  // https google.com 443
  // Affiche le resultat à l'ecran avec le code
  // 🤖 displayText(`Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)
  displayText(
    `Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `
  )
  // 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

  let pinterest: Connexion = [
    "pinterest",
    Protocol.HTTPS,
    "pinterest.com",
    7015,
    "guest",
    "guest",
  ]
  let facebook: Connexion = [
    "facebook",
    Protocol.FTP,
    "facebook.com",
    243,
    "guest",
    "guest",
  ]
  let youtube: Connexion = [
    "youtube",
    Protocol.HTTPS,
    "youtube.com",
    403,
    "guest",
    "guest",
  ]

  displayText(
    `Connexion ${pinterest[0]} : ${pinterest[1]}://${pinterest[2]}:${pinterest[3]} `
  )
  displayText(
    `Connexion ${facebook[0]} : ${facebook[1]}://${facebook[2]}:${facebook[3]} `
  )
  displayText(
    `Connexion ${youtube[0]} : ${youtube[1]}://${youtube[2]}:${youtube[3]} `
  )
  // 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
  let connexions: Connexion[] = [facebook]

  // Ajoute des connexion via l'initialisation et via la méthode `push`
  connexions.push(google, pinterest, youtube)
  displayText(`il ya ${connexions.length} Connexions`)

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
