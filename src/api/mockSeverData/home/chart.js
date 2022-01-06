import Mock from 'mockjs'

let list = [
    { name: '华为', },
    { name: 'OPPO', },
    { name: 'VIVO', },
    { name: '小米', },
    { name: '魅族', },
    { name: '1加', }
]
let res = {
    data: [],
    date: [
        '2021-1-5',
        '2021-1-6',
        '2021-1-7',
        '2021-1-8',
        '2021-1-9',
        '2021-1-10',
    ]
};

export default {
    getStatisticalData: () => {
        // res.date[0] = Mock.mock.date()
        for (let i = 0; i < 7; i++) {
            res.data[i] = []
            // res.date[i] = Mock.mock.date()
            // res.date[i] = +res.date[0] + i;
            for (let j = 0; j < list.length; j++) {
                let options = {
                    value: Mock.Random.integer(100, 200)
                }
                res.data[i][j] = Mock.mock({ ...list[i], ...options })
            }
        }
        return res;
    }
}