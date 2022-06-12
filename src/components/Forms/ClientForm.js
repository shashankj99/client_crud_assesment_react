import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, FormLabel } from "react-bootstrap";

const ClientForm = (props) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name cannot be empty"),
        gender: Yup.string()
            .required("Gender cannot be empty")
            .oneOf(["male", "female", "others"]),
        email: Yup.string()
            .email("You have enter an invalid email address")
            .required("Email cannot be empty"),
        phone: Yup.string()
            .matches(/^[+]?[0-9]{3}[-]?[0-9]{10}$/, "Phone number is not valid")
            .required("Phone number cannot be empty"),
        address: Yup.string()
            .required("Address cannot be empty"),
        nationality: Yup.string()
            .required("Nationality cannot be empty")
            .oneOf(["nepali"]),
        dob: Yup.date()
            .required("Date cannot be empty"),
        educational_background: Yup.string()
            .oneOf(["primary", "lower_secondary", "secondary", "higher_secondary", "undergraduate", "post_graduate"])
            .required("Educational Background is required"),
        preferred_mode_of_contact: Yup.string()
            .oneOf(["email", "phone", "none"])
            .required("Preferred mode of contact cannot be empty")
    });

    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup className="mb-3">
                        <FormLabel>Full Name</FormLabel>
                        <Field name="name" type="text" className="form-control" placeholder="Jane Doe" />
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('name' in props.errors)
                                ? <span className="text-danger">{props.errors.name[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel className="me-5">Gender</FormLabel>
                        <Field name="gender" type="radio" value="male" className="me-2" /> Male
                        <Field name="gender" type="radio" value="female" className="ms-3 me-2" /> Female
                        <Field name="gender" type="radio" value="others" className="ms-3 me-2" /> Others
                        <ErrorMessage
                            name="gender"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('gender' in props.errors)
                                ? <span className="text-danger">{props.errors.gender[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Email Address</FormLabel>
                        <Field name="email" type="text" className="form-control" placeholder="jane@gmail.com" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('email' in props.errors)
                                ? <span className="text-danger">{props.errors.email[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Phone Number</FormLabel>
                        <Field name="phone" type="text" className="form-control" placeholder="+977-98XXXXXXXX" />
                        <ErrorMessage
                            name="phone"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('phone' in props.errors)
                                ? <span className="text-danger">{props.errors.phone[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Address</FormLabel>
                        <Field name="address" type="text" className="form-control" placeholder="123 street, some place" />
                        <ErrorMessage
                            name="address"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('address' in props.errors)
                                ? <span className="text-danger">{props.errors.address[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Nationality</FormLabel>
                        <Field name="nationality" as="select" className="form-control">
                            <option value="">select a nationality</option>
                            <option value="nepali">Nepali</option>
                        </Field>
                        <ErrorMessage
                            name="nationality"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('nationality' in props.errors)
                                ? <span className="text-danger">{props.errors.nationality[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>DOB</FormLabel>
                        <Field name="dob" type="date" className="form-control" />
                        <ErrorMessage
                            name="dob"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('dob' in props.errors)
                                ? <span className="text-danger">{props.errors.dob[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Educational Background</FormLabel>
                        <Field name="educational_background" as="select" className="form-control">
                            <option value="">select an educational background</option>
                            <option value="primary">Primary</option>
                            <option value="lower_secondary">Lower secondary</option>
                            <option value="secondary">Secondary</option>
                            <option value="higher_secondary">Higher secondary</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="post_graduate">Post Graduate</option>
                        </Field>
                        <ErrorMessage
                            name="educational_background"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('educational_background' in props.errors)
                                ? <span className="text-danger">{props.errors.educational_background[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel className="me-4">Preferred Mode of Contact</FormLabel>
                        <Field name="preferred_mode_of_contact" type="radio" value="email" className="me-2" /> Email
                        <Field name="preferred_mode_of_contact" type="radio" value="phone" className="ms-3 me-2" /> Phone
                        <Field name="preferred_mode_of_contact" type="radio" value="none" className="ms-3 me-2" /> None
                        <ErrorMessage
                            name="preferred_mode_of_contact"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                        {
                            ('preferred_mode_of_contact' in props.errors)
                                ? <span className="text-danger">{props.errors.preferred_mode_of_contact[0]}</span>
                                : null
                        }
                    </FormGroup>
                    <Button variant="primary" block="block" type="submit" className="mb-2" disabled={props.isDisabled}>
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ClientForm;
