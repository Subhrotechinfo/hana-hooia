/***
*
** Subhro Chatterjee @ 2018
*
***/
//import the JSON dataSet from the file
var dataSet = require('./DataSet.json');
//convert the JSON data into string
var dataObject = JSON.stringify(dataSet);
//convert the above string data into javascript object
var objectData = JSON.parse(dataObject);
//Javascript object ready now use it in the code.

//function for displaying the pokemon details
function displayPokemonDetail(name){
  //check if the user has provided valid input
  for(var index = 0 ; index < objectData.pokemon.length; index++){
      if(name === objectData.pokemon[index].name){  //checking for name match
        console.log(objectData.pokemon[index]);
      }
  }
}
console.log('Function to display the Pokemon informations for a given Pokemon');
var pokemonName = 'Charizard';
displayPokemonDetail(pokemonName);

 //the function produces output who is having Next_Evolution as the name.
console.log('Function displaying Pokemon\'s name whose is'+
                          'having `Next_Evolution` name as given: ');
displayPokemonDetailWithNext_Evolution(pokemonName);

function displayPokemonDetailWithNext_Evolution(restArgs){
    //loop through all the elements
      for(var index= 0 ; index < objectData.pokemon.length ; index++){
            //loop
              if(objectData.pokemon[index].hasOwnProperty('next_evolution')){
                //loop through only those pokemons whose next_evolution exist
                var x = restArgs[index];
                //if next_evolution exist get the length of that array
                const next_evolution_Len = objectData.pokemon[index].next_evolution.length;
                  for(var a=0; a< next_evolution_Len ; a++){
                    //loop through
                   if(restArgs == objectData.pokemon[index].next_evolution[a].name){
                     //if match found print on the console
                      console.log(objectData.pokemon[index]);
                   }
                 }
            }
          }//end for

}//end function

//weakness function
function displayPokemonsWeakness(weakness){
      for(var index= 0 ; index < objectData.pokemon.length ; index++){
        //loop through the DataSet
          for(var weak = 0 ; weak < objectData.pokemon[index].weaknesses.length ; weak++){
            //loop through the weakness array
            if(weakness === objectData.pokemon[index].weaknesses[weak]){
                console.log(objectData.pokemon[index].name);
              }
          }

        }
}//end function
var weaknesses = 'Ghost';
//var weaknesses = 'Dark';
//var weaknesses = 'Bug';
console.log('\nFunction displaying Pokemons found with the same weakness');
displayPokemonsWeakness(weaknesses);
