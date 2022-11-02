//익명함수를 변수 a에 저장 , 함수는 값이다 
var a = function(){
    console.log('A');
}

//func1의 인자로 함수 전달 , 콜백함수 
function func1(callback){
    callback();
}

//인자로 a 전달 , a가 콜백함수로 호출 
func1(a);