import React, { Component } from "react";

// List Item
import ListItem from "./ListItem";

// axios
import axios from "axios";

// loader gif
import loaderGif from "./loader.gif";

class NameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingIndex: null,
      newData: "",
      photo: null,
      notification: null,
      loading: true,
      data: []
    };
    this.secretApi = "https://5d4e2e9ed3acc30014f38541.mockapi.io";
  }

  componentDidMount() {
    // Fetch Api
    setTimeout(() => {
      this.getApi();
    }, 1000);
  }

  getApi = async () => {
    axios
      .get(`${this.secretApi}/data`)
      .then(res => {
        this.setState({
          data: res.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // handle change input
  handleChange = e => {
    this.setState({
      newData: e.target.value
    });
  };

  // add Todo
  addName = async () => {
    const postName = await axios.post(`${this.secretApi}/data`, {
      name: this.state.newData
    });
    const data = await this.state.data;
    await data.push(postName.data);
    this.setState({
      newData: "",
      loading: true,
      editing: true
    });
    this.alertOn("Berhasil menambahkan Nama");
  };

  // Delete Todo
  deleteName = async index => {
    const data = await this.state.data;
    const id = await data[index].id;
    await axios.delete(`${this.secretApi}/data/${id}`);
    await delete data[index];
    this.setState({ data, loading: true, editing: true });
    this.alertOn("Berhasil menghapus Nama ");
  };

  // Edit Todo
  editName = index => {
    const data = this.state.data[index];
    this.setState({
      editing: true,
      newData: data.name,
      editingIndex: index
    });
  };

  // Update Todo
  updateName = async () => {
    const dataId = await this.state.data[this.state.editingIndex];
    const updateApi = await axios.put(`${this.secretApi}/data/${dataId.id}`, {
      name: this.state.newData
    });
    const data = await this.state.data;
    data[this.state.editingIndex] = updateApi.data;
    this.setState({
      editingIndex: null,
      loading: true,
      editing: true,
      newData: "",
      data
    });
    this.alertOn("Berhasil mengedit Nama ");
  };

  alertOn = notif => {
    this.setState({
      notification: notif
    });

    setTimeout(() => {
      this.setState({
        notification: null,
        loading: false,
        editing: false
      });
    }, 500);
  };

  render() {
    return (
      <div className="container">
        <h3>Add Name App</h3>
        {this.state.notification && (
          <div className="alert alert-success">
            <p className="text-center">{this.state.notification}</p>
          </div>
        )}
        <input
          type="text"
          className="p-3 mb-3 form-control"
          placeholder="Tambah nama"
          onChange={this.handleChange}
          value={this.state.newData}
        />
        <button
          className="btn btn-success form-control mb-4"
          onClick={this.state.editing ? this.updateName : this.addName}
          disabled={this.state.newData.length < 6}
        >
          {this.state.editing ? "Ubah Nama" : "Tambah Nama"}
        </button>
        {/* loading gif */}
        <div className="text-center">
          {this.state.loading && <img width="100" src={loaderGif} />}
        </div>
        {!this.state.editing && (
          <ul className="list-group">
            {this.state.data.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  name={item.name}
                  deleteName={() => this.deleteName(index)}
                  editName={() => this.editName(index)}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default NameApp;
