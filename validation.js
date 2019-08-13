var codeCheck = {};

codeCheck.doCheckCode = function(req, res, next){
    var code = req.params.code
    if(code.startsWith("0 ")){
        next()
    }else{
        res.send({code: 0, message: 'Code Is Not Valid'})
    }
}

module.exports = function (configCode) {
    config = configCode;
    return codeCheck
}