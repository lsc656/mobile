SET NAMES UTF8;
DROP DATABASE IF EXISTS sanse;
CREATE DATABASE sanse CHARSET=UTF8;
USE sanse;

#首页一楼
CREATE TABLE sanse_index_fl1(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255) COMMENT "图片路径",
  tag VARCHAR(10) COMMENT "标签",
  hot INT COMMENT "关注度"
);
INSERT INTO sanse_index_fl1 (img_url,tag,hot) VALUES 
("http://127.0.0.1:3000/img/index/f1-1.jpg","圣诞插画",50),
("http://127.0.0.1:3000/img/index/f1-2.jpg","圣诞节素材",60),
("http://127.0.0.1:3000/img/index/f1-3.jpg","圣诞美食",30),
("http://127.0.0.1:3000/img/index/f1-4.jpg","圣诞树",10),
("http://127.0.0.1:3000/img/index/f1-5.jpg","圣诞手机壁纸",15),
("http://127.0.0.1:3000/img/index/f1-6.jpg","兔",85);

#图片展示页主要信息
CREATE TABLE sanse_pins(
  pid INT PRIMARY KEY AUTO_INCREMENT COMMENT "类ID",
  title VARCHAR(20) COMMENT "标题",
  img_url VARCHAR(128) COMMENT "图片路径",
  hit INT COMMENT "点击数量",
  fans INT COMMENT "粉丝量",
  author INT COMMENT "作者ID"
);
INSERT INTO sanse_pins (title,img_url,hit,fans,author) VALUES 
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics001.jpg",2505,2409,1),
("APP | 插画","http://127.0.0.1:3000/img/pics/pics002.jpg",1927,11157,1),
("app推荐图 · 手机模型","http://127.0.0.1:3000/img/pics/pics003.jpg",786,4457,1),
("Phone_ui 日历、时间","http://127.0.0.1:3000/img/pics/pics004.jpg",126,2389,1),
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,1),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,1),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,1),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,1),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,2),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,2),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,2),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,2),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,2),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,2),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics015.jpg",2505,2494,2),
("小窝","http://127.0.0.1:3000/img/pics/pics016.jpg",770,714,2),
("羽","http://127.0.0.1:3000/img/pics/pics017.jpg",64,1275,1),
("饕餮盛宴","http://127.0.0.1:3000/img/pics/pics018.jpg",621,5208,2),
("IconSimple","http://127.0.0.1:3000/img/pics/pics019.jpg",433,1139,1),
("字体欣赏","http://127.0.0.1:3000/img/pics/pics020.jpg",1062,5440,1),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics001.jpg",2505,2409,1),
("APP | 插画","http://127.0.0.1:3000/img/pics/pics002.jpg",1927,11157,1),
("app推荐图 · 手机模型","http://127.0.0.1:3000/img/pics/pics003.jpg",786,4457,2),
("Phone_ui 日历、时间","http://127.0.0.1:3000/img/pics/pics004.jpg",126,2389,2),
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,2),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,1),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,1),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,1),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,1),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,1),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,1),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,1),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,2),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,2),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics015.jpg",2505,2494,8),
("小窝","http://127.0.0.1:3000/img/pics/pics016.jpg",770,714,8),
("羽","http://127.0.0.1:3000/img/pics/pics017.jpg",64,1275,9),
("饕餮盛宴","http://127.0.0.1:3000/img/pics/pics018.jpg",621,5208,9),
("IconSimple","http://127.0.0.1:3000/img/pics/pics019.jpg",433,1139,10),
("字体欣赏","http://127.0.0.1:3000/img/pics/pics020.jpg",1062,5440,10),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics001.jpg",2505,2409,1),
("APP | 插画","http://127.0.0.1:3000/img/pics/pics002.jpg",1927,11157,1),
("app推荐图 · 手机模型","http://127.0.0.1:3000/img/pics/pics003.jpg",786,4457,2),
("Phone_ui 日历、时间","http://127.0.0.1:3000/img/pics/pics004.jpg",126,2389,2),
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,2),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,2),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,1),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,1),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,1),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,1),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,1),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,1),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,1),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,1),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics015.jpg",2505,2494,1),
("小窝","http://127.0.0.1:3000/img/pics/pics016.jpg",770,714,1),
("羽","http://127.0.0.1:3000/img/pics/pics017.jpg",64,1275,1),
("饕餮盛宴","http://127.0.0.1:3000/img/pics/pics018.jpg",621,5208,1),
("IconSimple","http://127.0.0.1:3000/img/pics/pics019.jpg",433,1139,1),
("字体欣赏","http://127.0.0.1:3000/img/pics/pics020.jpg",1062,5440,1);


#用户信息
CREATE TABLE sanse_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  user_img VARCHAR(128) COMMENT "用户头像",
  uname VARCHAR(32) COMMENT "用户名",
  upwd VARCHAR(32) COMMENT "用户密码",
  tel VARCHAR(32) COMMENT "用户联系方式",
  fans INT COMMENT "关注数量",
  likes INT COMMENT "点击喜欢次数",
  cj INT COMMENT "采集数量"
);

INSERT INTO sanse_user (user_img,uname,upwd,tel,fans,likes,cj) VALUES 
('http://127.0.0.1:3000/img/headPortraits/headP-1.jpg','Cats~',md5(123456),13000000000,491,0,2903),
('http://127.0.0.1:3000/img/headPortraits/headP-1.jpg','Amber菜花小姐',md5(123456),13000000000,80,0,343);

#用户关注信息
CREATE TABLE sanse_user_focus(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT COMMENT 'user/authorID',
  focId INT COMMENT '关注的ID'
);
INSERT INTO sanse_user_focus (uid,focId) VALUES
(1,2),
(2,1);

#图片展示页。对应所有该作者该类图片预览中图及相应信息
CREATE TABLE sanse_pins_pics(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img_md VARCHAR(128) COMMENT "对应中图的路径",
  img_lg VARCHAR(128) COMMENT "对应大图的路径",
  ctime DATETIME COMMENT "图片采集时间",
  authorId INT COMMENT "对应作者ID",
  account VARCHAR(180) COMMENT "图片描述",
  zan INT COMMENT "点赞次数",
  likes INT COMMENT "点击喜欢次数",
  shares INT COMMENT "点击分享次数",
  pid INT COMMENT "与sanse_pins的pid对应",
  FOREIGN KEY (pid) REFERENCES sanse_pins (pid)
);

INSERT INTO sanse_pins_pics (img_md,img_lg,ctime,authorId,account,zan,likes,shares,pid) VALUES 
('http://127.0.0.1:3000/img/imgs/img_001_md.jpg','http://127.0.0.1:3000/img/imgs/img_001_lg.jpg',now(),1,'【每日灵感！2018潘通色竟然是它？】潘通发布了2018年的流行色——紫外光色，今年紫色真是要发红咯，怎么玩转紫色呢？看看别的设计师是怎么做的。#设计秀# #优设每日灵感#',40,1,0,1);
