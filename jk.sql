create table Teacher(
    id varchar(50) primary key,
    name varchar(40) not null,
    email varchar(50) unique not null,
    password varchar(40) not null
);