import React from 'react'


function Login() {
    return(
        <div id = "loginWrapper">
			<h1>Login</h1>
			<input type = "text" placeholder = "Username" />
			<input type = "password" placeholder = "Password" />
			<br/>
			<a href = "#">login</a>
		</div>
    )
}

export default Login;