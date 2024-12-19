const url = 'https://6763a87617ec5852cae98323.mockapi.io/users';


function login(event){
    event.preventDefault();
const login_username = document.querySelector('.login-username').value
const login_password = document.querySelector('.login-password').value

axios.get(url)
.then(function(res){
    const data = res.data
    data.find(function(user){
        if(login_username === user.username & login_password == user.password ){
            window.location.href = 'https://417-group-frontend-mkdj.vercel.app'
        }else{
            document.getElementById('error').innerHTML = 'Username or password is incorrect'
        }
    })


})
}