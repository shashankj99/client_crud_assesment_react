import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Table } from "react-bootstrap";
import ClientTableRow from "./ClientTableRow";
import { baseURL } from "./config";

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [links, setLinks] = useState([]);
    const [page, setPage] = useState("1");

    useEffect(() => {
        axios.get(`${baseURL}/clients?page=${page}`)
            .then(({ data }) => {
                setClients(data.payload.data.data);
                setLinks(data.payload.data.links);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const DataTable = () => {
        return clients.map((res, i) => {
            return <ClientTableRow obj={res} key={i} />;
        });
    };

    const handlePagination = (e) => {
        setPage(e.target.innerHTML);
    }

    const paginations = () => {
        return links.map((link, i) => {
            if (link.url) {
                return (
                    <button key={i} onClick={handlePagination} className="btn btn-link">
                        {link.label}
                    </button>
                );
            }
            return null;
        });
    }

    return (
        <div>
            <Table striped size="sm" responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Nationality</th>
                        <th>DOB</th>
                        <th>Educational Background</th>
                        <th>Preferred Mode Of Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody>
            </Table>
            <Row className="my-2">
                <Col>
                    <div>
                        {paginations()}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ClientList;
