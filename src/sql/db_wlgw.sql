create table t_admin( 
userId int null,
userName varchar(50) null,
userPw varchar(50) null,
primary key(userId)
);

create table t_user( 
user_id int null,
user_name varchar(50) null,
user_pw varchar(50) null,
user_type int null,
user_realname varchar(50) null,
user_address varchar(50) null,
user_sex varchar(50) null,
user_tel varchar(50) null,
user_email varchar(50) null,
user_qq varchar(50) null,
user_man varchar(50) null,
user_age varchar(50) null,
user_birthday varchar(50) null,
user_xueli varchar(50) null,
user_del varchar(50) null,
user_one1 varchar(50) null,
user_one2 varchar(50) null,
user_one3 varchar(50) null,
user_one4 varchar(50) null,
user_one5 varchar(50) null,
user_one6 int null,
user_one7 int null,
user_one8 int null,
user_one9 datetime null,
user_one10 datetime null,
user_one11 numeric(19,0) null,
user_one12 numeric(19,0) null,
primary key(user_id)
);

create table t_catelog( 
catelog_id int null,
catelog_name varchar(50) null,
catelog_miaoshu varchar(5000) null,
catelog_del varchar(50) null,
primary key(catelog_id)
);

create table t_order( 
order_id int null,
order_bianhao varchar(50) null,
order_date varchar(50) null,
order_zhuangtai varchar(50) null,
order_songhuodizhi varchar(50) null,
order_fukuangfangshi varchar(50) null,
order_jine int null,
order_user_id int null,
primary key (order_id)
);

create table t_orderItem( 
orderItem_id int null,
order_id int null,
goods_id int null,
goods_quantity int null,
primary key(orderItem_id)
);

create table t_goods( 
goods_id int null,
goods_name varchar(50) null,
goods_miaoshu varchar(5000) null,
goods_pic varchar(50) null,
goods_yanse varchar(50) null,
goods_shichangjia int null,
goods_tejia int null,
goods_isnottejia varchar(50) null,
goods_isnottuijian varchar(50) null,
goods_catelog_id int null,
goods_kucun int null,
goods_Del varchar(50) null,
primary key(goods_id)
);

create table t_gonggao( 
gonggao_id int null,
gonggao_title varchar(50) null,
gonggao_content varchar(8000) null,
gonggao_data varchar(50) null,
gonggao_fabuzhe varchar(255) null,
gonggao_del varchar(50) null,
gonggao_one1 varchar(50) null,
gonggao_one2 varchar(50) null,
gonggao_one3 varchar(50) null,
gonggao_one4 varchar(50) null,
gonggao_one5 datetime null,
gonggao_one6 datetime null,
gonggao_one7 int null,
gonggao_one8 int null,
primary key(gonggao_id)
);

create table t_liuyan( 
liuyan_id int null,
liuyan_title varchar(50) null,
liuyan_content varchar(5000) null,
liuyan_date varchar(50) null,
liuyan_user varchar(50) null,
primary key(liuyan_id)
);


insert into t_admin(userId,userName,userPw) values (1,'a','a');

insert into t_user(user_id,user_name,user_pw,user_type,user_realname,user_address,user_sex,user_tel,user_email,user_qq,user_man,user_age,user_birthday,user_xueli,user_del,user_one1,user_one2,user_one3,user_one4,user_one5,user_one6,user_one7,user_one8,user_one9,user_one10,user_one11,user_one12) values (1,'liusan','000000',0,'刘三','北京路','男','13888888888','liusan@yahoo.cn','2222','','','','','no','','','','','',null,null,null,null,null,null,null);

insert into t_catelog(catelog_id,catelog_name,catelog_miaoshu,catelog_del) values (1,'婚庆鲜花','婚庆鲜花','no');
insert into t_catelog(catelog_id,catelog_name,catelog_miaoshu,catelog_del) values (2,'友情鲜花','友情鲜花','no');
insert into t_catelog(catelog_id,catelog_name,catelog_miaoshu,catelog_del) values (3,'生日鲜花','生日鲜花','no');
insert into t_catelog(catelog_id,catelog_name,catelog_miaoshu,catelog_del) values (4,'商业鲜花','商业鲜花','no');
insert into t_catelog(catelog_id,catelog_name,catelog_miaoshu,catelog_del) values (5,'祝福鲜花','祝福鲜花','no');

