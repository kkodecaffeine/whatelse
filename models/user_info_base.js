const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_info_base', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "사용자 ID"
    },
    user_div: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "F",
      comment: "사용자 가입 구분(F:최초 가입\/R:연동 가입)"
    },
    relation_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "관계 ID"
    },
    linked_relation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "연결된 관계 ID"
    },
    channel_cd: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1001,
      comment: "채널 코드(code_grp_id:101)"
    },
    channel_unique_id: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "채널별 사용자 고유 ID"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "이메일"
    },
    apple_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Apple 가입 Email"
    },
    passwd: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "패스워드"
    },
    user_nm: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "사용자 이름"
    },
    nick_nm: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "닉네임"
    },
    cell: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "핸드폰 번호"
    },
    cell_key: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "핸드폰 번호(strict)"
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "U",
      comment: "성별(M:남자\/F:여자\/U:알수없음)"
    },
    age: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "연령대"
    },
    birth_dd: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      comment: "생일(MMDD)"
    },
    pass_fail_cnt: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "패스워드 실패 횟수"
    },
    pass_mod_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "패스워드 변경 일시"
    },
    join_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "가입 일시"
    },
    connect_yn: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N",
      comment: "연결 여부(Y:연결\/N:해제)"
    },
    connect_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "계정 연결 일시"
    },
    disconnect_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "연결 해제 일시"
    }
  }, {
    sequelize,
    tableName: 'user_info_base',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "uq__user_info_base__channel_cd__channel_unique_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "channel_cd" },
          { name: "channel_unique_id" },
        ]
      },
      {
        name: "ix_user_info_base_01",
        using: "BTREE",
        fields: [
          { name: "cell_key" },
        ]
      },
      {
        name: "ix__user_info_base__relation_id",
        using: "BTREE",
        fields: [
          { name: "relation_id" },
        ]
      },
    ]
  });
};
