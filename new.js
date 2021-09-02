function write(content){
  document.write(content);
};
var Acolor = {
  h1aColor: function(color){
    var da = document.querySelectorAll('h1 a');
    var rk = 0;
    while(rk < da.length ){
      da[rk].style.color = color;
      rk = rk + 1;
    }
  },
  paColor:function(color){
    var ya = document.querySelectorAll('p a');
    var ga = 0;
    while(ga < ya.length ){
      ya[ga].style.color = color;
      ga = ga + 1;
    }
  },
  selectedcolor:function(color){
    document.querySelector('.selected a').style.color = color;
    document.querySelector('.selected').style.color = color;
  }
};
var body = {
  backgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
  color:function(color){
    document.querySelector('body').style.color = color;
  }
};
var bordercolor = {
  ol:function(color){
    document.querySelector('#grid ol').style.borderColor = color;
  },
  h1:function(color){
    document.querySelector('h1').style.borderColor = color;
  }
}
function devil(self){
if(self.value === '야간모드'){
  Acolor.h1aColor('white');
  Acolor.paColor('white');
  Acolor.selectedcolor('#2E2E2E');

  body.color('white');
  body.backgroundColor('#2E2E2E');
  bordercolor.ol('white');
  bordercolor.h1('white');
  self.value = '기본모드';

} else {
  Acolor.h1aColor('black');
  Acolor.paColor('black');
  Acolor.selectedcolor('white');

  body.color('black');
  body.backgroundColor('white');
  bordercolor.ol('black');
  bordercolor.h1('black');
  self.value = '야간모드';
}
};
function joke(){
        for(let i = 212; i > 0; i--){
          alert('아ㅋㅋ누르지마라니깐ㅋㅋ, 0' +i+ '번 확인 누르셈' );
        };
          alert('당신은 인내심있다! 캡처 후 인증시 상품증정!' );
      };
var list1 = '그의 생애';
var list2 = '그의 키';
var list3 = '그의 몸무게';
var list4 = '그의 특기';
var list5 = '그의 취미';
var list6 = '기타';
