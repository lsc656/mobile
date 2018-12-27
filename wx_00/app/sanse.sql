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
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(20) COMMENT "标题",
  img_url VARCHAR(128) COMMENT "图片路径",
  hit INT COMMENT "点击数量",
  fans INT COMMENT "粉丝量"
);
INSERT INTO sanse_pins (title,img_url,hit,fans) VALUES 
("舌尖上的美味","http://127.0.0.1:3000/img/pics/pics001.jpg",2505,2409),
("APP | 插画","http://127.0.0.1:3000/img/pics/pics002.jpg",1927,11157),
("app推荐图 · 手机模型","http://127.0.0.1:3000/img/pics/pics003.jpg",786,4457),
("Phone_ui 日历、时间","http://127.0.0.1:3000/img/pics/pics004.jpg",126,2389),
("flat","http://127.0.0.1:3000/img/pics/pics005.jpg",2322,25996),
("小窝","http://127.0.0.1:3000/img/pics/pics006.jpg",770,683),
("deedeedee","http://127.0.0.1:3000/img/pics/pics007.jpg",18686,30280),
("UI.细节","http://127.0.0.1:3000/img/pics/pics008.jpg",358,11587);


#图片展示页。对应关键字
CREATE TABLE sanse_pins_keyw(
  kid INT PRIMARY KEY AUTO_INCREMENT,
  keyword VARCHAR(10) COMMENT "关键字",
  pid INT COMMENT "与sanse_pins的pid对应",
  FOREIGN KEY (pid) REFERENCES sanse_pins (pid)
);

#图片展示页。对应所有图片
CREATE TABLE sanse_pins_pics(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(128) COMMENT "对应图片的路径",
);