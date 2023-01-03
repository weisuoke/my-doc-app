import React from 'react'
import {Typography} from "@mui/material";
import styles from './Header.module.css'

type P = {
  children: any
}

const Header_1 = ({ children }: P) => {
  return (
    <Typography variant="h1">{children}</Typography>
  )
}

const Header_2 = ({ children }: P) => {
  return (
    <Typography variant="h2">{children}</Typography>
  )
}

const Header_3 = ({ children }: P) => {
  return (
    <Typography variant="h3">{children}</Typography>
  )
}

const Header_4 = ({ children }: P) => {
  return (
    <Typography variant="h4">{children}</Typography>
  )
}

const Header_5 = ({ children }: P) => {
  return (
    <Typography variant="h5">{children}</Typography>
  )
}

const Header_6 = ({ children }: P) => {
  return (
    <Typography variant="h6">{children}</Typography>
  )
}


export {
  Header_1,
  Header_2,
  Header_3,
  Header_4,
  Header_5,
  Header_6
}