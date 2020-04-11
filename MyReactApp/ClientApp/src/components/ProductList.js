import React, { Component } from 'react';
import { useParams } from "react-router-dom";

export function ProductList() {

    let { id } = useParams();

    return (<h1>Hello! {id}</h1>)
}