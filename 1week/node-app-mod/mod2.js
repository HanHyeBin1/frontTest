const sayGoodbye = function() {
    console.log("bye")
}

const sayNice = function() {
    console.log("nice")
}

//2개 이상 내보낼때 : 객체 하날고 묶어서 보내기
module.exports = {
    sayGoodbye,
    sayNice
}