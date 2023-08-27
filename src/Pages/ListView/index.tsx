import { Component } from "react";
import Card from "../../Components/Cards/Card";
import { Grid } from "@mui/material";
import axios from "axios";

class ListView extends Component<ListViewProps, ListViewState> {
  constructor(props: ListViewProps) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => this.setState({ data: response.data?.data }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <h2>Data from API</h2>
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
}
