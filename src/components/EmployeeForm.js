import React from "react";

import { Button, Select, Form, Input, Row, Col, DatePicker } from "antd";

const EmployeeForm = props => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: "Field is required!",
    types: {
      email: "Not a validate email!"
    }
  };

  const onFinish = values => {
    const formateValues = {
      ...values,
      doj: values["doj"].format("YYYY-MM-DD")
    };
    // console.log(formateValues);
    props.handleModalClose();
    props.onSubmit(formateValues);
    form.resetFields();
  };

  const formClear = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Row gutter={[16, 0]}>
        <Col md={12}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>
        </Col>

        <Col md={12}>
          <Form.Item name="ID" label="employeeId" rules={[{ required: true }]}>
            <Input placeholder="Enter your Employee ID " />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 0]}>
        <Col md={12}>
          <Form.Item
            name="department"
            label="Select Department"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Department">
              <Select.Option value="design">Design</Select.Option>
              <Select.Option value="frontend">Front End</Select.Option>
              <Select.Option value="backend">Back End</Select.Option>
              <Select.Option value="hr">Human Resource</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col md={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Emter your email" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 0]}>
        <Col md={12}>
          <Form.Item
            name="doj"
            label="Date of Joining"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="end">
        <Form.Item>
          <Button
            type="secondary"
            onClick={formClear}
            style={{ marginRight: "1rem" }}
          >
            Clear
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
