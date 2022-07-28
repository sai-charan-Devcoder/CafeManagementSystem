create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contact varchar(20),
    email varchar(50),
    password varchar(20),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);

insert into user(name,contact,email,password,status,role) values('Admin','9999999999','Admin@gmail.com','Admin123','true','Admin');