var code = {}
var config;
code.getDecodedValue = function(req, res, next){
    var code = req.params.code.toString().split(" ");
    code = code[1].toString().split("");;
    code.forEach((element, index) => {
        code[index] = config.codeMap[element]
    });
    res.result = {hero :getDecode(code)}
    return next()

}

getDecode = function(codeArray) {
    var decodedHero;
    var heroes = config.allHeroes;
    const filteredHeroes = heroes.filter(hero => {
        if(hero.length == codeArray.length)
            return hero
    })

    filteredHeroes.forEach(function(hero) {        
        const checkHeroes = hero.split("").map((alpha, index) => {
            if(codeArray[index].includes(alpha))
                return true
            else
                return false
        })

        const finalHero = checkHeroes.filter(function(status) {
            return status === true;
        });
        if(checkHeroes.length == finalHero.length){
            decodedHero = hero;
        }
    })

    console.log("decodedHero", decodedHero)

    return decodedHero
}

module.exports = function (configCode) {
    config = configCode;
    return code
}