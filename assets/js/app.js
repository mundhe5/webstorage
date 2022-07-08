let cl=console.log;

const info=document.getElementById("info");


let  data= [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
       userId: 1,
       id: 2,
       title:"qui est esse",
       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
       userId: 1,
       id: 3,
       title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
]


let jesondata=JSON.stringify(data);
cl(jesondata)

localStorage.setItem("setdata",jesondata);


let getdata=localStorage.getItem("setdata")
// cl(getdata);

let getjsdata=JSON.parse(getdata);
// cl(getjsdata)


let result="";

getjsdata.forEach((element , i) => {
    
    result +=`
                    <tr>
                        <td>${i+1}</td>
                        <td>${element.id}</td>
                        <td>${element.userId}</td>
                        <td>${element.title}</td>
                        <td>${element.body}</td>
                       
                    </tr>
    
    `
});


info.innerHTML=result;


let person = {
    name:'komal',
    email:'komal@123',
    condrive:false
    
}




sessionStorage.setItem('saveperson', JSON.stringify( person));

let getperson = JSON.parse(sessionStorage.getItem('saveperson'))
cl(getperson)

const pdata = document.getElementById('data');

pdata.innerHTML = getperson.name;