insert into t_order(order_id,order_bianhao,order_date,order_zhuangtai,order_songhuodizhi,order_fukuangfangshi,order_jine,order_user_id) values (1,'20120730023936','2012-07-30 02:39:36','yes','xxxxxxxxxxxxxx','货到付款',537,1);

insert into t_orderItem(orderItem_id,order_id,goods_id,goods_quantity) values (1,1,4,1);
insert into t_orderItem(orderItem_id,order_id,goods_id,goods_quantity) values (2,1,8,1);
insert into t_orderItem(orderItem_id,order_id,goods_id,goods_quantity) values (3,1,9,2);
insert into t_orderItem(orderItem_id,order_id,goods_id,goods_quantity) values (4,1,10,2);

insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (1,'漂亮妈妈','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852193812.jpg','',50,45,'yes','',2,499,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (2,'感恩父母','感恩父母','/upload/1318852225343.jpg','',60,55,'yes','',2,99,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (3,'慈母之爱','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852272796.jpg','',40,30,'yes','',2,1000,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (4,'今生有爱 ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配 请输入内容','/upload/1318852295500.gif','',200,150,'yes','',3,99,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (5,'蓝色梦想  ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852342484.gif','',50,18,'yes','',4,100,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (6,'如心如意 ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852372875.gif','',88,0,'no','',1,300,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (7,'唯有爱 ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852416343.gif','',70,70,'no','',5,88,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (8,'唯有爱 ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852499312.gif','',55,55,'no','',3,96,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (9,'相依相随 ','材 料： 19枝红玫瑰，5寸小熊一只，巴西木叶3片，叶上花适量搭配','/upload/1318852532484.gif','',66,66,'no','',1,97,'no');
insert into t_goods(goods_id,goods_name,goods_miaoshu,goods_pic,goods_yanse,goods_shichangjia,goods_tejia,goods_isnottejia,goods_isnottuijian,goods_catelog_id,goods_kucun,goods_Del) values (10,'幸福时光','幸福时光','/upload/1318852589750.gif','',100,100,'no','',4,192,'no');

insert into t_gonggao(gonggao_id,gonggao_title,gonggao_content,gonggao_data,gonggao_fabuzhe,gonggao_del,gonggao_one1,gonggao_one2,gonggao_one3,gonggao_one4,gonggao_one5,gonggao_one6,gonggao_one7,gonggao_one8) values (1,'购物有大礼想送，快来购物了','<strong>购物有大礼想送，快来购物了</strong>','2011-10-13 0:50:31','','','','','','',null,null,null,null);
insert into t_gonggao(gonggao_id,gonggao_title,gonggao_content,gonggao_data,gonggao_fabuzhe,gonggao_del,gonggao_one1,gonggao_one2,gonggao_one3,gonggao_one4,gonggao_one5,gonggao_one6,gonggao_one7,gonggao_one8) values (2,'迎国庆。部分鲜花8.8折扣','<strong>迎国庆。部分鲜花8.8折扣</strong>','2011-10-13 0:50:56','','','','','','',null,null,null,null);
insert into t_gonggao(gonggao_id,gonggao_title,gonggao_content,gonggao_data,gonggao_fabuzhe,gonggao_del,gonggao_one1,gonggao_one2,gonggao_one3,gonggao_one4,gonggao_one5,gonggao_one6,gonggao_one7,gonggao_one8) values (3,'本站所有鲜花质量绝对保证','<strong>本站所有鲜花质量绝对保证</strong>','2011-10-13 0:51:45','','','','','','',null,null,null,null);

insert into t_liuyan(liuyan_id,liuyan_title,liuyan_content,liuyan_date,liuyan_user) values (1,'不错。鲜花都很好','不错。鲜花都很好','2011-10-17 12:14:57','qwert');