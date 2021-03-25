import React from 'react';
import { useLocation } from 'react-router-dom'

export default function Test() {
  const localtion = useLocation()
  console.log('aaaa', localtion)
  return <h3>Test</h3>;
}