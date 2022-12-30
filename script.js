document.querySelector('#getText').addEventListener('click', getText);
function getText() {
    fetch('sample.txt')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('#output').innerHTML = data
        })
        .catch((err) => console.log(err))
}
document.querySelector('#getUsers').addEventListener('click', () =>{
    fetch('users.json')
    .then((res) => res.json())
    .then((data) =>{
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">ID: ${user.name}</li>
                    <li class="list-group-item">ID: ${user.email}</li>
                 </ul>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
});
document.querySelector('#getPosts').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) =>{
        let output = '<h2>Postsh2>';
        data.forEach(function(post){
            output += `
                     <div class="card card-body mb-3 ">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                     </div>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
})
document.querySelector('#addPost').addEventListener('click', (e)=>{
    e.preventDefault();
    let title = document.querySelector('#title');
    let body = document.querySelector('#body');
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Accept': 'appication/json, text/plin, */*',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) =>res.json())
    .then((data) => console.log(data))
})



// document.querySelector('#getText').addEventListener('click', getText);
// document.querySelector('#getUsers').addEventListener('click', getUsers);
// document.querySelector('#getPosts').addEventListener('click', getPosts);
// document.querySelector('#addPost').addEventListener('submit', addPost);
// function getText() {
//     fetch('sample.txt')
//         .then((response) => response.text())
//         .then((data) => {
//             document.querySelector('#output').innerHTML = data
//         })
//         .catch((err) => console.log(err))
// }


// function getUsers() {
//     fetch('users.json')
//         .then((res) => res.json())
//         .then((data) => {
//             let output = '<h2>Users</h2>';
//             data.forEach((user) => {
//                 output += `
//             <ul class="list-group mb-3">
//                <li class="list-group-item">ID: ${user.id}</li>
//                <li class="list-group-item">ID: ${user.name}</li>
//                <li class="list-group-item">ID: ${user.email}</li>
//             </ul>
//             `;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
// }
// function getPosts(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '<h2>Posts</h2>';
//         data.forEach((post) => {
//             output += `
//         <div class="card card-body mb-3 ">
//            <h3>${post.title}</h3>
//            <p>${post.body}</p>
//         </div>
//         `;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
// }

// function addPost(event){
//     event.preventDefault();

//     let title = document.querySelector('#title').value;
//     let body = document.querySelector('#body').value;

//     fetch('https://jsonplaceholder.typicode.com/photos',{
//         method: 'POST',
//         header: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//         },
//         body:JSON.stringify({title:title, body:body})
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }