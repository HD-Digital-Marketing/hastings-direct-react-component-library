import React from 'react';
import {render} from 'react-dom';
import Title from '../components/atoms/title/Title';
import Button from '../components/atoms/button/Button';
import Table from "../components/atoms/table/Table";
import Link from "../components/atoms/link/Link";

const Playground = () => {

    const tableHeaders = [
        'First name',
        'Last name',
        'Age',
        'Gender'
    ]

    const tableData = [
        [
            'Jack',
            'Smith',
            '29',
            'Male'
        ]
    ]


    return (
        <>
            <Table tableHeaders={tableHeaders} tableData={tableData} />
            <Button type="button" theme="primary">Click me I'm a button</Button>
            <Title titleType="h1" theme="primary">I'm a H1 element</Title>
            <Title titleType="h2" theme="primary">I'm a H2 element</Title>
            <Title titleType="h3" theme="primary">I'm a H3 element</Title>
            <Title titleType="h4" theme="primary">I'm a H4 element</Title>
            <Title titleType="h5" theme="primary">I'm a H5 element</Title>
            <Title titleType="h6" theme="primary">I'm a H6 element</Title>
            <Link href="https://google.com" rel="noopener noreferrer" role="button" target="_blank" theme="primary">Click me I'm a link</Link>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);