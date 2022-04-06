/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdNoticeBarProps } from './type';
const props: TdNoticeBarProps = {
  /** 文本内容 */
  content: {
    type: String,
  },
  /** 当 marquee = true 时，延迟滚动的时间，单位 ms */
  delay: {
    type: Number,
    value: 0,
  },
  /** 右侧额外信息 */
  extra: {
    type: String,
  },
  /** 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放 */
  marquee: {
    type: Boolean,
    optionalTypes: [Object],
    value: false,
  },
  /** 左边图标 */
  prefixIcon: {
    type: String,
    value: '',
  },
  /** 当 marquee = true 时，文字滚动的速度，默认50px/s */
  speed: {
    type: Number,
    value: 50,
  },
  /** 后缀图标 */
  suffixIcon: {
    type: String,
    value: '',
  },
  /** 内置主题 */
  theme: {
    type: String,
    value: 'info',
  },
  /** 显示/隐藏 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 显示/隐藏，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: false,
  },
};

export default props;
