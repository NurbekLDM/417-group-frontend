const url = 'https://6763a87617ec5852cae98323.mockapi.io/users';


function login(){
const login_username = document.querySelector('.login-username').value
const login_password = document.querySelector('.login-password').value

axios.get(url)
.then(function(res){
    const data = res.data
    if(login_username === data.username && login_password === data.password ){
        window.location.href = '417-group-frontend-mkdj.vercel.app'
    }else{
        alert('Username or password is incorrect')
    }

})
}