import { Button } from 'antd';
import styled from '@emotion/styled';

const Mybutton = styled(Button)`
    color: white;
    font-size: 30px;
    height: 60px;
`

export default function App() {
  return (
    <Mybutton type="primary" >Primary Button</Mybutton>
  )
  };