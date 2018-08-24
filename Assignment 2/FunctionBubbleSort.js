/***
*
** Subhro Chatterjee @ 2018
*
***/
//Bubble Sort ES6 version
let bubble_Sort =  (...a) => {
        let swapp;
        let n = a.length - 1;
        let x = a;
        do{
            swapp=false;
            for(const i in a){

              if(a[i] < a[i+1]){
                let temp  = a[i];
                a[i] = a[i+1];
                swapp= true;
              }

            } n--;
        }while(swapp);
    return x;
  };

//Test-Cases

// Passing Objects --> Key:value pairs
 // const dataSetObject =   {'a':'a','b':'b','c':'c','d':'d'};
 // console.log(`Call made by passing objects : \n `,bubble_Sort(dataSetObject));

//Passing arrays
// const dataSetArraySet1 = ['Mike','Ted','Taylor','sheldom'];
// const dataSetArraySet2 = [11,21,3,84,32,25];
// console.log(`Call made by passing dataSetArraySet 1 : \n `,bubble_Sort(...dataSetArraySet1));
// console.log(`Call made by passing dataSetArraySet 2 : \n `,bubble_Sort(...dataSetArraySet2));

//Passing Objects in an array
// const dataSet = [
//   {
//     'id':1,
//     'name':'Mike'
//   },
//   {
//     'id':2,
//     'name':'Ted'
//   },
//   {
//     'id':3,
//     'name':'Jackson'
//   },
// ]
// console.log(`Call made by passing Array of Objects : \n `,bubble_Sort(...dataSet));
