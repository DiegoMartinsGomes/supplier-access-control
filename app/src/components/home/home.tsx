import { Col, Form, Row } from "antd";

export default function Home() {
    const [form] = Form.useForm();

    function initialValues() {
        return {
        };
    }

    return <>
        <Form
            form={form}
            initialValues={initialValues()}
            layout="vertical"
        >
            <Row gutter={20}>
                <Col span={24}>

                </Col>
            </Row>
        </Form>
    </>
}