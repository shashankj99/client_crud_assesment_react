import React, { useState } from "react";
import axios from 'axios';
import ClientForm from "./Forms/ClientForm";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./config";

const CreateClilent = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        nationality: "",
        dob: "",
        educational_background: "",
        preferred_mode_of_contact: "",
    });

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const navigate = useNavigate();

    const onSubmit = clientObject => {
        setIsDisabled(true);
        setFormValues(clientObject);
        axios.post(`${baseURL}/clients`, clientObject)
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    setIsDisabled(false);
                    return navigate("/clients");
                }
                Promise.reject();
            })
            .catch(err => {
                if (err.response.status === 422) {
                    setErrors(err.response.data.message);
                }
                alert(err.message);
                setIsDisabled(false);
            });
    }

    return(
        <ClientForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
            errors={errors}
            isDisabled={isDisabled}
        >
            Create Client
        </ClientForm>
    )
}

export default CreateClilent;
