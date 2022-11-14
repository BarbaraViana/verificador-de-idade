function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.attributes('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/img/CriancaM.JPG')
            } else if (idade < 21) {
                //jovem    
            } else if (idade < 50) {
                //Adulto    
            } else {
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem    
            } else if (idade < 50) {
                //Adulto    
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Destectamos ${genero} com ${idade} anos`
        res.appendChild('img')

    }
}