//Let,Const & Var
/*We use these three words to declare the variables in JS and
they have differenr properties from each other

 let -> Can be Mutate mean we change values latter where we need
 const -> is Unmutate we can not change its value once define
 var -> similar to let but have scope issues (disscus later)
  */

 let user="Ali"
 user='jawad'
 console.log(user) //jawad
 
 const birthdayYear=1991;
 birthdayYear=1990;
 console.log(birthdayYear) //error

 var job="Programmer"
 job ='teacher'
 console.log(job) //teacher