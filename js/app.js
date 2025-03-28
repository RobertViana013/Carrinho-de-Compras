let totalGeral=0;
document.getElementById ('lista-produtos').innerHTML = '';
document.getElementById ('valor-total').innerHTML = '';

function adicionar () {
    //recuperar valores : nome , quantidade , valor .
    let produto = document.getElementById ('produto').value;
    let nomeProduto = produto.split('-')[0];
    // o .split serve para conseguirmos quebrar no meio a string ou seja 
    // Aqui option value="Fone de ouvido - R$100">Fone de ouvido - R$100</option>
    // foi usado o .split para separar pelo hifén - . Assim ele consegue me da oque foi escrito antes ou depois 
    // as partes separadas sao retornadas em arrays , portando usamos 0 para pegar a primeira parte separada
    // ou 1 para a segunda .
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (produto === ''){
        alert ('Você precisa escolher um produto .');
        return;
    }
    if (quantidade <= 0 || isNaN(quantidade)){
        alert ('Você precisa colocar um numéro válido de quantidade !');
        return;
    }
    ;
    //calcular o preço ,o nosso subtotal
    let preco= quantidade*valorUnitario;
    // atualizar o carrinho
    let carrinho = document.getElementById ('lista-produtos');//Identifiquei onde está a lista que me aparece o carrinho
    //Após declarado .innerHTML para mudarmos oque está escrito , olhamos na pagina oque precisamos mudar.
    // Em carrinho , toda  vez que eu coloco um campo adicional ele estava apagando oque ja tinha 
    // para mudar isso preisamos nao substituir , mas adicionar , ou seja 
    // carrinho = carrinho + (oque vai ser adicionado.)
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;
        //Aqui dado o valor da quantidade , o nome do produto e o preço , subistituindo oque estava escrito antes .
    
    

    //atualizar o valor total da compra
    totalGeral = totalGeral + preco
    let campoTotal = document.getElementById ('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade').value= 0;
    

     
}
// para limpar , simplifiquei usei a mesma ordem para deixar os campos limpos quando iniciar 
// tambem adicionei um window.confirm('texto para exibir sobre a confirmação')é preciso que esteja dentro de um let
//  assim caso o usuario escolha confirmar , o campo volta para o status inicial que é campo limpo.
function limpar () {
    let confirmacao = window.confirm ('Clique ok para limpar o carrinho .');
    if ( confirmacao === true ){
        document.getElementById ('lista-produtos').innerHTML = '';
        document.getElementById ('valor-total').innerHTML = ''
        totalGeral;
    }
    totalGeral = 0;

    
    
    

}

