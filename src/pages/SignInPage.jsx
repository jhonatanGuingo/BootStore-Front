import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import React from "react"

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function SignInPage(){

}