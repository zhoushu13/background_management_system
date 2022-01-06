import Mock from 'mockjs'
let list = [
    {
        title: '今日支付',
        icon: 'check',
    },
    {
        title: '今日收藏',
        icon: 'star-off',
    },
    {
        title: '今日未支付',
        icon: 'sold-out',
    },
    {
        title: '本周支付',
        icon: 'check',
    },
    {
        title: '本周收藏',
        icon: 'star-off',
    },
    {
        title: '本周未支付',
        icon: 'sold-out',
    },
]
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 6; i++) {
            list[i] = Mock.mock({
                count: i < 3 ? Mock.Random.float(600, 1200, 0, 0) : Mock.Random.float(4200, 8400, 0, 0),
                id: '@id',
                ...list[i],
            })
        }
        return list;
    }
}