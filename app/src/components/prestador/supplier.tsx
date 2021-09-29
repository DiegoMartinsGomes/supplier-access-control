import { Button, Col, Divider, Form, Input, message, Row, Select } from "antd";
import { ReactEventHandler, ReactNode, useState } from "react"
import { BlockUnitService } from "../../service/block-unit.service";
import { SupplierService } from "../../service/supplier.service";
import BlockUnitValue from '../block-unit/block-unit-value';

export default function Supplier() {
    const [form] = Form.useForm();
    const { Option } = Select;

    const [blockUnits, setBlockUnits] = useState([]);

    const setValueBlockUnit = (value: []) => {
        BlockUnitValue.setValue(value);
        setBlockUnits(BlockUnitValue.getValue());
    };

    function load(): ReactEventHandler<HTMLFormElement> | undefined {
        Promise.all([BlockUnitService.getFormated()])
            .then(function (response) {
                setValueBlockUnit(response[0].data);
            })
            .catch(function (error) {
                message.error('Erro ou Recuperar Quadra e Lote.');
            });

        return;
    }

    function save(data: any) {
        Promise.all([SupplierService.post(data)])
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
            idBlockUnit: undefined,
            name: undefined,
            document: undefined,
            occupation: undefined,
            registeredBy: undefined,
            responsibleContact: undefined
        };
    }

    function renderBlockUnit(item: any): ReactNode {
        if (item !== undefined)
            return <Option value={item.id}>{item.blockUnit}</Option>;
    }

    return <>
        <Form
            onLoad={load()}
            form={form}
            initialValues={initialValues()}
            layout="vertical"
            onFinish={save}
        >
            <Row gutter={20}>
                <Col span={6}>
                    <Form.Item
                        name={['idBlockUnit']}
                        label="Quadra e Lote"
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
                            {
                                blockUnits?.map(renderBlockUnit)
                            }
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation="left">Dados do Prestador</Divider>
            <Row gutter={20}>
                <Col span={6}>
                    <Form.Item
                        name={['name']}
                        label="Nome"
                        rules={[{ required: true }]}
                    >
                        <Input
                            type={'text'}
                            style={{ width: '100%' }}
                            placeholder="Quadra"
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={['document']}
                        label="Documento"
                        rules={[{ required: true }]}
                    >
                        <Input
                            type={'text'}
                            style={{ width: '100%' }}
                            placeholder="Lote"
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={['occupation']}
                        label="Atividade"
                        rules={[{ required: true }]}
                    >
                        <Input
                            type={'text'}
                            style={{ width: '100%' }}
                            placeholder="Lote"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation="left">Dados do Responsável</Divider>
            <Row gutter={20}>
                <Col span={6}>
                    <Form.Item
                        name={['registeredBy']}
                        label="Nome"
                        rules={[{ required: true }]}
                    >
                        <Input
                            type={'text'}
                            style={{ width: '100%' }}
                            placeholder="Lote"
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={['responsibleContact']}
                        label="Contato"
                        rules={[{ required: true }]}
                    >
                        <Input
                            type={'text'}
                            style={{ width: '100%' }}
                            placeholder="Lote"
                        />
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