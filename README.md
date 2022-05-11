영화 애플리케이션 제작
package.json에서 test,eject 부분은 불 필요

public에서 favicon은 url상단에 나타나는 아이콘

### git Upload
- git init
- git remot add origin {Repository주소}
- git add . (해당 폴더 모두 포함)
- git commit -m "메세지"
- git push origin master (데이터 push)

<br>

### JSX 규칙
    <ol>
        - 태그를 꼭 닫혀야함
        - 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야함
        - JSX안에 자바스크립트 값 사용
        - 조건부 렌더링(if 문 사용 X)
            - if 문을 사용하기 위해선 IIFE(Immediately Invoked Function Expression, 즉시실행 함수 표현)을 사용해야함
        - CSS: style과 classname
            - html에서는 <div class="hello">
            - class 대신에 className사용
        - 주석 → {/*....*/}
    <ul>

<br>
    
### props
- 부모 컴포넌트가 자식 컴포넌트에게 주는 값
- 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 X

<br>

### state
- 컴포넌트 내부에서 선언하며 내부에서 값을 변경 가능
- class fields 문법을 사용해서 정의
- class fields 를 사용이유: 편의를 위함
- super(props)호출 한 이유: 컴포넌트를 만들게 되면서, Component를 상속 → constructor를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 됨
    
    <ol>
        - 메소드 작성
            - 버튼에서 클릭이벤트가 발생 했을 때 처리 방법
        - setState
            - state 에 있는 값을 바꾸기 위해서는 this.setState 를 무조건 거쳐야 함
            - 객체로 전달되는 값만 업데이트
        - setState에 객체 대신 함수를 전달
            - 다시 this.state 를 조회
            - { number } → 비구조화 할당
        - 이벤트 설정
            - 버튼이 클릭되면 우리가 준비한 함수가 각각 호출되도록 설정
            - 주의
                - onclick → onClick , onchange → onChange
                - 렌더링 함수에서 이벤트를 설정할때 메소드를 직접 호출 X
    <ul>
        <br>
        
### LifeCycle API

- constructor: 컴포넌트 생성자 함수
    - 컴포넌트가 새로 만들어질 때마다 이 함수가 호출
- componentWillMount
    - 화면에 나가기 직전에 호출되는 API
- componentDidMount
    - 컴포넌트가 화면에 나타나게 됐을 때 호출
    - D3, masonry 처럼 DOM 을 사용해야하는 외부 라이브러리 연동
    - 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax(Asynchronous JavaScript And XML) 요청
    - DOM 의 속성을 읽거나 직접 변경하는 작업을 진행
- componentWillReceiveProps
    - 새로운 props 를 받게됐을 때 호출
    - state 가 props 에 따라 변해야 하는 로직을 작성
- static getDerivedStateFromProps
    - props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용
- shouldComponentUpdate
    - 현재 컴포넌트의 상태가 업데이트되지 않아도, 부모 컴포넌트가 리렌더링되면, 자식 컴포넌트들도 렌더링
- componentWillUpdate
    - shouldComponentUpdate 에서 true 를 반환했을때만 호출
    - 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업
- componentDidUpdate
    - 컴포넌트에서 render() 를 호출하고난 다음에 발생
    - 파라미터를 통해 이전의 값 조회 가능
- componentWillUnmount
    - 등록했었던 이벤트를 제거
    - setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거
