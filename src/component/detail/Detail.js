import React, { Component } from "react";
//import axios from "axios";
import "./Detail.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUserName } from "../../actions";
import { bindActionCreators } from "redux";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    console.log("redux data", this.props.xyz.userName);

    return (
      <div className="detail-body">
        <div className="profile-flex">
          <div className="user-pic">
            <div className="pic-responsive">
              {" "}
              <img src={this.props.xyz.userName.pic} />
            </div>
          </div>
          <div className="user-profile">
            <tr>
              <td>Candidate name</td>
              <td>{this.props.xyz.userName.candidate_name}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{this.props.xyz.userName.designation}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{this.props.xyz.userName.location}</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>
                <div>
                  {this.props.xyz.userName.skills.map((skill, i) => (
                    <span>{skill}</span>
                  ))}
                </div>
              </td>
            </tr>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    xyz: state.main
  };
}

export default connect(mapStateToProps)(Detail);
