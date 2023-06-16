import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 97vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Sidebar = styled.div`
  background-color: #ddd;
  padding: 20px;
`;

const Content = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default function Layout() {
  return (
    <Container>
      <Header>ex) 핸드 라이팅 연습</Header>
      <ContentContainer>
        <Sidebar>사이드바 영역</Sidebar>
        <Content>콘텐츠 영역</Content>
      </ContentContainer>
      <Footer>푸터 영역</Footer>
    </Container>
  );
}