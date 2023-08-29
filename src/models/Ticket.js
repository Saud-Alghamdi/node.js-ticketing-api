const { db, Model, DataTypes } = require("./dbConfig");

// Create Ticket table in DB if it doesn't exist
db.sync()
  .then(() => console.log("Ticket Model has been synchronized successfully."))
  .catch((error) => console.error("Error syncing Ticket model:", error));

class Ticket extends Model {}

Ticket.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Open",
    },
    createdBy: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      references: {
        model: Ticket,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Ticket",
  }
);

module.exports = Ticket;
