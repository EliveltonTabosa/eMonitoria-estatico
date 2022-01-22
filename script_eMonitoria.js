let pontos = [
    [3, 'atender prontamente', false],
    [5, 'atenção', false],
    [6, 'sem impacto', false],
    [11, 'sistema', false],
    [16, 'com impacto', false],
    [100, 'zerada', false],
]

// Definindo uma classe para usar o construtor de objetos
class Point {
    // Construtor vai pegar os atributos passados por parametro na hora da criacao e vai criar um novo objeto
    constructor(pontuacao, descricao, status) {
        this.pontuacao = pontuacao;
        this.descricao = descricao;
        this.status = status;
    }
}

// Criacao dos objetos utilizando o construtor
let points = [
    new Point(3, 'atender prontamente', true),
    new Point(5, 'atenção', true),
    new Point(6, 'sem impacto', true),
    new Point(11, 'sistema', true),
    new Point(16, 'com impacto', true),
    new Point(100, 'zerada', false),
]

const initialScore = 100

var nota = 100
var n = document.getElementById('n')   //'n' é o span da nota dentro da div
n.innerHTML = nota
var img = document.createElement('img') // img teste
img.setAttribute('id', 'foto') // img teste

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

// Funcao para criar um objeto HTML com os atributos do objeto passado por parametro
function createDiv(item, points) {
    // Div que vai conter os objetos
    const div = document.createElement('div')
    div.setAttribute('class', 'item')
    div.setAttribute('id', `item${points.indexOf(item)}`)

    // Input para marcar como sim
    const inputYes = document.createElement('input')
    inputYes.setAttribute('type', 'radio')
    inputYes.setAttribute('name', `yesno${points.indexOf(item)}`)
    inputYes.setAttribute('id', `yes${points.indexOf(item)}`)

    // Label para o inputYes
    const labelYes = document.createElement('label')
    labelYes.setAttribute('for', 'yes')
    labelYes.innerText = 'Sim'

    // Input para marcar como nao
    const inputNo = document.createElement('input')
    inputNo.setAttribute('type', 'radio')
    inputNo.setAttribute('name', `yesno${points.indexOf(item)}`)
    inputNo.setAttribute('id', `no${points.indexOf(item)}`)
    inputNo.setAttribute('checked', 'true')

    // Label para o inputNo
    const labelNo = document.createElement('label')
    labelNo.setAttribute('for', 'no')
    labelNo.innerText = 'Não'

    // Descricao do objeto
    const divInfo = document.createElement('div')
    divInfo.setAttribute('class', 'info')

    const descricao = document.createElement('p')
    descricao.setAttribute('class', 'descricao')
    descricao.setAttribute('id', `descricao${points.indexOf(item)}`)
    descricao.innerText = `${item.descricao}`

    const pontuacao = document.createElement('p')
    pontuacao.setAttribute('class', 'pontuacao')
    pontuacao.innerText = `${item.pontuacao} - pontos`

    // Inserir os objetos na div e na divInfo
    div.appendChild(inputYes)
    div.appendChild(labelYes)
    div.appendChild(inputNo)
    div.appendChild(labelNo)
    divInfo.appendChild(descricao)
    divInfo.appendChild(pontuacao)
    div.appendChild(divInfo)
    
    console.log("div", div);
    
    return div 
}

// Funcao para apresentar os objetos estaticos no HTML
function showDefault() {
    const lista = document.getElementById('lista')
    const button = document.getElementById('btn-default')
    button.setAttribute('disabled', 'true')

    for (let item of points) {
        const divObject = createDiv(item, points)
        console.log("divObject", divObject);

        lista.appendChild(divObject)
    }
}


function lancar() {

    nota = 100
    var notaFinal = document.getElementById("resultados")//span da nota no HTML
    var foto1 = document.getElementById("foto1")

    var radyn = [0, 0, 0, 0, 0, 0]

    radyn[0] = document.getElementsByName("yesno")
    radyn[1] = document.getElementsByName("yesno1")
    radyn[2] = document.getElementsByName("yesno2")
    radyn[3] = document.getElementsByName("yesno3")
    radyn[4] = document.getElementsByName("yesno4")
    radyn[5] = document.getElementsByName("yesno5")

    function descontar(arei) {
        if (arei[2] == true) {
            nota -= arei[0]
        }
    }

    for (let i = 0; i < pontos.length; i++) {
        if (radyn[i][1].checked) {
            pontos[i][2] = true
        } else {
            pontos[i][2] = false
        }
        descontar(pontos[i])
    }
    if (nota < 0) {
        nota = 0
    }
    n.innerHTML = nota
    if (nota >= 90) {
        img.setAttribute('src', 'midia/Joinha.png')

    } else {
        img.removeAttribute('src', 'midia/Joinha.png')
    }
    foto1.appendChild(img) //joga a imagem na div da var foto1

}

function reset() {
    const doc = document.getElementById('section')
    doc.removeChild(doc.childNodes[0])
}