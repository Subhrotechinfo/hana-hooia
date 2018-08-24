Logic for Problem Statement 1: "Ecommerce.json" File

   A Ecommerce website should consist of basically few things.
    -   Customer Details / Seller Details :
          > The customer/seller can either buy/sell products online.
          > So it is mandatory to have the basic information  about the customer/seller.
          > Next is the type of products that the Ecommerce website is selling .
          > Products sold should consist of each and every details about the products.

Logic for Problem Statement 2: "Pokemon Functions"
Reference code file - "fetchingJsonDataPokemon.js"
DataSet: "DataSet.json"

  a. Function which takes Pokemon's name as argument and displays the Detail information.
    > Explanation :
              - Pass the pokemon name as argument to the function
              - Native way : loop through and check in the Pokemon array if the "name"
                field matches as that of the pokemon name print the pokemonDetail.

  b. Function which take pokemon's name as argument and chek if that pokemon is having
      same name as the “next_evolution”  name and then print the details.
    > Explanation :
              - Pass the pokemon name as argument to the function
              - Loop through and check if a pokemon has the field
                "next_evolution" (70 pokemons according to the given dataSet).
              - Upon finding all the pokemons who is having "next_evolution" field loop
                  through the "next_evolution" array.
              - Check if the pokemon name given matches that of the "next_evolution" name of a pokemon.
              - If found print all such pokemons

c. Function which takes pokemon's "weakness" as an argument and prints all such pokemon with the
   same weakness
   > Explanation :
              - Pass the pokemon's weakness as argument.
              - Every pokemon has "weaknesses" according to the DataSet("DataSet.json").
              - Loop through all the pokemon and also check that if the pokemon's weakness
                matches that of the weakness passed as an argument to the function.
              - Print all the pokemons found .
