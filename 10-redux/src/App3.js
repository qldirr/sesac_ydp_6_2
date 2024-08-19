import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css'
import { minus, plus } from './store/counterReducer';
import { changeVisibility } from './store/isVisibleReducer';

function App3() {
    // 7. useSelector 훅 사용해 Redux 스토어에서 상태 읽어오기
    // Redux 상태에서 number 값 선택
    // const number = useSelector((state) =>state)
    // const number = useSelector((state) =>state.number)
    const number = useSelector((state) => state.counter.number)
    // console.log('number,.,.,.,.,', number);   // {number : 100}
    
  
  return (
    <div className="App">
      <h1>React Redux Ex3</h1>
      <h2>Redux를 사용</h2>
      <h2>리듀서</h2>
      <h2>number : {number}</h2>
      <Box1 />
    </div>
  );
}



// Box1 컴포넌트
const Box1 = () => {
  return (
    <div className='Box'>
      <h2>Box1 : </h2>
      <Box2 />
    </div>
  )
}

// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className='Box2'>
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  )
}

// Box3 컴포넌트
const Box3 = () => {
  return (
    <div className='Box3'>
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  )
}

// Box4 컴포넌트
const Box4 = () => {
    // 8. useDispatch 훅 사용해 액션을 디스패치하는 함수 가져오기
    // - 이 함수 사용해 상태 업데이트
    // Redux 상태에서 number 값 선택하고 액션을 디스패치할 준비
    // const state = useSelector((state) => state.counter)
    const number = useSelector((state) => state.counter.number)
    const isVisible = useSelector((state) => state.isVisible)
    const dispatch = useDispatch()
  return (
    <div className='Box4'>
      <h2>Box4 : {number}</h2>
      <h2>isVisible 값은 " {isVisible ? '참' : '거짓'} " 이다</h2>
      <button onClick={() => dispatch(plus(5))}>PLUS</button>
      <button onClick={() => dispatch(minus(5))}>MINUS</button>

      <button onClick={() => dispatch(changeVisibility())}>CHANGE</button>
    </div>
  )
}


export default App3;