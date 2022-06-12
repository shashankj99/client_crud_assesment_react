import React from "react";
import { Link } from "react-router-dom";

const ClientTableRow = (props) => {
	return (
		<tr>
			<td>{props.obj[0]}</td>
			<td>{props.obj[1]}</td>
			<td>{props.obj[2]}</td>
			<td>{props.obj[3]}</td>
			<td>{props.obj[4]}</td>
			<td>{props.obj[5]}</td>
			<td>{props.obj[6]}</td>
			<td>{props.obj[7]}</td>
			<td>{props.obj[8]}</td>
			<td>
				<Link className="btn btn-link"
					to={"/clients/" + props.obj[9]}>
					View Detail
				</Link>
			</td>
		</tr>
	);
};

export default ClientTableRow;
