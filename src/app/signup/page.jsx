'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async(e)=>{
          e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
    name:user.name, // required
    email:user.email, // required
    password: user.password, // required
    image: user.image,
    
});
if(data){
    toast.success("Registration was Successful")
    router.push("/login")
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
        <div>
            <div className='flex justify-center items-center my-5'>
             <Form onSubmit={onSubmit} validationBehavior="aria" className="flex w-96 flex-col gap-4 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-950" >
                <h1 className='font-bebas text-3xl text-center'>Register Your Account</h1>
                 <TextField
        isRequired
        name="name"
        type="text"
        
      >
        <Label className='font-bebas text-lg'>Name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError />
      </TextField>
    

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
       
        name="image"
        type="url"
       
      >
        <Label className='font-bebas text-lg'>Photo URL</Label>
        <Input placeholder="image URL" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
      
        name="password"
        type="password"
        validate={(value) => {
             if (!value) return "Password is required";
          if (value.length < 6) {
            return "Password must be at least 8 characters";
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
        <Description>Must be at least 8 characters with 1 uppercase and 1 lowercase letter</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] border-[#ffb703] border-2 transition-all duration-300 hover:scale-110 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow px-7 text-lg">
         
          Register
        </Button>
        <Button type="reset" className="bg-gray-200 text-[#219ebc] hover:scale-106 transition-all duration-300">
          Reset
        </Button>
      </div>
     <div className="flex items-center gap-4 my-2">
  <div className="flex-1 h-px bg-gray-300" />
  <span className="font-bebas text-xl text-gray-500">OR</span>
  <div className="flex-1 h-px bg-gray-300" />
</div>
      <div>
         <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn}>
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      </div>
      <div>
        <p className='font-bebas text-center text-lg'>Already have an Account? Then, <Link href={"/login"} className='text-[#219ebc]'>Login</Link></p>
      </div>
    </Form> 
        </div>
        </div>
    );
};

export default SignUpPage;