let pontos=[
    [3,'atender prontamente',false],
    [5,'atenção',false],
    [6,'sem impacto',false],
    [11,'sistema',false],
    [16,'com impacto', false],
    [100,'zerada',false],
    ]
var nota = 100
var n = document.getElementById('n')   //'n' é o span da nota dentro da div
n.innerHTML = nota
var img = document.createElement('img') // img teste
img.setAttribute('id','foto') // img teste

var linha1 = document.getElementById('linha1')
linha1.innerHTML += `[ ${pontos[0][1]} → ${pontos[0][0]} pontos]`
var linha2 = document.getElementById('linha2')
linha2.innerHTML += `[ ${pontos[1][1]} → ${pontos[1][0]} pontos]`
var linha3 = document.getElementById('linha3')
linha3.innerHTML += `[ ${pontos[2][1]} → ${pontos[2][0]} pontos]`
var linha4 = document.getElementById('linha4')
linha4.innerHTML += `[ ${pontos[3][1]} → ${pontos[3][0]} pontos]`
var linha5 = document.getElementById('linha5')
linha5.innerHTML += `[ ${pontos[4][1]} → ${pontos[4][0]} pontos]`
var linha6 = document.getElementById('linha6')
linha6.innerHTML += `[ ${pontos[5][1]} → ${pontos[5][0]} pontos]`

function lançar(){
    
    nota = 100
     var notaFinal = document.getElementById("resultados")//span da nota no HTML
     var foto1 = document.getElementById("foto1")

    var radyn = [0,0,0,0,0,0]

      radyn[0] = document.getElementsByName("yesno")
      radyn[1] = document.getElementsByName("yesno1")
      radyn[2] = document.getElementsByName("yesno2")
      radyn[3] = document.getElementsByName("yesno3")
      radyn[4] = document.getElementsByName("yesno4")
      radyn[5] = document.getElementsByName("yesno5")
    
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
   
}
