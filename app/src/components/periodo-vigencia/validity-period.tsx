import { Button, Col, Form, Row, DatePicker, message } from "antd";
import { ValidityPeriodService } from "../../service/validity-period.service";
const { RangePicker } = DatePicker;


export default function ValidityPeriod() {
    const [form] = Form.useForm();
    const dateFormat = 'DD/MM/YYYY';

    function save(data: any) {
        Promise.all([ValidityPeriodService.post(data.validityPeriod[0]._d, data.validityPeriod[1]._d)])
            .then(function (response) {
                message.success('Registro Salvo com Sucesso.');
                form.resetFields();
            })
            .catch(function (error) {
                message.error('Erro ou Salvar Registro.');
            });
    }

    function initialValues() {
        return {
            validityPeriod: undefined
        };
    }

    return <>
        <Form
            form={form}
            initialValues={initialValues()}
            layout="vertical"
            onFinish={save}
        >
            <Row gutter={12}>
                <Col span={24}>
                    <Form.Item
                        name={['validityPeriod']}
                        label="Período de Vigência"
                        rules={[{ required: true }]}
                    >
                        <RangePicker format={dateFormat} />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="end">
                <Button
                    type="primary"
                    htmlType="submit">
                    Salvar
                </Button>
            </Row>
        </Form>
    </>
}