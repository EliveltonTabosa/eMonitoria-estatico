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

var nota = 100
let n = document.getElementById('n')   //'n' é o span da nota dentro da div
n.innerHTML = nota
let img = document.createElement('img') // img teste
img.setAttribute('id','foto') // img teste

    
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
    var equipeTeleatendenteElemento = document.getElementById("equipeTeleatendente")
    var equipeTeleatendente = equipeTeleatendenteElemento.value
        
    let monitoria = {
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

    marcarTudoSim()
    
}

function marcarTudoSim()    {
    for (let o = 0; o < pontos.length; o++) {
        document.getElementById(`sim${o}`).click()
    }
}