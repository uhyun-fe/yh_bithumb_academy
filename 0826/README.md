# 2021.08.26

## 개요

-  공지사항

   -  8/27 수업 없음 -> 미팅도 없음
   -  숙제 : 타입스크립트 이용해서 todolist 추가 성공하기 (문서이름: 본인이름.zip)

-  학습목표
   1. typescript를 react 프로젝트에 적용할 수 있다.
      -> 함수 적용 및 interface 적용
   2. css스타일을 적용할 수 있다. (scss)

## interface & type

-  interface

```
interface Istate {
   num: number;
}

function App() {
    const [state, setState] = useState<Istate>({
        num: 0,
    });
}
```

-  type

```
type Iprops = {
   title: string;
};
```
