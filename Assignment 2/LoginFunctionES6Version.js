/***
*
** Subhro Chatterjee @ 2018
*
***/

//Problem Statement 1:

let checkLogin = (email, password, allUsers) => {
  let isUserFound = false;
  let passwordCorrect = false;
  for (const currentUser in allUsers){
    console.log(currentUser);

    if(allUsers[currentUser]['email'] == email){

      if(allUsers[currentUser]['password'] == password){
        isUserFound= true;
        passwordCorrect=true;
        break;
      }else{
        isUserFound= true;
        passwordCorrect=false; break;
      }
    }else{
      isUserFound = false;
    }
  }//loop ends

  if(isUserFound == true && passwordCorrect ==true){
    console.log('You are logged in')
  }else if(isUserFound  == true && passwordCorrect == false){
    console.log('You have provided incorrect password');
  }else{
    console.log('No user with this email found');
  }
};

//UseCases Use the dummy set

//DataSet 1
//dummy data for the problem set
let DataSet1 = {
  'Subhro':{'email':'emailid1@email.com','password':'password1'},
  'Mike':{'email':'emailid2@email.com','password':'password2'},
  'Iden':{'email':'emailid3@email.com','password':'password3'},
  'Clinton':{'email':'emailid4@email.com','password':'password4'}
};
//valid email&password
checkLogin('emailid1@email.com','password1',DataSet1);
//valid emailID but invalid password
checkLogin('emailid2@email.com','password3',DataSet1);
//invalid emailID but valid password
checkLogin('emailid88@email.com','password4',DataSet1);

//DataSet2
let DataSet2 = [
    {
      'name':'Subhro',
      'email':'emailid1@email.com',
      'password':'password1'
    },
    {
      'name':'Chester',
      'email':'emailid2@email.com',
      'password':'password2'
    },
    {
       'name':'Jessy',
       'email':'emailid3@email.com',
       'password':'password3'
    },
    {
       'name':'Mike',
       'email':'emailid4@email.com',
       'password':'password4',

    }

];

//valid email&password
checkLogin('emailid1@email.com','password1',DataSet2);
//valid emailID but invalid password
checkLogin('emailid2@email.com','password3',DataSet2);
//invalid emailID but valid password
checkLogin('emailid88@email.com','password4',DataSet2);
