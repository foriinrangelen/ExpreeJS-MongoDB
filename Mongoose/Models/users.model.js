const users= [
    {
        id:0,
        name:'k'
    },
    {
        id:1,
        name:'y'
    },
]

module.exports= users;

//exports와 module.exports의 차이:
//exports: 이 객체를 통해 여러 이름을 가진 속성이나 함수를 내보낼 수 있습니다. 하지만, exports 객체 자체를 다른 값으로 대체할 수 없습니다.
//module.exports: 이 객체를 통해 모듈에서 내보내는 대상을 정의합니다. 객체, 함수, 클래스 등 어떤 자바스크립트 값이든지 이 객체에 할당하여 내보낼 수 있습니다. module.exports를 사용하면 exports 객체를 무시하고 module.exports에 할당된 값만 모듈에서 내보냅니다.