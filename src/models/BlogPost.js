module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: "blog_posts",
      underscored: true,
    }
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: { name: "userId", field: "user_id" },
      as: "users",
    });
  };

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostCategory, {
      foreignKey: "postId",
      as: "PostCategories",
    });
  };
  return BlogPost;
};
