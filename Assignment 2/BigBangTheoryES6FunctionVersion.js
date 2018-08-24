/***
*
** Subhro Chatterjee @ 2018
*
***/
//import the JSON dataSet from the file
let dataSet = require('./BigBangTheoryDataSet.json');
//convert the JSON data into string
var dataStr = JSON.stringify(dataSet);
//convert the above string data into javascript object
var objectSet = JSON.parse(dataStr);
//Javascript object ready now use it in the code.

//Problem statement 2
//1.
let BigBangTheory = (seasonNumber,episodeNumber) => {
   let episodes =objectSet._embedded.episodes;
   if(seasonNumber >= 1 && seasonNumber <= 11){
       if(episodeNumber >= 1 && episodeNumber <= 17){
         for(const episode in episodes){
           if(objectSet._embedded.episodes[episode].season === seasonNumber
              && objectSet._embedded.episodes[episode].number === episodeNumber){
                console.log(objectSet._embedded.episodes[episode]);
              }
         }
       }else{
          console.log(`Invalid Episode Number provided ${episodeNumber}. Each season has 1-17 episodes`);
       }
   }else{
     console.log(`Invalid SeasonNumber Provided ${seasonNumber}. Currently Season 1-11 Aired.`);
   }
 }
console.log('Function that prints Episode details about an episode by filtering through seasonNumber and episodeNumber');

//Test-cases -->
//seasonNumber and episodeNumber valid
//BigBangTheory(11,17);

//SeasonNumber invalid but episodeNumbervalid
//BigBangTheory(12,17);

//seasonNumber valid but episodeNumber invalid
//BigBangTheory(11,18);

//seasonNumber & episodeNumber both invalid
//BigBangTheory(15,19);


//2.Function to display all the details of an episode ,when episodeIds provided
const BigBangTheoryIds =  (...episodeIds) => {
    for(const eachEpisodeId of episodeIds){
      //loop through total number of episodes provided
      for(const index in objectSet._embedded.episodes){
            if(eachEpisodeId === objectSet._embedded.episodes[index].id){
              console.log(objectSet._embedded.episodes[index]); break;
            }
      }
    }
}
console.log(`Function to print the BingBangTheory Episodes by passing 1+ ids`);
const episodeIds = [2913,2914,9999,3000,2986,2992,3050]
//BigBangTheoryIds(...episodeIds);

//3. Function to display episodedetails , when searched by episodeName
const BigBangTheoryByName =  (episodeName) => {
    for(const index in objectSet._embedded.episodes){
      if(episodeName === objectSet._embedded.episodes[index].name){
        console.log(objectSet._embedded.episodes[index]);
      }
    }
}
console.log(`Function to print the BingBangTheory Episode by its name`);
//BigBangTheoryByName('The Scavenger Vortex');
