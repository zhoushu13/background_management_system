import Mock from 'mockjs'

import table from './mockSeverData/home/table'
import inOut from './mockSeverData/home/inOut'
import chart from './mockSeverData/home/chart'
import bar from './mockSeverData/home/bar'
import pie from './mockSeverData/home/pie'


Mock.mock('/api/home/table', table.getStatisticalData)

Mock.mock('/api/home/inOut', inOut.getStatisticalData)

Mock.mock('/api/home/chart', chart.getStatisticalData)

Mock.mock('/api/home/bar', bar.getStatisticalData)

Mock.mock('/api/home/pie', pie.getStatisticalData)
