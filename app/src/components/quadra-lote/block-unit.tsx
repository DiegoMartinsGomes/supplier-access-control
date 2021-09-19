import { Button, Col, Form, InputNumber, message, Row, Select } from "antd";
import { BlockUnitService } from "../../service/block-unit.service";

export default function BlockUnit() {
    const [form] = Form.useForm();
    const { Option } = Select;

    function save(data: any) {
        Promise.all([BlockUnitService.post(data)])
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
            block: undefined,
            unit: undefined,
            status: undefined,
        };
    }

    return <>
        <Form
            form={form}
            initialValues={initialValues()}
            layout="vertical"
            onFinish={save}
        >
            <Row gutter={20}>
                <Col span={6}>
                    <Form.Item
                        name={['block']}
                        label="Quadra"
                        rules={[{ required: true }]}
                    >
                        <InputNumber
                            style={{ width: '100%' }}
                            min={'1'}
                            max={'99'}
                            placeholder="Quadra"
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={['unit']}
                        label="Lote"
                        rules={[{ required: true }]}
                    >
                        <InputNumber
                            style={{ width: '100%' }}
                            min={'1'}
                            max={'99'}
                            placeholder="Lote"
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={['status']}
                        label="Situação"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="Selecione"
                            style={{ width: '100%' }}
                            allowClear
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA?.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value={1}>Casa</Option>
                            <Option value={2}>Obra</Option>
                            <Option value={3}>Terreno</Option>
                        </Select>
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

