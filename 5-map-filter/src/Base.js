import React from 'react'

export default function Base() {

    /**
     * - 모든 배열 뒤에 .map
     * - array 자료의 개수만큼 함수안의 코드를 실행해줌
     * - return 안에 있는 것들을 array 로 반환해줌
     * - index -> 반복문 돌 때마다 0부터 1씩 증가
     * 
     * # arr.map( callbackFunction, [thisArg] ) 분석
     * - callbackFunction : 배열의 각 요소를 순회하며 반복 실행할 함수(currentValue, index, array 3개의 인수를 가짐)
     * -- currentValue : 배열의 현재 요소
     * -- index : 현재 요소의 인덱스(위치)(선택)
     * -- array : map() 이 호출된 원본 배열(선택)
     * 
     * - [thisArg] : callbackFunction 내부에서 this로 사용할 값 지정(선택), 만약 이 인수가 제공되지 않으면 undefined가 기본으로 설정됨
     */

    // 원본 배열
    const numbers = [10, 20, 30, 40]

    // map() 함수 사용
    const Items = numbers.map((currentValue, index, array) => {
        // 각 요소에 대한 정보 출력
        console.log(`현재 값: ${currentValue}`);
        console.log(`인덱스: ${index}`);
        console.log(`원본 배열: ${array}`);
        console.log('------------------------');

        return (
            <li>
                값 : {currentValue}, 인덱스 : {index}, 원본 배열 : {array.join(', ')}
            </li>
        )
    })

    // filter() 함수 사용
    let animals = ['dog', 'cat', 'rabbit']

    let newAnimals = animals.filter((animal) => {
        return animal.length >3
    })
    console.log('newAnimals', newAnimals);

    // filter() 2
    let words = ['dog', 'cat', 'rabbit']
    
    let result2 = words.filter((word) => {
        return word.includes('a')
    })

    return (
        <div>
            <h1>Map (1)</h1>
            <ul>{Items}</ul>

            <h1>Map (2)</h1>
            {/* return문 안에 map()함수 직접 생성 */}
            <ul>
                {numbers.map((currentValue, index, array) => {
                    // 각 요소에 대한 정보 출력
                    console.log(`현재 값: ${currentValue}`);
                    console.log(`인덱스: ${index}`);
                    console.log(`원본 배열: ${array}`);
                    console.log('------------------------');

                    return (
                        <li>
                            값 : {currentValue}, 인덱스 : {index}, 원본 배열 : {' '} {array.join(', ')}
                        </li>
                    )
                })}
            </ul>

            <h1>Filter (1)</h1>
            <ul>{newAnimals.join(', ')}</ul>

            <h1>Filter (2)</h1>
            <ul>{result2.join(', ')}</ul>
        </div>
    )


}

/**
 * Q) forEach 와 map 의 차이점??
 * * 공통점 * - 둘다 배열의 각 요소를 순회하는 메서드
 * 
 * 'forEach'
 * - 배열의 각 요소에 대해 주어진 함수를 실행하는 것이 목적
 * - 반환값이 없는 함수
 * - 배열을 순회하면서 각 요소에 대해 이벤트를 발생시키는데 사용
 * 
 * 'map'
 * - 배열의 각 요소를 변형하여 새로운 배열을 생성하는 것이 목적
 * - 변형된 요소들로 구성된 새로운 배열 반환
 * - 원본 배열은 변경되지 X
 * 
 * ----> 결론
 * - 데이터 변형이 필요하거나 변형된 데이터를 가지고 추가적인 작업을 해야 한다면? -> map
 * - 단순히 배열을 순회하며 각 요소에 대해 어떤 작업을 수행하고자 할 때는 -> forEach
 */
// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(number => {
//     console.log(number);
// })

// const numbers2 = [1, 2, 3, 4, 5]
// const double = numbers2.map((number) => {
//     console.log(number * 2);
// })