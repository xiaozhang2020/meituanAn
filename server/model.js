const mongoose = require('mongoose');
const dbName = require('../config/db');

//数据库的地址
const DB_URL = `mongodb://localhost:27017/${dbName.dbName}`;
mongoose.connect(DB_URL);

const models = {
  meituan: {
    // 注册时间
    createTime: { type: String, require: true },
    // 手机号
    phone: { type: String, require: true },
    // 密码
    password: { type: String, require: true },
    // 性别
    sex: { type: String },
    // 昵称
    name: { type: String },
    // 地区
    address: { type: String },
    // 密码的盐
    salt: { type: String, require: true },
    // 第一次注册密码是否被修改
    firstPas: { type: Boolean },
    // 美团会员等级
    level: { type: Number },
    // 收藏列表
    collections: { type: Array },
    // 抵用券列表
    quans: { type: Array },
    // 抽奖券
    chous: { type: Array },
    // 用户头像设置
    avatar: { type: String },
    // 关注的数量
    guans: { type: Array },
    // 粉丝的数量
    fens: { type: Array },
    // 好友的数量
    haos: { type: Array },
  },
  back: {
    // 首页图片url
    imgUrls: { type: Array },
    // 销售数量
    xiao: { type: String },
    // 名称
    name: { type: String },
    // 副标题
    oldName: { type: String },
    // 原先价格
    old: { type: String },
    // 新价格
    new: { type: String },
    // 地址
    address: { type: String },
    // 团购总价
    sub: { type: String },
    // 页面标题
    sup: { type: String },
    // 是否支持随时退款
    sui: { type: String },
    // 是否支持过期自动退款
    guo: { type: String },
    // 90天内消费数量
    num: { type: Number },
    // 页面地址
    xiangqings: { type: Array },
    quanAddress: { type: String },
    // 团购信息
    tuans: { type: Array },
    tain: { type: String },
    // 购买需知
    youxiao: { type: String },
    yuyue: { type: String },
    tixing: { type: String },
    tishi: { type: String },
  },
  hot: {
    // 首页标题
    title: { type: String },
    // 图片路径
    imgUrls: { type: Array },
    // 文本域
    textArea: { type: String },
    // 点赞列表
    adds: { type: Array },
    // 评论列表
    speaks: { type: Array },
    // 浏览数量
    egg: { type: String },
    // 发布者姓名
    name: { type: String },
    // 发布者头像
    avatar: { type: String },
    // 分类:
    select: { type: String },
    // 创建时间
    createTime: { type: String },
  },
  Chat: {
    // 回话id
    chatid: { type: String, require: true },
    // 是否读取
    read: { type: Boolean, default: false },
    // 发送者
    from: { type: String, require: true },
    // 读取者
    to: { type: String, require: true },
    // 内容
    value: { type: String, require: true, default: '' },
    // 创建时间
    create_time: { type: Number, default: '' },
    // 发布者详情
    fromDetail: { type: Object },
    // 接受者详情
    toDetail: { type: Object },
  },
  expression: {
    name: String, // 表情包名称
    info: String, // 描述
    list: Array, // 表情列表
    code: Number, // 编码
  },
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getNames: function(name) {
    return mongoose.model(name);
  },
};
