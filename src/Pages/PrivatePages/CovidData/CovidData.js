import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Covid from '../Covid/Covid';

const CovidData = () => {
	const [covids, setCovids] = useState([]);
	useEffect(() => {
		fetch('covidStatistics.json')
			.then(res => res.json())
			.then(data => setCovids(data));
	}, []);

	return (
		<div id="covid">
			<div id="covid-overly">
				<div className="container">
					<div id="covid-content">
						<h1 className="fw-bolder text-center">COVID-19 / Corona Virus Statistics</h1>

						<Table striped bordered hover variant="dark" className="mt-5">
							<thead>
								<tr>
									<th>Sl No</th>
									<th>Country</th>
									<th>Cases</th>
									<th>Deaths</th>
								</tr>
							</thead>
							<tbody>
								{
									covids.map(covid => <Covid
										key={covid.key}
										covid={covid}
									></Covid>)
								}
							</tbody>
						</Table>


					</div>
				</div>
			</div>
		</div>
	);
};

export default CovidData;

