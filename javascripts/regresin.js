// API : https://reqres.in/api/users?page=1&per_page=12

printUser = (users) => {
    users.map( user => {
        console.log('$(user.id) : $(user,first:name) $(user.last_name)');
    })
}

fetchUsers = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users?page=1&per_page=12");
        const UsersData = await response.json();
        console.log(UsersData.data);
    } catch (error) {
        
    }
}

fetchUsers();

fetchUserById = async (id) => {
    try {
        const response = await fetch('https://reqres.in/api/users/'+ id);
        const userResponse = await response.json();
        console.log(userResponse.data);
    } catch (error) {
        
    }
}

fetchUserById(8);


createUser = async (user) =>
{
    try
    {
        const response = await fetch('https://reqres.in/api/users/',
        {
            method: 'POST',
            headers:
            {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log(response.status);
        console.log(response.statusText);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        
    }

}

const newUser = {
    email: "John@wick.com",
    first_name: "John",
    last_name: "Wick",
    job: "Hitman"
}

createUser (newUser);