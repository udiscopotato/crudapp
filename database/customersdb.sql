create database customersdb;
use customersdb;
create table customer (id int not null auto_increment, name varchar(50) not null, address varchar(100) not null,phone varchar(15), primary key (id));
insert into customer (name,address,phone) values ("Subham Jena","jena@example.com","7531594862");
describe customer;
select * from customer;