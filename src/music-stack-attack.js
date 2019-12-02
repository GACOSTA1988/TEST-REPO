export class ArtistByName {
  async getArtistByName(inputedArtist) {
    try {

      // THIS WILL CALL API WITH ARTIST NAME AS QUERY INPUT
      let response =  await fetch(`https://api.discogs.com/database/search?q=${inputedArtist}&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`);

        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch(error) {
        alert("sorry website is grumpy, check back later!" + error.message);
        console.error("There was an error handling your request: " + error.message);
      }
    }
  }
