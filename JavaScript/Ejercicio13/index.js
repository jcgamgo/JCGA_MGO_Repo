console.log('Ejercicio 13')
//Usuarios premium

const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
    ];

    users.forEach(user => { //Itera el array de usuarios y escribe la frase que cumple la condición
        if(user.premium == true){
          console.log('El usuario', user.username, ' es premium')
        }
      });

    const noPremium = users.filter(function(user){ //Filtra usuarios no premium
        return user.premium == false
        });

    const nuevoArray = noPremium.map(function users(obj) {
        return obj.username; //Crea nuevo array con los usuarios no premium
        });
        
        console.log("Array de usuarios no premium ->" ,nuevoArray);   
