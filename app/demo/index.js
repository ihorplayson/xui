import React, { Component } from 'react';

import { DatePicker } from '../lib';

import '../lib/lib.less';

class Demo extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Date Picker</h1>
        <DatePicker.RangePicker />
      </div>
    );
  }
}

export default Demo;
