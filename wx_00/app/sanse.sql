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
  user_img VARCHAR(128) DEFAULT 'http://127.0.0.1:3000/img/headPortraits/default.jpg' COMMENT "用户头像",
  uname VARCHAR(32) COMMENT "用户名(显示)",
  upwd VARCHAR(32) COMMENT "用户密码",
  tel VARCHAR(32) DEFAULT '未填写联系方式' COMMENT "用户联系方式",
  fans INT COMMENT "关注数量",
  likes INT COMMENT "点击喜欢次数",
  cj INT COMMENT "采集数量",
  wx_openID VARCHAR(28) COMMENT 'openID'
);

INSERT INTO sanse_user (user_img,uname,upwd,tel,fans,likes,cj,wx_openID) VALUES 
('http://127.0.0.1:3000/img/headPortraits/headP-1.jpg','Cats~',md5(123456),13000000000,491,0,2903,"oae5N5bhebIYgvA3oysMXGfrAOak"),
('http://127.0.0.1:3000/img/headPortraits/headP-1.jpg','Amber菜花小姐',md5(123456),13000000000,80,0,343,null),
('http://127.0.0.1:3000/img/headPortraits/headP-1.jpg','HLogic',md5(123456),13000000000,80,0,343,null);

#用户关注信息
CREATE TABLE sanse_user_focus(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT COMMENT 'user/authorID',
  focId INT COMMENT '关注的ID'
);
INSERT INTO sanse_user_focus (uid,focId) VALUES
(1,2),
(1,3),
(2,1),
(2,3),
(3,2),
(3,1);

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
('http://127.0.0.1:3000/img/imgs/img_001_md.jpg','http://127.0.0.1:3000/img/imgs/img_001_lg.jpg',now(),1,'【每日灵感！2018潘通色竟然是它？】潘通发布了2018年的流行色——紫外光色，今年紫色真是要发红咯，怎么玩转紫色呢？看看别的设计师是怎么做的。#设计秀# #优设每日灵感#',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_002_md.jpg','http://127.0.0.1:3000/img/imgs/img_002_lg.jpg',now(),1,'2019猪年喜庆红色海报背景免费下载2019年  猪年海报  元旦  春节  锣鼓',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_003_md.jpg','http://127.0.0.1:3000/img/imgs/img_003_lg.jpg',now(),1,'金属质感纹理金色背景免费下载金属质感  鎏金背景  金闪光  创意  金色',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_004_md.jpg','http://127.0.0.1:3000/img/imgs/img_004_lg.jpg',now(),1,'新春年货节红色喜庆海报背景免费下载年货节  新年  新春  灯笼  烫金',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_005_md.jpg','http://127.0.0.1:3000/img/imgs/img_005_lg.jpg',now(),1,'春天中国风浪漫电商海报背景免费下载中国风  春天  春季  花瓣  花',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_006_md.jpg','http://127.0.0.1:3000/img/imgs/img_006_lg.jpg',now(),1,'小清新中国风新年签合成背景海报免费下载新年签  图腾  圆形  新年  锦鲤',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_007_md.jpg','http://127.0.0.1:3000/img/imgs/img_007_lg.jpg',now(),1,'中国风水墨山水荷花枫叶海报免费下载中国风  古风  山水  水墨  荷花',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_008_md.jpg','http://127.0.0.1:3000/img/imgs/img_008_lg.jpg',now(),1,'新年签小清新中国风古典底纹背景海报免费下载古典底纹  中国风  小清新  新年签  文艺',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_009_md.jpg','http://127.0.0.1:3000/img/imgs/img_009_lg.jpg',now(),1,'中国风简约渔船水墨山水海报免费下载中国风  古风  山水  水墨  简约  ',40,1,0,1),
('http://127.0.0.1:3000/img/imgs/img_010_md.jpg','http://127.0.0.1:3000/img/imgs/img_010_lg.jpg',now(),1,'简约中国风猪年贺卡底纹背景免费下载2019  新春  灯笼  猪年  贺卡  ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_011_md.jpg','http://127.0.0.1:3000/img/imgs/img_011_lg.jpg',now(),1,'红色中国风吉祥福字背景免费下载中国风  吉祥  福字  红色  背景 ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_012_md.jpg','http://127.0.0.1:3000/img/imgs/img_012_lg.jpg',now(),1,'新年年货节复古中国风淘宝电商海报背景免费下载年货节海报背景  淘宝海报背景  复古中国风  年货节  新年  ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_013_md.jpg','http://127.0.0.1:3000/img/imgs/img_013_lg.jpg',now(),1,'新年 年货节 复古中国风 淘宝海报背景 年货节海报背景 中国风海报背景 锦鲤 祥云 过年不打烊',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_014_md.jpg','http://127.0.0.1:3000/img/imgs/img_014_lg.jpg',now(),1,'年货节中国风红色电商海报背景免费下载天猫年货节  中国风  年货节  灯笼  红色  ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_015_md.jpg','http://127.0.0.1:3000/img/imgs/img_015_lg.jpg',now(),1,'年货节 中国风 红色 天猫年货节 灯笼 祥云 抢年货 年终促销 新年 春节 2019',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_016_md.jpg','http://127.0.0.1:3000/img/imgs/img_016_lg.jpg',now(),1,'中国风中元节鬼节海报背景图免费下载中元节  中国风  河灯  海报  鬼节  ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_017_md.jpg','http://127.0.0.1:3000/img/imgs/img_017_lg.jpg',now(),1,'中国风 中元节 鬼节 海报 中元节海报背景 河灯 放河灯 水墨山水 电商中元节海拔背景',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_018_md.jpg','http://127.0.0.1:3000/img/imgs/img_018_lg.jpg',now(),1,'中国风古典折扇故宫海报背景免费下载中国风  深蓝色  古典  故宫  高端  ',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_019_md.jpg','http://127.0.0.1:3000/img/imgs/img_019_lg.jpg',now(),1,'中国风 古典 折扇 故宫 深蓝色 高端 传统 如懿传 海报 背景',40,1,0,2),
('http://127.0.0.1:3000/img/imgs/img_020_md.jpg','http://127.0.0.1:3000/img/imgs/img_020_lg.jpg',now(),1,'淘宝中国风简约纹理海报背景免费下载中国风  文艺  简约  纹理  边框  ',40,1,0,2);
