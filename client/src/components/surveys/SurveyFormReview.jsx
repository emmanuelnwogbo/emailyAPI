//Survey form review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import formFields from "./formFields";
import * as actions from "../../actions";

//below is a functional component
const SurveyFormReview = ({ cancelFormReview, formValues, submitSurvey }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>
					{label}
				</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={cancelFormReview}
			>
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues)}
				className="green btn-flat right"
			>
				Send Survey
				<i className="material-icons right white-text">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	//console.log(state);
	return {
		//whatever we return here ends up as props to our component
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
