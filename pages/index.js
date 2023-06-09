import { useRouter } from "next/router"

export default function Page() {
  
  const router = useRouter()
  const onClickLogin = () => {
    router.push('/login')
  }
  return(
    <div>
      <button onClick={onClickLogin}>로그인페이지로 이동하기</button>
    </div>
  )
}