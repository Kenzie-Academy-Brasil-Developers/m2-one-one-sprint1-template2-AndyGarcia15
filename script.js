const timeDeInstrutores = [
  {
    nome: "Hudson",
    modulo: 1,
    numeroAlunos: 548,
    imagem: "https://ca.slack-edge.com/TQZR39SET-U010237FB0R-535dd62350e1-512",
  },
  {
    nome: "Victor",
    modulo: 2,
    numeroAlunos: 463,
    imagem: "https://ca.slack-edge.com/TQZR39SET-U01CNRGKJBW-4c06a31ba500-512",
  },
  {
    nome: "Tsunode",
    modulo: 3,
    numeroAlunos: 427,
    imagem: "https://ca.slack-edge.com/TQZR39SET-U03L96UCZ6H-d5b942663e19-512",
  },
  {
    nome: "Fabio Junior",
    modulo: 4,
    numeroAlunos: 400,
    imagem: "https://ca.slack-edge.com/TQZR39SET-U02DRK9NK0T-fe2c1f2e941c-512",
  },
];


const liPredefinida = document.querySelector('li')

liPredefinida.remove();

const ul = document.querySelector('ul')

function instrutores(arr, endereco){

  for(let i = 0; i < arr.length;i++){
    if(arr[i].nome == 'Victor' || arr[i].numeroAlunos > 450){
      
      let li = document.createElement('li')
      let p = document.createElement('p')
      let img = document.createElement('img')

      li.className = 'card--instrutor'
      p.textContent = `eu me chamo ${arr[i].nome} e serei seu instrutor no módulo ${modulo}`
      img.src = arr[i].imagem

      li.appendChild(p)
      li.appendChild(img)
      endereco.appendChild(li)
    }
  }
}

instrutores(timeDeInstrutores,ul)