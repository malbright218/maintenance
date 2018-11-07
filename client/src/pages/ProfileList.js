import React, {Component} from "react";

import CompanyProfile from "../components/CompanyProfile";
import Machines from "../components/Machines";

class ProfileList extends Component {
	state = {
		movies: [],
		allMovies: [],
		username: "",
		status: "all",
		sort: ""
	};

	render() {
		return ( 
			<div className="container">
				<div className="row">
					<div className="col-lg-2">
						<CompanyProfile>

						</CompanyProfile>
					</div>
					<div className="col-lg-10">
						<Machines>
					
						</Machines>
					</div>			
				</div>				
			</div>
		);
	}
}

export default ProfileList;