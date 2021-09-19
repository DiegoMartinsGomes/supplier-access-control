import './app.css';
import { Layout, Menu, Breadcrumb, Image, Col } from 'antd';
import {
  FieldTimeOutlined,
  HomeOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { useState, ReactNode } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import BlockUnit from '../quadra-lote/block-unit';
import ValidityPeriod from '../periodo-vigencia/validity-period';
import Home from '../home/home';
import Supplier from '../prestador/supplier';
import BreadcrumbValue from '../breadcrumb/breadcrumb-value';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function renderBreadcrumb(item: string): ReactNode {
  return <Breadcrumb.Item>{item}</Breadcrumb.Item>;
}

function App() {
  const [collapsed, setCollapse] = useState(false)
  const [breadcrumbs, setBreadcumbs] = useState(['Home']);
  const setValueBreadcrumb = (value: string[]) => {
    BreadcrumbValue.setValue(value);
    setBreadcumbs(BreadcrumbValue.getValue());
  };

  return <>
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapse}>
          <Link to="/" onClick={e => setValueBreadcrumb(['Home'])}>
            <div className="logo">
              <Col span={collapsed ? 0 : 12}>
                <Image
                  width={184}
                  preview={false}
                  src="http://quintadosventos.com.br/assets/img/logo.png"
                />
              </Col>
            </div>
          </Link>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<FieldTimeOutlined />} title="Vigência">
              <Menu.Item key="3">
                <Link to="/periodo-vigencia" onClick={e => setValueBreadcrumb(['Vigência', 'Cadastro'])}>Cadastro</Link>
              </Menu.Item>
              <Menu.Item key="4">Lista</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<HomeOutlined />} title="Quadra e Lote">
              <Menu.Item key="5">
                <Link to="/quadra-lote" onClick={e => setValueBreadcrumb(['Quadra e Lote', 'Cadastro'])}>Cadastro</Link>
              </Menu.Item>
              <Menu.Item key="6">Lista</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ToolOutlined />} title="Prestador" >
              <Menu.Item key="7">
                <Link to="/prestador" onClick={e => setValueBreadcrumb(['Prestador', 'Cadastro'])}>Cadastro</Link>
              </Menu.Item>
              <Menu.Item key="8">Lista</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbs.map(renderBreadcrumb)}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/quadra-lote" component={BlockUnit} />
                <Route path="/periodo-vigencia" component={ValidityPeriod} />
                <Route path="/prestador" component={Supplier} />
                <Route component={() => <div>Page 404!</div>} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Controle de Acesso de Prestadores ©2021 Created by DMG Solutions</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  </>
}

export default App
