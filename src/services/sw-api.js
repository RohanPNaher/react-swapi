const baseUrl = 'https://swapi.dev'

export function getShipList() {
  return fetch(`${baseUrl}/api/starships`)
    .then(res => res.json())
}

export function getShipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
    .then(res => res.json())
}