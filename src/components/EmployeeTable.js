import React, { Component } from "react";
import { Table, Popconfirm, Button } from "antd";

export default class EmployeeTable extends Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Employee ID",
      dataIndex: "id",
      key: "id"
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
    },
    {
      title: "",
      dataIndex: "action",
      render: (text, record) =>
        this.props.data.length > 0 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.handleDelete(record.id)}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        ) : null
      // key: "doj"
    }
  ];

  handleDelete = id => {
    console.log(id);
    this.props.deleteEmployee(id);
  };

  render() {
    const { data } = this.props;
    // console.log(data);

    const renderTable = () => {
      if (data.length) {
        return (
          <>
            <h3 style={{ marginTop: "2rem" }}>New Hiring Details</h3>
            <Table
              pagination={false}
              dataSource={data}
              columns={this.columns}
              style={{ marginTop: "1rem" }}
            />
          </>
        );
      } else {
        return null;
      }
    };

    return renderTable();
  }
}
