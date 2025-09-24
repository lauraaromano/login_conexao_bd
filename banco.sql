create database usuario;
use usuario;

create table cliente(
    id int auto_increment not null,
    login varchar(100) null,
    senha varchar(100) null,
    primary key(id)
)

insert into cliente values
(1,'ringo','1234@'),
(2,'john','12345'),
(3,'paul','5555@');

select * from cliente;