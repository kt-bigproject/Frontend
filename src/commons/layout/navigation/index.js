import styled from "@emotion/styled"
import { useRouter } from "next/router";
import { ExportOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react"; 

const PageWrapper = styled.div`
  height: 150vh;
  overflow-y: auto; /* 세로 스크롤 활성 */
  margin: 0;
`;


const NavbarWrapper = styled.nav`
  background-color: white;
  padding: 12px 20px;
  font-size: 16px;
  margin: 0;
  width: 97vw;
  overflow-x: hidden;
  margin-top: 0px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: ${props =>
    props.scrollShadow ? '0px 2px 4px rgba(0, 0, 0, 0.3)' : 'none'};
  transition: box-shadow 0.3s ease;
  display: ${({ hideNavbar }) => (hideNavbar ? "none" : "block")};

`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  
`;


const NavbarLinks = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 0;
`;

const NavbarLink = styled.div`
  margin-left: 90px;
  display: ${(props) => (props.hideNavbar ? "none" : "flex")};
  align-items: center;
  padding-left: 0;
  visibility: ${(props) => (props.hideNavbar ? "hidden" : "visible")};
  opacity: ${(props) => (props.hideNavbar ? 0 : 1)};
  
  div {
    color: inherit;
    text-decoration: none;
    border-bottom: none;
    font-weight: bolder;
    font-size: 17px;
    cursor: pointer;


    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }
  }

  .logout-icon {
    position: relative;
    right: 1px;
  }

`;

const NavbarTitle = styled.h1`
    font-size: 12px;
    margin: 0;

    span {
    font-size: 32px;
    font-weight: bold;
    color: orange;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;


export default function LayoutNavigation() {
 
    const router = useRouter()

    const onClickbutton1 = () => {
      router.push('./핸드 라이팅 연습');
  
    }


    const onClickbutton2 = () => {
      router.push('./단어 맞추기');
    }


    const onClickbutton3 = () => {
      router.push('./시그니처 핸드라이팅');
    }


    const onClickbutton4 = () => {
      router.push('./랜덤 펜팔');
    }


    const onClickbutton5 = () => {
      router.push('./login');
    }

    const [scrollShadow, setScrollShadow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrollShadow(true);
        } else {
          setScrollShadow(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])

    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
      const currentPath = router.pathname;
      if (
        currentPath === "/핸드 라이팅 연습" ||
        currentPath === "/단어 맞추기" ||
        currentPath === "/시그니처 핸드라이팅" ||
        currentPath === "/랜덤 펜팔"
      ) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    }, [router.pathname]);




  return (
    
    <PageWrapper>
      <NavbarWrapper scrollShadow={scrollShadow} hideNavbar={hideNavbar}>
          <NavbarContainer>
              <NavbarTitle>
              <span>오</span>늘의 손 <span>글</span>씨
              </NavbarTitle>
              <NavbarLinks>
              <NavbarLink hideNavbar={hideNavbar}>               
                  <div onClick={onClickbutton1}>핸드 라이팅 연습</div>      
              </NavbarLink>
              <NavbarLink hideNavbar={hideNavbar}>
                  <div onClick={onClickbutton2}>단어 맞추기</div>
              </NavbarLink>
              <NavbarLink hideNavbar={hideNavbar}>
                  <div onClick={onClickbutton3}>시그니처 핸드라이팅</div>
              </NavbarLink>
              <NavbarLink hideNavbar={hideNavbar}>
                  <div onClick={onClickbutton4}>랜덤 펜팔</div>
              </NavbarLink>
              </NavbarLinks>
              <NavbarLink hideNavbar={hideNavbar}>
              
              <ExportOutlined className="logout-icon" />
              <div onClick={onClickbutton5}>로그아웃</div>
                  
              </NavbarLink>
              
          </NavbarContainer>
      </NavbarWrapper>
      </PageWrapper>
    
  );
}