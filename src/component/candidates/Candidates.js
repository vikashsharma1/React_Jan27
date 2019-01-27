import React, { Component } from "react";
import axios from "axios";
import "./Candidates.css";
import { connect } from "react-redux";
import { setUserName } from "../../actions";
import { bindActionCreators } from "redux";

class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateData: []
    };
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleNameClick = name => {
    this.props.setUserName(name);
    this.props.history.push("/detail");
  };

  componentWillMount() {
    axios
      .get("http://www.json-generator.com/api/json/get/bVRkwIXEMO?indent=2")
      .then(res => {
        this.setState({ candidateData: res.data });
      });
  }

  render() {
    console.log(this.state.candidateData);

    return (
      <div>
        <table>
          <tr>
            {/* <th>User pic</th> */}
            <th>Pic</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Skills</th>
          </tr>
          {this.state.candidateData.map((obj, index) => (
            <tr>
              <td>
                <div className="img-responsive">
                  <img src={obj.pic} />
                </div>
              </td>
              <td
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => this.handleNameClick(obj)}
              >
                {obj.candidate_name}
              </td>
              <td>{obj.designation}</td>
              <td>{obj.location}</td>
              <td>
                {obj.skills.toString(", ")}
                {/* {obj.skills.map((skill, i) => {
                  <span>{skill}</span>;
                })} */}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    xyz: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserName: bindActionCreators(setUserName, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates);
