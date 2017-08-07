//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
	//using create react app gives us a nice babel plugin that allows
	//us to define state like so below
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview === true) {
			return (
				<SurveyFormReview
					cancelFormReview={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<SurveyForm
				surveySubmition={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

export default reduxForm({
	form: "surveyForm"
})(SurveyNew);
