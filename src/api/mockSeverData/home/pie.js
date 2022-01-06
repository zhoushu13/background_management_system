import Mock from 'mockjs'

let list = [
    { name: '华为', },
    { name: 'OPPO', },
    { name: 'VIVO', },
    { name: '小米', },
    { name: '魅族', },
    { name: '1加', }
]

export default {
    getStatisticalData: () => {
        for (let i = 0; i < 6; i++) {

            let options = {
                value: Mock.Random.integer(100, 1000)
            }
            list[i] = Mock.mock({ ...list[i], ...options })

        }
        return list;
    }
}