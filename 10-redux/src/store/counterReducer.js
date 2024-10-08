// toolkit 사용하지 않는 버전(전통 Redux 설정 방식)

// 1. 액션 타입 상수 정의(counter namespace 일뿐)
// - 코드의 가독성을 높이고 네임스페이스를 명확하게 구분하여 이름 충돌 방지
const PLUS = 'counter/PLUS'
const MINUS = 'counter/MINUS'

// 2. 액션 생성자 정의 - 이를 통해 컴포넌트에 액션을 쉽게 디스패치 가능

/**
 * - 'type' 속성 반드시 포함 / 이름 변경 불가
 * - 리듀서는 이 type을 보고 어떤 상태 변경을 해야할지 판단
 * 'type' = 액션의 유형을 설명하는 문자열(필수 속성)
 * 추가 데이터 종류 - payload/meta/error
 * - payload : 액션 객체에서 추가적인(구체적인) 데이터를 전달하는 속성
 */

export const plus = (num) => ({ type: PLUS, payload:num })    // PLUS 액션 생성, 증가시킬 값을 payload로 전달
export const minus = (num) => ({ type: MINUS, payload:num })   // MINUS 액션 생성, 감소시킬 값을 payload로 전달

// 3. state 초기값 정의
const initialState = {
    number: 100,    // 초기 number 값 설정
}

// 4. reducer 정의(상태, 액션 받음)
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            return { number: state.number + 1 + action.payload }    // number 값 1 증가  // payload만큼 증가
        case MINUS:
            return { number: state.number - 1 - action.payload}   // number 값 1 감소   // payload만큼 감소
        default:
            return state   // 기본 상태 반환
    }
}

export default counterReducer   // 리듀서를 기본으로 내보내기