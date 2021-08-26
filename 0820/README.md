# 2021.08.20

## 개요

-  React Router 사용법과 life-cycle 이해 및 응용

## 예제

-  예제 1

```
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "my exmaple",
        }
    }

    componentDidMount() {}
    shouldComponentUpdate() {}

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}
```
