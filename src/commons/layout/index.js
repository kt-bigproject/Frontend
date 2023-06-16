import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation4";
import Sidebar from "./sidebar";
import styled from "@emotion/styled";

// 변하지 않는 값은 밖에다가 써줌
const Main = [
    "/",
]

const layoutFunction = [
    "/login",
]


const LayoutDiv = styled.div`
    display: flex;
    flex-direction: row;
`


export default function Layout(props) {

    const router = useRouter()

    const isMain = Main.includes(router.asPath);
    const isFunction = layoutFunction.includes(router.asPath);
    return (
        <LayoutNavigation></LayoutNavigation>
        // <LayoutDiv>
        //     {!isMain && <Sidebar />}
        //     <div>
        //         {!isMain && <LayoutHeader />}
        //         {!isFunction && <LayoutNavigation />}
        //         <div style = {{display: "flex"}}>
        //             <div style={{width: "70%"}}>{props.children}</div>
        //         </div>
        //     </div>
        // </LayoutDiv>
    )
}


