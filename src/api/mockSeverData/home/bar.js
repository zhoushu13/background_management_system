
import Mock from 'mockjs'

let res = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 6; i++) {
            res[i] = {
                '新增': Mock.Random.integer(500, 1200),


                '活跃': Mock.Random.integer(3000, 5000),
            }
        }
        return res;
    }
}