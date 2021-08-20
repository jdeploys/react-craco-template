# react-admin-template__with_craco

react, [CRACO](https://github.com/gsoft-inc/craco) 기반의 관리자용 웹 페이지용 템플릿 프로젝트입니다.

### 주요 설정

프로젝트 생성

- `creact-react-app` 으로 생성 및 `craco` 로 마이그레이션

언어 및 프레임워크

- `typescript`
- `react`
- `ant.design`

주요 라이브러리 및 프레임워크

- `ant.design` [ant.design](https://ant.design/) UI 구성용 라이브러리
- `unstated-next` context-provider 패턴을 간단하게 사용하도록 구성된 라이브러리 (기존 store, redux 대체)
- `craco` react-creat-app 의 webpack 설정을 확장할 수 있는 라이브러리

### 참고사항

해당 repository 에는 기초 구조 설계 참고를 위해 아주 간단한 샘플만 적용하였습니다.

디렉토리 별 사용 용도 및 분리는 아래와 같습니다.

- `asset` asset 디렉토리
- `component` 재사용 가능성이 있는 모든 컴포넌트는 해당 디렉토리에 포함
- `config` 현재 app 이 실행되기 전에 사전에 설정되어야 하는 전역 설정을 여기에 포함
- `pages` router 와 매칭되는 (하나의 url 을 갖는) 페이지들
- `shared` 공통 요소 (ex: axios, util 등)
- `container` 기존의 store 역할을 하는 공용 state 처리 container
- `style` css 등 스타일과 관련된 내용 포함

아주 기초적이고 자주 사용되지만 설정하기 귀찮은 부분까지만 구성하였습니다.

더 좋은 사용법이나 개선이 필요한 내용이 있다면 남겨주세요.

기타 사항으로 컴포넌트들간 데이터(또는 state)를 공유하는 방법을 context-provider 패턴으로 간단하게 구성 해놓았으니 참고 바랍니다.
> 자세한 사항은 UiContainer 부분을 참고하면 됩니다.
> 
> provider 선언 부분 `src/component/App`
> 
> context 선언 부분 `src/container/ui`
> 
> context 를 사용 및 설정하는 부분 `src/component/switch/HideContentSwitch`
> 
> 해당 context 를 사용하는 부분 `src/page/home`, `src/page/about`


### License

MIT License

해당 소스 코드는 자유롭게 사용 가능합니다.
