class Login{

login(){
    return cy.get("input[type='number']")
}

loginbtn(){
    return cy.get("input[type='submit']")
}
}

export default Login;