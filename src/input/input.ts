/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:10:10
 * @LastEditTime: 2021-09-28 10:26:57
 * @LastEditors: Please set LastEditors
 * @Description: textarea从input组件拆分出去
 * @FilePath: /tdesign-miniprogram/src/input/input.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-input`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-icon`,
    `${prefix}-class-label`,
    `${prefix}-class-input`,
    `${prefix}-class-clearable`,
    `${prefix}-class-suffix`,
    `${prefix}-class-suffix-icon`,
    `${prefix}-class-error-msg`,
  ];

  behaviors = ['wx://form-field'];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    classBasePrefix: prefix,
    characterLength: 0,
    maxchars: -1,
  };

  methods = {
    updateValue(value) {
      const { maxcharacter } = this.properties;
      const maxcharacterValue = Number(maxcharacter);
      if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length = 0, characters, overflow } = getCharacterLength(value, maxcharacter);
        if (length < maxcharacterValue) {
          this.setData({
            value,
            characterLength: length,
            maxchars: -1,
          });
        } else if (!overflow) {
          this.setData({
            value,
            characterLength: length,
            maxchars: value.length,
          });
        } else {
          this.setData({
            value: characters,
            characterLength: length,
            maxchars: value.length - 1,
          });
        }
      } else {
        this.setData({
          value,
          characterLength: value ? String(value).length : 0,
        });
      }
    },
    onInput(e) {
      const { value, cursor, keyCode } = e.detail;
      this.updateValue(value);
      this.triggerEvent('change', { value, cursor, keyCode });
    },
    onFocus(e) {
      this.triggerEvent('focus', e.detail);
    },
    onBlur(e) {
      this.triggerEvent('blur', e.detail);
    },
    onConfirm(e) {
      this.triggerEvent('enter', e.detail);
    },
    clearInput(e) {
      this.triggerEvent('clear', e.detail);
      this.setData({ value: '' });
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
  };
}
