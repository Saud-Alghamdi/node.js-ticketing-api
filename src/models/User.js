const { db, Model, DataTypes } = require("./dbConfig");

// Create User table in DB if it doesn't exist
db.sync()
  .then(() => console.log("User Model has been synchronized successfully."))
  .catch((error) => console.error("Error syncing user model:", error));

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin", "superadmin"],
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
