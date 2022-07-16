# 클론 코딩으로 시작하는 Next.js

- [YES24링크](http://www.yes24.com/Product/Goods/97031148)
- [출판사링크](https://bjpublic.tistory.com/391)
- [예제소스링크](https://github.com/bjpublic/next.js)

## 1장. 낵스트

### 1.4 Eslint 및 Prettier 설치하기
https://blog.jetbrains.com/webstorm/2016/08/using-external-tools/

## 7장. 리덕스
- 프로젝트 규모가 커지면 관리할 상태와 복잡도가 올라감
- Context API를 이용하여 구현 가능하지만 규모가 커질수록 관리가 힘들어짐
- 리덕스는 상태관리 라이브러리 중 하나로 가장 많이 사용되고 있다.
  - Store 라는 변수를 이용해 전역 상태관리를 한다. -> 조회 및 관리가 간편해짐
  - 원하는 컴포넌트에서만 스토어 값을 사용 -> props-drilling(상태를 자식 컴포넌트 하위로 연달아 전달해주는 것) 고통을 없에준다.
  - 리덕스 데브툴즈라는 브라우저 확장프로그램을 지원 -> 상태 조회/변경 추적을 도와준다.

### 7.2 리덕스에 필요한 개념
*Action*
- 상태 변화를 위한 정보가 필요한데 액션은 상태변화에 대해 알려 주는 순수 자바스크립트 객체
- type: 필수 필드, 액션의 행위를 나타내는 문자열
```javascript
{ type: "ADD_TODO", todo: [] }
{ type: "CHECK_TODO", id: 1 }
```

*Reducer*
- 상태와 액션으로 함수를 실행하는 역할
- 첫번째인자: 이전상태정보, 두번째인자: 액션객체
- 리듀서는 액션에 대한 함수를 정의하고 함수를 실행해서 상태를 업데이트

*Dispatch*
- 액션을 실행시키는 역할을 하며 액션을 인자로 받음
  1. 디스패치로 액션 실행 ex) `disptch(action)`
  2. 리듀서는 이전 상태와 액션객체를 받아 스토어 상태를 업데이트 ex) `reducer(prevState, action)`

#### 7.2.1 리덕스의 세 가지 원칙
https://redux.js.org/understanding/thinking-in-redux/three-principles
1. 응용 프로그램의 전역상태는 단일 저장소 내의 트리에 저장됩니다.
2. 상태는 읽기 전용입니다.
3. 순수 함수에 의해서 변경되어야 합니다.

*(실습)리덕스를 사용해 투두리스트 수정*
https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper
```shell
$ yarn add redux react-redux next-redux-wrapper redux-devtools-extension
$ yarn add @types/react-redux -D
```

리덕스 스토어를 관리하는 폴더 생성
- 폴더명은 store 혹은 modules 를 많이 사용함
- ducks 패턴 규칙 사용 - 파일을 구조 중심이 아닌 기능(모듈) 중심으로 나누는 것
  1. 항상 reducer()란 이름의 함수를 export default 해야 합니다.
  2. 항상 모듈의 action 생성자들을 함수형태로 export 해야 합니다.
  3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 합니다.
  4. 경우에 따라 action 타입들을 UPPER_SNAKE_CASE 로 export 할 수 있습니다. 만약, 외부 reducer 가 해당 action 들이 발생하는지 계속 기다리거나 재사용할 수 있는 라이브러리로 퍼블리싱할 경우에 말이죠.
- ducks 패턴 3번 규칙의 경우 액션 이름이 중복되지 않는 선에서 reducer/ACTION_TYPE 으로 사용 가능

### 7.3 리덕스 사용하기
- AS-IS: getServerSideProps 에서 api로 데이터를 받아 페이지에 props 로 전달
- TO-BE: api로 받아온 데이터를 리덕스 스토어에 저장, 저장된 스토어를 클라이언트에 전달

(주의)
```javascript
// 인자 정의 방식이 달라짐
wrapper.getServerSideProps((store) => async () => {});
```

### 7.4 리덕스 툴킷(Redux Toolkit)
https://redux.js.org/introduction/why-rtk-is-redux-today
> Redux Toolkit은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다. RTK는 Redux 앱을 만들기에 필수적이라 생각한 패키지와 함수들을 포함하고 있습니다. 대부분의 Redux 작업을 단순화하고 흔한 실수를 방지하며, Redux 앱을 만들기 쉽게 해주는 모범 사례를 통해 만들어졌습니다.

리덕스 툴킷은 리덕스에 대한 세 가지 일반적인 문제 해결을 위해 만들어졌습니다.
- 리덕스 저장소 구성이 매우 복잡합니다.
- 리덕스가 유용한 작업을 수행할 수 있도록 많은 패키지를 추가해야 합니다.
- 리덕스에는 상용구 코드가 너무 많이 필요합니다.

```shell
$ yarn add @reduxjs/toolkit
```

### 7.5 useSelector 사용하기

## 8장. 넥스트 비앤비 프로젝트 설정하기
- 피그마: https://bit.ly/3oUUIWW

### 8.1 프로젝트 생성하기


## 참고
- Isomorphic Unfetch 를 사용하는 이유
  - https://stackoverflow.com/questions/61483803/what-is-the-difference-between-isomorphic-fetch-and-isomorphic-unfetch-npm-p