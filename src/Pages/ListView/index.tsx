import { Component } from "react";
import Card from "../../Components/Cards/Card";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";
import { RootState, Dispatch } from "../../Rematch/store";
import "./index.css";
import { userInterface } from "../../Rematch/Models/user/user.interface";
class ListView extends Component<ListViewProps, ListViewState> {
  constructor(props: ListViewProps) {
    super(props);
    this.state = {
      data: [],
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => this.setState({ data: response.data?.data }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  validateForm = () => {
    const { firstName, lastName, email, avatar } = this.state;
    let error = "";

    let isValid = true;

    if (firstName.trim() === "") {
      error = "First Name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      error = "Last Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      error = "Email is required";
      isValid = false;
    }

    if (avatar.trim() === "") {
      error = "Image Url is required";
      isValid = false;
    }

    if (!isValid) {
      alert(error);
    }
    return isValid;
  };

  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (this.validateForm()) {
      const newData = [...this.state.data];
      const newElement = {
        id: newData.length + 1,
        avatar: this.state.avatar,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
      };
      newData.push(newElement);
      this.setState({ data: newData });
    }
  };

  handleFirstNameChange = (e: { target: { value: any } }) => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = (e: { target: { value: any } }) => {
    this.setState({ lastName: e.target.value });
  };

  handleEmailChange = (e: { target: { value: any } }) => {
    this.setState({ email: e.target.value });
  };

  handleAvatarChange = (e: { target: { value: any } }) => {
    this.setState({ avatar: e.target.value });
  };

  selectUser = (
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
  ) => {
    this.props.changeSelectedUser({
      firstName: first_name,
      lastName: last_name,
      email: email,
      avatar: avatar,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Profile List</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <form onSubmit={this.handleSubmit} className="form-container">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Avatar"
                    variant="outlined"
                    value={this.state.avatar}
                    onChange={this.handleAvatarChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ minHeight: "56px" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                title={`${item.first_name} ${item.last_name}`}
                description={item.email}
                imageSrc={item.avatar}
                onPress={() => {
                  this.selectUser(
                    item.first_name,
                    item.last_name,
                    item.email,
                    item.avatar
                  );
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  userState: state.userModel,
});

const mapDispatch = (dispatch: Dispatch) => ({
  changeSelectedUser: (user: userInterface) =>
    dispatch.userModel.changeSelectedUser(user),
});

export default connect(mapState, mapDispatch)(ListView);

interface ListViewProps {
  changeSelectedUser: any;
}

interface DataItem {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface ListViewState {
  data: DataItem[];
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}
