import React, { Component } from "react";
import { Table } from "antd";

export default class EmployeeTable extends Component {
  // state = {
  //   data: this.props.data
  // };

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Employee ID",
      dataIndex: "ID",
      key: "ID"
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Date of Joining",
      dataIndex: "doj",
      key: "doj"
    }
  ];

  render() {
    const { data } = this.props;
    console.log(data);

    const renderTable = () => {
      if (data.length) {
        return (
          <Table
            pagination={false}
            dataSource={data}
            columns={this.columns}
            style={{ marginTop: "2rem" }}
          />
        );
      } else {
        return null;
      }
    };

    return renderTable();
  }
}
