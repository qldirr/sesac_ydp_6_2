import React, {useState, useCallback} from 'react'


// useCallback() - 매번 함수를 생성하지 않고 함수를 기억해두었다가 필요할 때마다 함수 재사용
export default function UseCallBackEx() {
    const [text, setText] = useState('') 

    //[before] - text 상태가 업데이트되면 컴포넌트가 리렌더링(코드를 다시 읽음)
    // -> onChangeText 함수도 다시 생성 -> 불필요한 작업
    // const onChangeText = (e) => {
    //     setText(e.target.value)
    // }

    // [after] - useCallback 훅으로 함수를 기억해 컴포넌트가 리렌더링되어도 의존성 배열에 있는 값이 바뀌지 않는 한 기존함수 재사용
    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, [])
  return (
    <div>
        <h1>useCallBack ex</h1>
        <input type="text" onChange={onChangeText}/>
        <div>작성한 값 : {text || '없음'}</div>
    </div>
  )
}
