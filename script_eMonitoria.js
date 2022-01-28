let pontos=[
    [3,'atender prontamente',false],
    [5,'atenção',false],
    [6,'sem impacto',false],
    [11,'sistema',false],
    [16,'com impacto', false],
    [5,'demanda',false],
    [50,'médica',false],
    [100,'zerada',false],
    ]

// let pontos=[
//     [3,'1.1- Atender a ligação entre 05 e 15 segundos',false],
//     [2,'1.2- Saudar o cliente identificando-se',false],
//     [2,'1.3- Tratar o cliente pelo nome sempre que oportuno',false],
//     [3,'1.4- Fornecer número de protocolo da ligação quando solicitado',false],
//     [8,'1.5- Efetuar sondagem adequada para identificar a demanda',false],
//     [11,'2.1- Manusear os sistemas adequadamente',false],
//     [5,'2.2- Estar atento à operacionalização de sistema',false],
//     [6,'2.3- Deixar de fornecer informações corretas e completas – SEM impacto para o segurado',false],
//     [16,'2.4- Deixar de fornecer informações corretas e completas – COM impacto para o segurado',false],
//     [3,'2.6- Utilizar técnicas corretas para colocar o cliente em pausa',false],
//     [5,'2.8- Saber lidar com as diversas situações, poder de persuasão (argumentar corretamente), contorno de objeções',false],
//     [5,'2.9- Mostrar-se interessado ou empenhado em atender às solicitações do segurado',false],
//     [5,'2.10- Confirmar os dados para checar a autenticidade do segurado',false],
//     [2,'3.1- Domínio da língua Portuguesa',false],
//     [11,'3.2- Conduzir o atendimento de forma cortês',false],
//     [2,'3.3- Clareza na transmissão das informações, evitando termos técnicos (linguagem interna que o cliente desconheça)',false],
//     [3,'4.1- Encerrar o atendimento de forma cortês',false],
//     [5,'4.2- Registrar adequadamente o serviço no sistema de pós-atendimento',false],
//     [3,'4.3- Lembrar o usuário de participar da Pesquisa de Satisfação',false],
//     [2,'4.4- Resolver o problema/solicitação do usuário',false],
//     [50,'5.1- Atender a ligação entre 16 e 30 segundos',false],
//     [100,'6.1- Deixar de prestar serviço disponível no roteiro ou executar agendamento/requerimento sem autorização do usuário',false],
//     [100,'6.2- Passar informações confidenciais para o usuário',false],
//     [100,'6.3-Utilizar os sistemas para fins particulares',false],
//     [100,'6.4- Destratar o segurado: hostilidade, irritação, inconveniência e falta de paciência',false],
//     [100,'6.5- Atender a ligação após 31 segundos',false],
//     [100,'6.6- Deixar o segurado na linha sem prestar atendimento',false],
//     [100,'6.7- Transferir ou encerrar a ligação indevidamente',false],
//     [100,'6.8-Fazer análise de mérito durante o atendimento',false],
//     [100,'6.9- Agendar ou requerer o serviço para a pessoa errada por negligência ou imprudência',false],
//     [100,'6.10- Agendar ou requerer serviço errado por negligência ou imprudência',false],
//     [100,'6.11- Agendar para o município ou agência errada por negligência ou imprudência',false],
//     [100,'6.12- Não informar os documentos necessários após o agendamento',false]
// ]

var nota = 100
let n = document.getElementById('n')   //'n' é o span da nota dentro da div
n.innerHTML = nota
let img = document.createElement('img') // img teste
img.setAttribute('id','foto') // img teste

var inserir = document.getElementById('exibirResultados')

    
let nomePonto2 =[] 

    function criar(){
        const itens = document.getElementById('itens')
        for (let index = 0; index < pontos.length; index++) {
            itens.innerHTML += `<div>
            <input type="radio" name="t${index}" id="sim${index}" checked onclick="lançar()">
            <label for="sim">sim</label>
            <input type="radio" name="t${index}" id="não${index}" onclick="lançar()">
            <label for="não">não</label>
            <span id="tex${index}">     -     </span> 
            </div>`
        }
        for (let i = 0; i < pontos.length; i++) {
            nomePonto2.push(document.getElementById(`tex${i}`))
            nomePonto2[i].innerHTML += `[ ${pontos[i][1]} → ${pontos[i][0]} pontos]`       
        } 
    }

    function lançar(){
    
        nota = 100
        var notaFinal = document.getElementById("resultados")//span da nota no HTML
        var foto1 = document.getElementById("foto1")
        var radyn = []
       

        for (let e = 0; e < pontos.length; e++) {
            radyn.push(document.getElementsByName(`t${e}`))
            // console.log(radyn[e][0])
        }
        

    function descontar(arei){
        if(arei[2]==true){
            nota-=arei[0]
        }
    }

    for (let i = 0; i < pontos.length; i++) {
        if(radyn[i][1].checked){   
            pontos[i][2]=true
        }else{
            pontos[i][2]=false
        }
        descontar(pontos[i])
    }

   if(nota<0){
       nota=0
   }
   n.innerHTML = nota
   if(nota>=90){
       img.setAttribute('src','midia/Joinha.png')
       
   }else{
    img.removeAttribute('src','midia/Joinha.png')
   }
   foto1.appendChild(img) //joga a imagem na div da var foto1
   //console.log(pontos)  
}
 
//Armazenar monitorias
    var arrayMonitorias = []

function armazenar(){   

    var descriçãoMonitoriaElemento = document.getElementById('descrição')
    var descriçãoMonitoria=descriçãoMonitoriaElemento.value
    var nomeTeleatendenteElemento = document.getElementById('nomeTeleatendente')
    var nomeTeleatendente =  nomeTeleatendenteElemento.value
    var equipeTeleatendenteElemento = document.getElementById('equipeTeleatendente')
    var equipeTeleatendente = equipeTeleatendenteElemento.value
    var matriculaTeleatendenteElemento = document.getElementById('matriculaTeleatendente')
    var matriculaTeleatendente = matriculaTeleatendenteElemento.value
    
        
    let monitoria = {
        matricula: matriculaTeleatendente,
        operador: nomeTeleatendente,
        equipe: equipeTeleatendente,
        arrayMonitoria: pontos,
        nota: nota,
        descrição: descriçãoMonitoria,
        data:   new Date()
    }

    arrayMonitorias.push(monitoria)
    alert('Monitoria Incluida!')
    console.log(arrayMonitorias)

    descriçãoMonitoriaElemento.value=""
    nomeTeleatendenteElemento.value=""
    equipeTeleatendenteElemento.value=""
    matriculaTeleatendenteElemento.value=""

    marcarTudoSim()
    mostrarMonitorias()
    
}

function marcarTudoSim()    {
    for (let o = 0; o < pontos.length; o++) {
        document.getElementById(`sim${o}`).click()
    }
}

function mostrarMonitorias(){
    var resultadoExibir = ""
    for (let r = 0; r < arrayMonitorias.length; r++) {
       resultadoExibir += `<div>${arrayMonitorias[r].matricula}| ${arrayMonitorias[r].operador}| ${arrayMonitorias[r].equipe}| Nota → ${arrayMonitorias[r].nota}</div>`
        
    }
    inserir.innerHTML=resultadoExibir
}