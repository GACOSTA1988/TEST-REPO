import { ArtistByName } from './../src/music-stack-attack.js';
// import { setIntervalAsync } from 'set-interval-async/dynamic';
// import { clearIntervalAsync } from 'set-interval-async';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {

  // THIS FUNCTION WILL SEARCH ARTIST BY NAME
  $('#artistSection').click(function(event) {
    event.preventDefault();

    const inputedArtist = $('#inputedName').val();
    // THIS WILL RUN API CALL FOR ARTIST BY NAME
    (async () => {
      let newArtistByName = new ArtistByName();
      const response = await newArtistByName.getArtistByName(inputedArtist);
      console.log(response);

      getElements(response);
    })();

    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      
      // THIS WILL CATCH IF SEARCH RESULTS ARE BAD(NON ERROR TYPE)
      const doesArtistExist = response.meta.total > 0;

      const canArtistBeFound = (inputedArtist) => {
        if (doesArtistExist){
          return `Please see details below for: ${inputedArtist} `;
        } else {
          return `No artist in our database match ${inputedArtist}, please try another search term`;
        }
      }

      $("#showArtistByNameSection").text(canArtistBeFound(inputedArtist));

      // ARTIST 1 DETAILS
      // TARGETED INFO BELOW

    }
  });
});
