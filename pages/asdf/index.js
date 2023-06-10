import { Breadcrumb, Layout, theme } from 'antd';
import { useState } from 'react';

export default function Test() {
    const { Header, Content, Footer, Sider } = Layout;


    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
        <Layout>
<Header
  style={{
    padding: 0,
    background: colorBgContainer,
  }}
/>
<Content
  style={{
    margin: '0 16px',
  }}
>
  <Breadcrumb
    style={{
      margin: '16px 0',
    }}
  >
    <Breadcrumb.Item>User</Breadcrumb.Item>
    <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb>
  <div
    style={{
      padding: 24,
      minHeight: 360,
      background: colorBgContainer,
    }}
  >
    Bill is a cat.
  </div>
</Content>
<Footer
  style={{
    textAlign: 'center',
  }}
></Footer>
</Layout>
        </>
    )
}
