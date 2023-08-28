import { Component } from "react";
import Card from "../../Components/Cards/Card";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import "./index.css";
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

  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Profile List</h2>
        <form onSubmit={this.handleSubmit} className="form-container">
          <TextField
            label="First Name"
            variant="outlined"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            margin="normal"
            className="form-element"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            margin="normal"
            className="form-element"
          />
          <TextField
            label="Email"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleEmailChange}
            margin="normal"
            className="form-element"
          />
          <TextField
            label="Avatar"
            variant="outlined"
            value={this.state.avatar}
            onChange={this.handleAvatarChange}
            margin="normal"
            className="form-element"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Submit
          </Button>
        </form>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                title={`${item.first_name} ${item.last_name}`}
                description={item.email}
                imageSrc={item.avatar}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ListView;

interface ListViewProps {}

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
