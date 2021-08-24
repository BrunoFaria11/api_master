
module.exports = function (sequelize:any, DataTypes:any) {
  var Page = sequelize.define("Pages", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },{
    timestamps: false
  });


  return Page;
};
