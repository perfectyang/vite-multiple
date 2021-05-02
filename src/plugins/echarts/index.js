// import echarts from "/@/plugins/echarts";
import * as echarts from 'echarts/core'

import { LineChart } from 'echarts/charts'

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent
} from 'echarts/components'

import { SVGRenderer } from 'echarts/renderers'

// 自定义主题
import theme from './theme.json'

const { use, registerTheme } = echarts

use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  SVGRenderer,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent
])

registerTheme('ovilia-green', theme)


export default echarts
