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
("app推荐图 · 手机模型","http://127.0.0.1:3000/img/pics/pics003.jpg",786,4457,2),
("Phone_ui 日历、时间","http://127.0.0.1:3000/img/pics/pics004.jpg",126,2389,2),
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,3),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,3),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,4),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,4),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,5),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,5),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,6),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,6),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,7),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,7),
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
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,3),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,3),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,4),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,4),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,5),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,5),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,6),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,6),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,7),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,7),
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
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996,3),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683,3),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280,4),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587,4),
("版式a - Visual 视觉系","http://127.0.0.1:3000/img/pics/pics009.jpg",2658,3790,5),
("一个人的旅行·在路上","http://127.0.0.1:3000/img/pics/pics010.jpg",1211,40051,5),
("什麽风把你吹来哒","http://127.0.0.1:3000/img/pics/pics011.jpg",6722,52953,6),
("巧克力集结号","http://127.0.0.1:3000/img/pics/pics012.jpg",469,14172,6),
("彩虹的颜色","http://127.0.0.1:3000/img/pics/pics013.jpg",134,534,7),
("雅居","http://127.0.0.1:3000/img/pics/pics014.jpg",1109,3479,7),
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics015.jpg",2505,2494,8),
("小窝","http://127.0.0.1:3000/img/pics/pics016.jpg",770,714,8),
("羽","http://127.0.0.1:3000/img/pics/pics017.jpg",64,1275,9),
("饕餮盛宴","http://127.0.0.1:3000/img/pics/pics018.jpg",621,5208,9),
("IconSimple","http://127.0.0.1:3000/img/pics/pics019.jpg",433,1139,10),
("字体欣赏","http://127.0.0.1:3000/img/pics/pics020.jpg",1062,5440,10);


#图片展示页。对应关键字
CREATE TABLE sanse_pins_keyw(
  kid INT PRIMARY KEY AUTO_INCREMENT,
  keyword VARCHAR(10) COMMENT "关键字",
  pid INT COMMENT "与sanse_pins的pid对应",
  FOREIGN KEY (pid) REFERENCES sanse_pins (pid)
);

#图片展示页。对应所有图片
CREATE TABLE sanse_pins_pics(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(128) COMMENT "对应图片的路径",
  pid INT COMMENT "与sanse_pins的pid对应",
  FOREIGN KEY (pid) REFERENCES sanse_pins (pid)
);