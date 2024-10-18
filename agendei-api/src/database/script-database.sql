create table users (
    id_user   INTEGER PRIMARY KEY AUTOINCREMENT,
    name      VARCHAR (50),
    email     VARCHAR (100),
    password  VARCHAR (100) 
);

create table admins (
    id_admin  INTEGER PRIMARY KEY AUTOINCREMENT,
    name      VARCHAR (50),
    email     VARCHAR (100),
    password  VARCHAR (100) 
);

create table doctors (
    id_doctor  INTEGER PRIMARY KEY AUTOINCREMENT,
    name       VARCHAR (50),
    specialty  VARCHAR (50),
    icon       VARCHAR (10) 
);

create table services (
    id_service  INTEGER PRIMARY KEY AUTOINCREMENT,
    description VARCHAR (50)
);

create table doctors_services (
	id_doctor_service INTEGER PRIMARY KEY AUTOINCREMENT,
  id_doctor  	INTEGER,
	id_service 	INTEGER,
  price      	DECIMAL(9,2),
	
	foreign key (id_doctor)  references doctors(id_doctor),
	foreign key (id_service) references services(id_service)	
);

create table appointments (
	id_appointment INTEGER PRIMARY KEY AUTOINCREMENT,
	id_doctor    	 INTEGER,
	id_service   	 INTEGER,
	id_user 	 	 	 INTEGER,
	booking_date 	 DATE,
	booking_hour 	 VARCHAR(5),	

	foreign key (id_doctor)  references doctors(id_doctor),
	foreign key (id_service) references services(id_service),
	foreign key (id_user) 	 references users(id_user)	
);

