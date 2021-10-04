    computed: {
        // 데이터 안에 없는 새로운 키를 만드는 역할을 한다.
        // 사용자 정보와 같은 것은 이 기능을 자주 사용한다.
        fullName() {
            return this.firstName + this.lastName;
        }
   

watch는 데이터 키가 바뀌는지?

watch는 메모리 사용량이 커서 남용하면 안된다.
어플리케이션이 복잡해지다보면 watch와 computed를 사용하게 된다.

watch는 키값이 없다가 생겨서 작동될 때에만 화면상에 나타난다.

특정 컴포넌트들을 부분적으로 분해해서 쓴다.
component folder에 넣고, import 해서

datagrid와 
nestedcomponent 연습

컴포넌트 vue 파일도 따로 저장해라

th는 header로 돌리고
tr도 header를 기준으로 돌린다. 이때 tr[head.key]로 잡아준다.


vue에서는 id가 아닌 ref를 쓴다
auto formatting - prettier


자식 컴포넌트에서 부모로 메세지를 보내는 걸 많이 쓰는 이유는?




slot(슬롯..?)
그냥 데이터만 전달할 때는 일반적인 component를 사용하지만, ui자체 안에 html 요소 자체도 바꿔가면서 쓸 때에는 slot을 사용한다.


props는 깊이가 1인 부모-자식관게에서만 데이터를 주고 받지만, provide는 깊이와 상관없이 주고 받을 수 있으나 그 만큼 데이터에 출처를 알기 어려움


기본적으로vue에서는 다양한 라이프사이클 함수가 작동된다.
created가 끝날 때까지 vue는 화면을 그리지 않는다.
서버랑 실제 연동하면 요청이 많은 경우 느릴 수 있음(사용자 입장에서)
그래서 데이터를 어떤 건 created에서 어떤 건 mounted에서로 나눠야 한다.

아니면 또 다 mounted에 다 넣어버리면 실제 dom tree는 그렸지만 contents는 비어있을 수 있다.

사용자가 가장먼저 보게하는 것들은 created에
셀렉트 박스처럼 좀 나중에 볼 수도 있는 것들은 mounted로 보이게한다.
unmounted 안에 잡혀있는 데이터에 대해서 안쓰게 될 때 메모리를 확보하기 위해서 unmounted 안에 null을 넣어버린다.
하지만 setInterval과 같은 함수는 반드시 unmounted에서 해줘야 clear 해줘야한다.

왜냐하면 vue가 spa니까
CSR? client side rendering 클라이언트 입장에서 하다보면 웹페이지를 공유할 때 그 페이지만 공유되는게 아니라 첫 웹페이지가 노출이 된다.

그럴 경우 어쩔 수 없이 SSR를 server side rendering쓴다.

그럼 라이프 사이클은 어떤 식으로 써야할까?
사용자가 느끼기에 적당히 잘 이용하려면, 


mixin 공통함수를 여러 컴포넌트에서 사용하기 위해 쓴다

우리가 안배운 어려운 vue 문법 3가지
1. composition API : 새로운 기능이 아닌 방법이 추가됨. 코드의 가독성을 위한, 현재의 라이프사이클 문법이 많이 사라진ㄷ다..
22. plugin - 특정기능같은 모듈을 만드는 모듈화
3. Custom Directive - v-focus.. 와 같은 새로운 v..을 만드는 것.


:disabled="txt1 == ''"


<script>
export default {
  props: {
    header: {
      type: Array,
      default: function () {
        return [];
      },
    },
    body: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>