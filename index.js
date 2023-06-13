const usuarios=[]

class Usuario{
  constructor(nome,sobrenome,idade,CPF){
  this.nome = nome;
  this.sobrenome=sobrenome;
  this.idade=idade;
  this.CPF = CPF;
  }
  formatarCpf(cpf){
   const cpfArray=cpf.split('')
   cpfArray.splice(3,0,'.')
   cpfArray.splice(7,0,'.')
   cpfArray.splice(11,0,'-')
   return cpfArray.join('')
  }
}

function exibirUsuarios() {
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';
  for(const usuario of usuarios){
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.textContent = usuario.nome;
    tr.appendChild(tdNome);
    const tdSobrenome=document.createElement('td');
    tdSobrenome.textContent = usuario.sobrenome;
    tr.appendChild(tdSobrenome);
    const tdIdade =document.createElement('td');
    tdIdade.textContent=usuario.idade;
    tr.appendChild(tdIdade);
    const tdCPF =document.createElement('td');
    tdCPF.textContent=usuario.CPF;
    tr.appendChild(tdCPF);
    tbody.appendChild(tr);
  }
}

function cadastrar(){
  const nome = document.getElementById('nome').value;
  const sobrenome=document.getElementById('sobrenome').value;
  const idade=document.getElementById('idade').value;
  const cpf =document.getElementById('cpf').value;

  const usuario =new Usuario(nome,sobrenome,idade,cpf);

  usuarios.push(usuario);
  if(usuario.CPF.length ===11){
    usuario.CPF= usuario.formatarCpf(cpf)
  }else{
    usuario.CPF = 'CPF não encontrado'
  }

  document.getElementById('form-cadastro').reset();

  exibirUsuarios();
}