SET NAMES UTF8;
DROP DATABASE IF EXISTS sanse;
CREATE DATABASE sanse CHARSET=UTF8;
USE sanse;

CREATE TABLE sanse_index_fl1(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255) COMMENT "图片路径",
  tag VARCHAR(10) COMMENT "图片上显示的文字"
);
INSERT INTO sanse_index_fl1 (img_url,tag) VALUES 
("http://127.0.0.1:3000/img/index/f1-1.jpg","圣诞插画"),
("http://127.0.0.1:3000/img/index/f1-2.jpg","圣诞节素材"),
("http://127.0.0.1:3000/img/index/f1-3.jpg","圣诞美食"),
("http://127.0.0.1:3000/img/index/f1-4.jpg","圣诞树"),
("http://127.0.0.1:3000/img/index/f1-5.jpg","圣诞手机壁纸"),
("http://127.0.0.1:3000/img/index/f1-6.jpg","兔");

CREATE TABLE sanse_pins(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(20) COMMENT "标题",
  img_url VARCHAR(128) COMMENT "图片路径",
  hit INT COMMENT "点击数量",
  fans INT COMMENT "粉丝量"
);



CREATE TABLE sanse_pins_keyw(
  kid INT PRIMARY KEY AUTO_INCREMENT,
  keyword VARCHAR(10) COMMENT "关键字",
  pid INT COMMENT "与sanse_pins的pid对应",
  FOREIGN KEY (pid) REFERENCES sanse_pins (pid)
);