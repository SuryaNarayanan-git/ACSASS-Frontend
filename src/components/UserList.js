import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f7f7f7",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      color: "#333",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "4px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "5px 10px",
      fontSize: "14px",
      borderRadius: "4px",
      cursor: "pointer",
      border: "none",
      color: "white",
    },
    editButton: {
      backgroundColor: "#4CAF50",
    },
    deleteButton: {
      backgroundColor: "#f44336",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Users</h2>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user._id} style={styles.listItem}>
            <span>
              {user.name} - {user.email} - {user.age} years old
            </span>
            <div style={styles.buttons}>
              <button
                onClick={() => onEdit(user)}
                style={{ ...styles.button, ...styles.editButton }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user._id)}
                style={{ ...styles.button, ...styles.deleteButton }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
