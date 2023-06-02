
# NodeJs app complete end to end deployment on AWS

A brief description of what this project does and who it's for


## AWS Services Used

1. Ec2 Instance
2. lunch template
3. ec2 auto scaling
4. load balancing
5. aws RDS (relational database service) (MySQL)
6. AWS WAF (Web application firewall)
7. Route 53
8. custom domain

#### if the crudapp.drawio file is not showing to you, then you can see it from here

https://drive.google.com/file/d/1Rurxjv1aq4pUl1VqmyV-7PlFnxKlc93x/view?usp=sharing



# First thing to do
You need to fork this repo because you'll have to change the database configuration file present in "src/db.js"
> only by doing this the automated script which will connect our database to frontend will work
>file need to be edited after database creation in your repo
```javascript
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "[paste your rds endpoint here]",
  user: "[paste your rds username here]",
  password: "[your user password]",
  port: 3306,
  database: "customersdb",
});
```

## Steps

Let's create 3 security groups first
  -
  1.for ec2 instances(refer png_files/ec2-securityGroup)
  2.for rds(refer png_files/rds-securityGroup)
  3.for loadbalancer(refer png_files/loadbalancer-securityGroup)

## Create a rds 
Create a rds(MySQL) database with pubic access with the securityGroup we created earlier.
(this will take around 10 minutes)

## access the database
to accessthe database we need to open the ec2 instances we created earlier and install mysql in it 
```javascript
sudo apt update
sudo apt install mysql-server -y
```
after our rds is on running state and mysql-server installed in ec2, we can connect to the rds by using this command
```javascript
mysql -h [paste your rds endpoint] -u [rds username] -p
```
after successfull connection, you need to create database and table in it, to do that run these sql scrips
```javascript
create database customersdb;
use customersdb;
create table customer (id int not null auto_increment, name varchar(50) not null, address varchar(100) not null,phone varchar(15), primary key (id));
insert into customer (name,address,phone) values ("Subham Jena","jena@example.com","7531594862");
describe customer;
select * from customer;
```
now you can close the ec2 instance and stop it
## create a launch template
you need to create ec2-launch-template which will be the blueprint for the autoscale group 
1.Ubuntu ami 
2.ec2 securitGroup which you created earlier 
3.Provide startup-script(user data) in advance setting
```javascript
#!bin/bash

apt update
cd /home/ubuntu
git clone [git link of your repo which you forked ]
cd crudapp

apt install mysql-server -y
apt install nodejs -y
apt install npm -y
npm install

cp /home/ubuntu/crudapp/crud.service /etc/systemd/system/crud.service

systemctl start crud.service
systemctl enable crud.service

```
paste this script in the user data 
## create autoscaling group
you need to create a autoscaling group using the launch template just created, for further reference you can see png_files
 >this will take around 5-10min to setup the ec2 instance for you 
## create target group and loadbalancer
after creating autoscaling group you need to create target group and a loadbalancer and associate them to the autoscal group 
> reference available in (png_files)
## creation of route 53 and aws waf
to create waf you follow this link
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-awswaf.html 
> to create Route 53 and conntect to you Domain you can follow this link 
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/setting-up-route-53.html

for further assistance you can refer files present in (png_files)

## Authors
  for further help you can connect me from my linkedin
- [@subhamjena](https://www.linkedin.com/in/subham-jena-267a43169/)