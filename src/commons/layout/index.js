import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

// 변하지 않는 값은 밖에다가 써줌
const HIDDEN_HEADERS = [
    "/",
    // ...
    // ..
]


export default function Layout(props) {

    const router = useRouter()
    console.log("------------")
    console.log(router.asPath)
    console.log("------------")

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
    return (
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style = {{height: "500px", display: "flex"}}>
                <div style= {{width: "30%", backgroundColor:'orange'}}>사이드바</div>
                <div style={{width: "70%"}}>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    )
}