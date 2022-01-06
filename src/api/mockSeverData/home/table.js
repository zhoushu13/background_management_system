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
        for (let i = 0; i < list.length; i++) {
            let options = {
                value: Mock.Random.float(2000, 8000, 0, 0),
                today: Mock.Random.integer(100, 200),
                week: Mock.Random.integer(700, 1400),
                month: Mock.Random.integer(3000, 6000),
            }
            list[i] = Mock.mock({ ...list[i], ...options })
        }
        return list;
    }
}