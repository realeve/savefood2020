import React from 'react';
import { IQuestion } from '../pages/Paper';
import { List, Checkbox } from 'antd-mobile';
import * as lib from '@/utils/lib';

const CheckboxItem = Checkbox.CheckboxItem;

const CheckboxComponent = function({
  idx: key,
  title,
  data,
  onChange,
  state,
  sort,
  length,
  maxLength,
  showErr,
  dept,
  desc,
  ...props
}: IQuestion) {
  const onMultipleChange = (value: string | number, key: number) => {
    let nextState = lib.handleMultipleChange(state, value, key, sort, length, maxLength);
    onChange(nextState);
  };

  const answerStr = lib.parseAnswer(state, key, title, showErr, maxLength);
  return (
    <List renderHeader={answerStr} {...props}>
      {data.map((name: string, value: number) => (
        <CheckboxItem
          key={value}
          checked={
            typeof state[key] !== 'undefined' &&
            state[key].length > 0 &&
            state[key].includes(String(value))
          }
          onChange={() => onMultipleChange(value, key)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold' }}>
              {value + 1}.{name}
            </span>
            <span>{dept[value]}</span>
          </div>
          <small>{desc[value]}</small>
        </CheckboxItem>
      ))}
    </List>
  );
};

export default CheckboxComponent;
