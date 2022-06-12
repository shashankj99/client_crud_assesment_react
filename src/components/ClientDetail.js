import React, { useState, useEffect,  } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { baseURL } from "./config";

const ClientDetail = (props) => {
    const {id} = useParams();
    const [client, setClient] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseURL}/clients/${id}`)
            .then((res) => {
                setClient(res.data.payload.data);
            })
            .catch((err) => alert(err.message));
    }, [id]);

    return (
        <Table>
            <tbody>
                <tr>
                    <td><b>Name</b></td>
                    <td>
                    {
                        client.length && client[0]
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Gender</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[1]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Email Address</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[2]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Phone Number</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[3]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Address</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[4]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Nationality</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[5]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Date of Birth</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[6]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Educational Background</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[7]
                            : null
                    }
                    </td>
                </tr>
                <tr>
                    <td><b>Gender</b></td>
                    <td>
                    {
                        (client.length > 0)
                            ? client[8]
                            : null
                    }
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default ClientDetail;
