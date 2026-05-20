'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {
      const router = useRouter();
        const onSubmit = async(e)=>{
              e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries())
    
            const { data, error } = await authClient.signIn.email({
        
        email:user.email, // required
        password: user.password, // required
    
        
    });
    if(data){
        toast.success("Login was Successful!")
        router.push("/")
    }
    else{
        toast.error(error.message)
    }
    
        }
        const handleGoogleSignIn = async() =>{
                const data = await authClient.signIn.social({
            provider: "google",
          });
            }
    return (
        <div className='my-5'>
             <div className='flex justify-center items-center h-[80vh]'>
             <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-950" >
                <h1 className='font-bebas text-3xl text-center'>Login Your Account</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className='font-bebas text-lg'>Email</Label>
        <Input placeholder="Enter Your email address" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
           if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter";
  }
         
          return null;
        }}
      >
        <Label className='font-bebas text-lg'>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase letter</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] border-[#ffb703] border-2 transition-all duration-300 hover:scale-110 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow px-7 text-lg">
         
          Login
        </Button>
        <Button type="reset" className="bg-gray-200 text-[#219ebc] hover:scale-106 transition-all duration-300">
          Reset
        </Button>
      </div>
     <div className="flex items-center gap-4 my-2">
  <div className="flex-1 h-px bg-gray-300" />
  <span className="text-xl font-bebas text-gray-500">OR</span>
  <div className="flex-1 h-px bg-gray-300" />
</div>
      <div>
         <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn}>
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      </div>
      <div>
        <p className='font-bebas text-center text-lg'>Do not have an Account yet? Then, <Link href={"/signup"} className='text-[#219ebc]'>Register</Link></p>
      </div>
    </Form> 
        </div>

        </div>
    );
};

export default LoginPage;