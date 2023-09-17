import {
  GITHUB_AUTH_URL,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
} from '@/constant/common';
import { Stack } from '@mui/material';
import React from 'react';

function page() {
  return (
    <Stack direction={'row'} spacing={3}>
      <a href={GOOGLE_AUTH_URL}>구글</a>
      <a href={KAKAO_AUTH_URL}>카카오</a>
      <a href={NAVER_AUTH_URL}>네이버</a>
      <a href={GITHUB_AUTH_URL}>깃허브</a>
    </Stack>
  );
}

export default page;