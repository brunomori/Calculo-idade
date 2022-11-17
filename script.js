
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('Masculino')
        var genero_feminino = document.getElementById('Femenino')
        var img =document.createElement('img')
        img.setAttribute('id', 'foto') //criar um tag img e dar um id com nome foto

        if (genero_masculino.checked) {
            var genero = 'Homem'
            if ( idade >=0 && idade <10){
                img.setAttribute('src','foto-bebe-m.png')

            }
            else if (idade <21){
                img.setAttribute('src','foto-jovem-m.png')

            }

            else if (idade < 50){
                img.setAttribute('src','foto-adulto-m.png')

            }

            else {
                img.setAttribute('src','foto-idoso-m.png')

            }

        } 

        else if (genero_feminino.checked) {
            var genero = 'mulher'

            if ( idade >=0 && idade <10){
                img.setAttribute('src','foto-bebe-f.png')

            }
            else if (idade <21){
                img.setAttribute('src','foto-jovem-f.png')

            }

            else if (idade < 50){
                img.setAttribute('src','foto-adulto-f.png')

            }

            else {
                img.setAttribute('src','foto-idoso-f.png')

            }
        }
        res.style.textAlign= 'center' //alinha para o centro
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}