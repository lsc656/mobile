SET NAMES UTF8;
DROP DATABASE IF EXISTS ds;
CREATE DATABASE ds CHARSET=UTF8;
USE ds;
#tag内容列表
CREATE TABLE ds_tag(
  did TINYINT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(12) COMMENT "tag内容"
);
#书目内容1(除目录、内容)
CREATE TABLE ds_list(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32) COMMENT "书名",
  fAuthor VARCHAR(32) COMMENT "第一作者",
  sAuthor VARCHAR(32) COMMENT "第二作者",
  summary VARCHAR(140) COMMENT "内容摘要(list页)",
  newPrice DECIMAL(10,2) COMMENT "现价",
  oldPrice DECIMAL(10,2) COMMENT "原价",
  imgSrc VARCHAR(80) COMMENT "图片src",
  copyright VARCHAR(32) COMMENT "版权",
  evaluate DECIMAL(2,1) COMMENT "评分",
  tagId TINYINT NOT NULL COMMENT "标签页id",
  wcount VARCHAR(10) COMMENT "字数",
  size VARCHAR(5) COMMENT "大小",
  bnumber VARCHAR(20) COMMENT "书号",
  publish_time DATE COMMENT "出版日期",
  update_time DATE COMMENT "更新日期",
  FOREIGN KEY (tagId) REFERENCES ds_tag (did)
);
#书目内容2(目录+内容)
CREATE TABLE ds_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  catalog_title VARCHAR(32) COMMENT "目录标题",
  catalog_content VARCHAR(400) COMMENT "目录简介",
  catalog_number SMALLINT COMMENT "目录序号",
  content VARCHAR(1000) COMMENT "与目录对应的内容",
  sid INT NOT NULL COMMENT "对应书id",
  FOREIGN KEY (sid) REFERENCES ds_list (sid)
);
INSERT INTO ds_tag VALUES 
(null,"最新特价"),
(null,"免费专区"),
(null,"畅销榜");