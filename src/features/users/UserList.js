import { fetchUsers, userDeleted } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
    { field: "UserName", headerName: "User Name", width: 130 },
  ];
  const rows = [{ id: { id }, Name: { name }, UserName: { username } }];

  return (
    <div className="container">
      <div className="row">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
            variant="contained"
            color="primary"
          >
            Load Users
          </Button>
        </div>
        <div>
          <Link to="/add-user">
            <Button variant="contained" color="secondary">
              Add user
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div> */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}
