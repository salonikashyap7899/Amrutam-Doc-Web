'use client';

import React from 'react';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

export default function Page() {
  return (
    <>
      <HomePage />
      <Toaster position="top-right" />
    </>
  );
}