import React, { useState } from 'react'

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {

    const payload = {
      email, password
    };


    fetch("http://localhost:8080/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) =>{
        res.json()
        console.log("Login");
      })
      // .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };


  
  return (
    <Stack style={{ backgroundColor:'#f3f4f6', marginTop:'60px'}} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Login</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={handleSubmit}
              colorScheme={'blue'} variant={'solid'}>
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.shutterstock.com/image-photo/businessman-fingerprint-scan-biometric-authentication-260nw-759104368.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}

