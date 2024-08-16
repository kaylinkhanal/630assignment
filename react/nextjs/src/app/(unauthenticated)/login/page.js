'use client'
import { Button, Card, CardBody, DatePicker, Image, Input } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"


const Login = ()=> {
  const router = useRouter()
  const handleRegister = ()=> {
      router.push('/home')
  }
  return (
    <div className="flex justify-center items-center">
    <Card className="flex w-96 p-4 m-12">
          <Image
      width={300}
      alt="NextUI hero Image"
      src="logo.png"
    />
      <CardBody className="flex gap-2">
    <Input placeholder="Enter Email"/>
    <Input placeholder="enter password"/>
    <Button onClick={handleRegister} className="bg-blue-400 text-white">Login</Button>
    <p>Don't have an account? <Link href="/register">Register</Link>  instead</p>
    <Link href="/forget-password">Forget Password</Link>
    </CardBody>
    </Card>

    </div>

  )
}

//JSX

export default Login