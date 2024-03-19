// MobX 스토어 인스턴스를 애플리케이션의 상위 레벨에서 생성합니다.
import { observer } from "mobx-react";
import React from "react";
import CounterStore from "./CounterStore";

const myCounter = new CounterStore();

function App() {
  return (
    <div style={{ textAlign: "center", padding: 16 }}>
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
}

export default observer(App);
