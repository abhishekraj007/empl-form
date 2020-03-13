import React from "react";
import { Button, Modal } from "antd";

import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

class App extends React.Component {
  state = {
    modalVisible: false,
    tableData: []
  };

  handleModalClose = () => {
    this.setState(preState => {
      return {
        modalVisible: !preState.modalVisible
      };
    });
  };

  addEmployee = () => {
    this.setState({
      modalVisible: true
    });
  };

  onSubmit = values => {
    this.setState(prevState => {
      return {
        ...prevState,
        tableData: [...prevState.tableData, values]
      };
    });
    // console.log(this.state.tableData);
  };

  render() {
    return (
      <div className="container">
        <Button type="primary" onClick={this.addEmployee}>
          New Employee
        </Button>

        <Modal
          title="Add Employee"
          visible={this.state.modalVisible}
          onCancel={this.handleModalClose}
          footer={null}
        >
          <EmployeeForm
            onSubmit={this.onSubmit}
            handleModalClose={this.handleModalClose}
          />
        </Modal>

        <EmployeeTable data={this.state.tableData} />
      </div>
    );
  }
}

export default App;
