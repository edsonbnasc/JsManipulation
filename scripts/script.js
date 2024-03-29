// usado por causa do defer que esta no inicio do html

document.addEventListener('DOMContentLoaded',(event) =>{
    event.preventDefault();

    const form = document.querySelector('form')
    form.addEventListener('submit', loadUserData)

    // alert("A pagina foi totalmente carregada e js foi implantado!")
    
    loadUserDataList();
})

function loadUserData(event){
    event.preventDefault();

    let listUser = []

    const userData = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        age:document.getElementById('age').value
    }

    if(localStorage.getItem('users')){
        listUser = JSON.parse(localStorage.getItem('users'))
    }

    listUser.push(userData)
    localStorage.setItem('users', JSON.stringify(listUser))

    console.log(listUser);
    window.location.reload();


}

// criaçaõ da tabela para exibir os dados na tela quando tiver dados no local Storage
const loadUserDataList = ()=>{

    const tableData = document.getElementById('tableBodyList');
    if(localStorage.getItem('users')){
        const listUsers = JSON.parse(localStorage.getItem('users')); //json -> objeto
        
        let template = '';
        listUsers.forEach(user => {
            template += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
            </tr>
            `
        });
        tableData.innerHTML = template;
    }else{
        alert("Nenhum usuário cadastrado!")
    }

}