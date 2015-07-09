'use strict';

var React = require('react');
var Table = require('rc-table');
require('rc-table/assets/index.css');

var columns = [
  {title: '表头1', dataIndex: 'a', width: 100},
  {id: '123', title: '表头2', dataIndex: 'b', width: 100},
  {title: '表头3', dataIndex: 'c', width: 200},
  {
    title: '操作', dataIndex: '', render: function () {
    return <a href="#">操作</a>
  }
  }
];

var data = [{a: '123'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];

var table = React.render(
  <div>
    <h2>simple table</h2>
    <Table columns={columns}
      data={data}
      className="table"/>
  </div>,
  document.getElementById('__react-content')
);