import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";

const Index = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/home')
    }, [])
    return (
        <></>
    )
}

export default Index