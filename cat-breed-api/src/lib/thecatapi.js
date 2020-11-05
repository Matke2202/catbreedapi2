const api_key = "blah"

async function getBreed(breed, api_key) {
  const data = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
  return await data.json()
}

async function searchBreed(breed){
  const found = await getBreed(breed, api_key)
  return {
    image: found[0].url,
    decription: found[0].breeds[0].description
  }
}


  