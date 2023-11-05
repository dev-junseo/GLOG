'use client';
import CenterContent from '@/components/Layout/CenterContent';
import ModalButton from '@/components/Modal/ModalButton';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {
  const params = useSearchParams();

  useEffect(() => {
    const getTokenValue = params.get('token');
    const error = params.get('error');

    if (getTokenValue) {
      localStorage.setItem('token', getTokenValue);
    } else {
      console.log(error);
    }
  }, [params]);


  return (
    <CenterContent>
      <Stack flexDirection="column" alignItems="center" paddingTop="15vh">
        <TextField
          required
          sx={{ marginBottom: '5px', width: '300px' }}
          id="outlined-basic"
          label="blog URL"
          variant="outlined"
        />
        <Stack fontSize="10px" color="red" marginBottom="15px">
          *블로그 URL은 수정할 수 없으니 신중히 적어주세요.
        </Stack>
        <TextField
          required
          sx={{ marginBottom: '30px', width: '300px' }}
          id="outlined-basic"
          label="이름"
          variant="outlined"
        />
        <TextField
          required
          sx={{ marginBottom: '5px', width: '300px' }}
          id="outlined-basic"
          label="닉네임"
          variant="outlined"
        />
        <Stack fontSize="10px" color="red" marginBottom="15px">
          *닉네임이 블로그 주소에 반영 됩니다.
        </Stack>
        <Button variant='outlined'>입력</Button>

      </Stack>
    </CenterContent>
  );
};

export default Page;
