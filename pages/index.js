import { useRouter } from "next/router"

export default function Page() {
  const aaa = useRouter()

  const onclickbutton = () => {
    aaa.push("../login")
  }
  return(
    <div>
      <button onClick={onclickbutton}>로그인페이지로 이동하기</button>
    </div>
  )
}