-- -----------------------------------------------------
-- START  
-- -----------------------------------------------------
set FOREIGN_KEY_CHECKS=0;
-- -----------------------------------------------------
-- Drop Tables
-- -----------------------------------------------------
drop table if exists professors;
drop table if exists students;
drop table if exists employers;
drop table if exists company_listings;
drop table if exists student_profile_page;
drop table if exists student_projects;
drop table if exists student_education;
drop table if exists student_experience;
drop table if exists student_ratings;
drop table if exists student_alerts;
drop table if exists company_alerts;
-- -----------------------------------------------------
-- Create Users
-- -----------------------------------------------------
create table professors (
    professor_id int auto_increment primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    school_name varchar(255),
    password varchar(255) not null,
    email varchar(255) not null unique key,
    state tinyint default null,
    code varchar(500)
);
create table employers (
    employer_id int auto_increment primary key,
    first_name varchar(255),
    last_name varchar(255),
    organization_name varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null unique key,
    state tinyint default null,
    code varchar(500)
);
create table students (
    student_id int auto_increment primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    school_name varchar(255),
    password varchar(255) not null,
    email varchar(255) not null unique key,
    state tinyint default null,
    code varchar(500)
);
-- -----------------------------------------------------
-- Create User Tables  
-- -----------------------------------------------------
create table student_profile_page (
    student_id int primary key,
    about_me mediumtext,
    strengths_qualities mediumtext,
    location varchar(255),
    resume blob default null,
    profile_image longtext default null,
    school_grade_level varchar(255),
    foreign key (student_id)
        references students (student_id)
);
create table student_education (
    student_id int,
    school varchar(255),
    degree varchar(255),
    school_gpa float,
    study_major varchar(255),
    start_year year,
    end_year year,
    foreign key (student_id)
        references students (student_id)
);
create table student_projects (
    student_id int,
    project_name varchar(150),
    summary mediumtext,
    arr_tools_used mediumtext,
    professor varchar(50),
    links_website varchar(50),
    links_other_website varchar(50),
    arr_collaborators_arr mediumtext,
    media mediumtext,
    foreign key (student_id)
        references students (student_id)
);
create table student_ratings (
    reflection_id int auto_increment primary key,
    student_id int,
    professor_id int,
    responsible_level int,
    team_work_level int,
    leadership_level int,
    committed_to_success_level int,
    recommendation_comment mediumtext,
    rating_total float,
    student_seen TINYINT default 0,
    student_hide TINYINT default 0,
    publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    foreign key (student_id)
        references students (student_id),
    foreign key (professor_id)
        references professors (professor_id)
);
create table student_experience (
    student_id int,
    experience_title_position varchar(50),
    company_name varchar(100),
    date_start date,
    date_end date,
    arr_work_done_keywords varchar(500),
    description_experience mediumtext,
    location varchar(500),
    employment_type varchar(500),
    foreign key (student_id)
        references students (student_id)
);
create table company_listings (
	listing_id int auto_increment primary key,
    employer_id int,
    organization_name varchar(255),
    position_title varchar(255),
    location varchar(255),
    job_type varchar(255),
    experience_years varchar(255),
    experience_level varchar(255),
    salary float,
    about_us mediumtext,
    the_opportunity mediumtext,
    task_responsibilities mediumtext,
    skillset mediumtext,
    benefits mediumtext,
    landing_image longtext,
    foreign key (employer_id)
        references employers (employer_id)
);

create table company_alerts (
	compalert_id int auto_increment primary key,
    student_id int,
    employer_id int,
    listing_id int,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    hidden BOOLEAN not null default 0,
    foreign key (student_id)
        references students (student_id),
    foreign key (employer_id)
        references employers (employer_id),
    foreign key (listing_id)
        references company_listings (listing_id) ON DELETE CASCADE
);

create table student_alerts (
	stualert_id int auto_increment primary key,
    employer_id int,
    student_id int,
    listing_id int,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    hidden BOOLEAN default false,
    foreign key (student_id)
        references students (student_id),
    foreign key (employer_id)
        references employers (employer_id),
    foreign key (listing_id)
        references company_listings (listing_id) ON DELETE CASCADE
);
-- -----------------------------------------------------
-- Insert Users  
-- -----------------------------------------------------
insert into students(first_name,last_name,school_name,password,email,state,code) values 
("Tom","Bobby","San Francisco State University","pass12345","elonmusk@mail.com",0,500),
("Jonathen","Kask","Harvard University","pass12345","lyrasolomon@mail.com",0,"500"),
("Zorba","Lee","East Bay University","pass12345","rolandlee@mail.com",0,"500"),
("Bob","Rob","East Bay University","pass12345","joseG@mail.com",0,"500"),
("Vitoria ","Taras","East Bay University","pass12345","taras@mail.com",0,"500"),
("Tony","Stark","Kansas State University","pass12345","tgdfaras@mail.com",0,"500"),
("Rondy","Kar","Louisiana State University","pass12345","wogfdoo@mail.com",0,"500"),
("Sunny","Jar","University of Nebraska Omaha","pass12345","roo123@mail.com",0,"500"),
("Good","Pop","King George's Medical University","pass12345","markoplier@mail.com",0,"500"),
("Jacky","Tarzan","New York University School of Law","pass12345","jackseptikey@mail.com",0,"500");

insert into professors(first_name,last_name,school_name,password,email,state,code) values
 ("Henry","Villar","San Francisco State University","pass12345","henry@mail.com",0,"500"),
 ("Hui","Huang","San Francisco State University","pass12345","huiyang@mail.com",0,"500"),
 ("Jose","Ortiz","San Francisco State University","pass12345","jose@mail.com",0,"500"),
 ("Duc","Ta","San Francisco State University","pass12345","ducTa@mail.com",0,"500");
 
insert into employers(first_name,last_name,organization_name,password,email,state,code) values
("Jack","Man","Google","pass12345","microsoft@mailr.com",0,"500"),
("Steve","Job","Apple","pass12345","apple@mailr.com",0,"500"),
("Jalon","Musk","Tesla","pass12345","tesla@mailr.com",0,"500"),
("Tim","Dillon","SquareSpace","pass12345","squarespace@mailr.com",0,"500");

-- -----------------------------------------------------
-- Insert User Tables   
-- -----------------------------------------------------
insert into student_ratings(student_id,professor_id,responsible_level,team_work_level,leadership_level,committed_to_success_level,recommendation_comment,rating_total) values
(1,1,5,5,5,5,"It is with much enthusiasm that I recommend Tom Bloom for inclusion in the College Scholars Program at the University of Tennessee.",2),
(2,2,1,2,3,5,"I recommend this student because of Jonathen enthusiasm.",1),
(3,1,2,5,5,5,"Zorba wide-ranging intellect is such that he would be bored by most freshman- and sophomore-level Liberal Arts courses. He is ready to assume and excel in upper division classwork, and possesses the self-motivation to successfully create and execute an independent course of honors study.",1),
(4,1,5,2,5,5,"Bob academic strengths are complemented by his demonstrated leadership skills – he was our band’s drum major for two years and served as Vice President of the Student Council and Editor of our high school yearbook. He is also very active in his church and in the Sierra Student Coalition.",5),
(5,1,3,5,5,5,"victoria’s wide-ranging intellect is such that he would be bored by most freshman- and sophomore-level Liberal Arts courses. He is ready to assume and excel in upper division classwork, and possesses the self-motivation to successfully create and execute an independent course of honors study.",2),
(6,1,5,5,5,5,"it is with much enthusiasm that I recommend Tom Bloom for inclusion in the College Scholars Program at the University of Tennessee",5),
(7,2,1,3,3,5,"i recommend this student because of Jonathen enthusiasm.",4),
(8,1,5,5,1,5,"rondy wide-ranging intellect is such that he would be bored by most freshman- and sophomore-level Liberal Arts courses. He is ready to assume and excel in upper division classwork, and possesses the self-motivation to successfully create and execute an independent course of honors study.",2),
(9,1,5,5,3,5,"good academic strengths are complemented by his demonstrated leadership skills – he was our band’s drum major for two years and served as Vice President of the Student Council and Editor of our high school yearbook. He is also very active in his church and in the Sierra Student Coalition.",4),
(10,1,5,1,5,5,"jacky’s wide-ranging intellect is such that he would be bored by most freshman- and sophomore-level Liberal Arts courses. He is ready to assume and excel in upper division classwork, and possesses the self-motivation to successfully create and execute an independent course of honors study.",2),
(10,2,5,1,5,5,"jacky’s wide-ranging intellect is such that he would be bored by most freshman- and sophomore-level Liberal Arts courses. He is ready to assume and excel in upper division classwork, and possesses the self-motivation to successfully create and execute an independent course of honors study.",2);

insert into student_projects(student_id,project_name,summary,arr_tools_used,professor,links_website,arr_collaborators_arr) values
(1,"Node hatchio","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby,Smith"),
(2,"BigFish","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(3,"TriFish","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(4,"SeaFish","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(5,"BigFish","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(6,"TriFish","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(7,"FarCry","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(8,"SuperCry","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(9,"LooCry","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(10,"FooCry","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby"),
(10,"FooCry","CRUD application for CSC648","JavaScript,Mysql","Henry Villar","http.hatchio.com","Jacob,Bobby");

insert into student_education(student_id, school, degree, school_gpa, study_major, start_year, end_year) values
(1,"San Francisco State University","Bachelors",4.0,"English",2018,2022),
(3,"East Bay University","Doctoral",3.5,"Computer Science",2017,2021),
(2,"Harvard University","Masters",3.0,"Art",2012,2016),
(4,"East Bay University","Accounting",3.7,"Botany",2017,2021),
(5,"East Bay University","Doctoral",3.5,"Biology",2017,2021),
(6,"Harvard University","Masters",3.0,"Cinema",2012,2016),
(7,"East Bay University","Accounting",3.7,"Ecology",2017,2021),
(8,"East Bay University","Doctoral",3.5,"Japanese",2017,2021),
(9,"Harvard University","Masters",3.0,"Social Work",2012,2016),
(10,"East Bay University","Accounting",3.7,"Accounting",2017,2021);

insert into student_experience(student_id,experience_title_position,company_name, date_start,date_end,arr_work_done_keywords,description_experience,location,employment_type) values
(1,"Jelly Bean Packager","The America Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(1,"Jelly Rean Packager","The Spain Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(2,"Jelly Bean Packager","The Mexico Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(3,"Jelly Tean Packager","The Korea Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(4,"Jelly Bean Packager","The Pink Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(5,"Jelly Tean Packager","The Yellow Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(6,"Jelly Bean Packager","The Green Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(7,"Jelly Tean Packager","The Blue Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(8,"Jelly Tean Packager","The Red Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(9,"Jelly Sean Packager","The Cheese Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),
(10,"Jelly Lean Packager","The Apple Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time");

insert into student_profile_page(student_id,about_me,strengths_qualities,location,school_grade_level) values
(1,"I've always loved the Victorian period in English literature. Even as a kid, Dickens captured my imagination more thoroughly than the Harry Potter stories or anything else. As an undergraduate at Northwestern University, I studied English with a concentration on Victorian fiction. Now, I hope to continue exploring this fundamentally important literary period as a graduate student.","honest,courages,strong,brave","New York","Freshman"),
(2,"I'm a senior at Michigan Technological University, majoring in biomedical engineering. Ever since I was a kid, I've wanted to work in the field of prosthetics. I saw first-hand how a prosthetic limb helped give my best friend a normal teenage life, and I've always wanted to be a part of that process. I'm drawn to prosthetic design and research, which is why I'm so excited to learn more about the internship your company is offering","cold,happy,adaptive,collaborator ","California","Sophomore"),
(3,"I graduated this spring from Montana State University. It took me basically forever to decide what I wanted to major in, but I finally settled on biology. It's better than the other sciences, I guess, and I'm pretty decent at it. I've taken all kinds of biology classes, but I like marine biology best. It's just fun. That's why I want to go to grad school for marine biology.","Good Teamworker,Leadership,Organization","Ohio","Junior"),
(4,"I graduated in May from the University of Pennsylvania with a degree in accounting, but my passion for numbers goes back much further than that. Even as a kid, I loved tax season. My parents used to think it was funny, and it definitely didn't endear me to other fifth graders. When I was 11, my mom let me do her taxes, and I just can't describe the satisfaction I felt when I saved her money. Wisely, she had an accountant check my work, and she came back shocked that I hadn't made any mistakes. She used the money from her refund to buy me books on accounting. For as long as I can remember, I've dreamt of working at H&R Block, and this internship opportunity is that dream come true.","Capable,Insightful","Pleasant Hill, CA","Senior"),
(5,"I've always loved the Victorian period in English literature. Even as a kid, Dickens captured my imagination more thoroughly than the Harry Potter stories or anything else. As an undergraduate at Northwestern University, I studied English with a concentration on Victorian fiction. Now, I hope to continue exploring this fundamentally important literary period as a graduate student.","honest,courages,strong,brave","New York","Masters"),
(6,"I'm a senior at Michigan Technological University, majoring in biomedical engineering. Ever since I was a kid, I've wanted to work in the field of prosthetics. I saw first-hand how a prosthetic limb helped give my best friend a normal teenage life, and I've always wanted to be a part of that process. I'm drawn to prosthetic design and research, which is why I'm so excited to learn more about the internship your company is offering","cold,happy,adaptive,collaborator ","California","Doctorate"),
(7,"I graduated this spring from Montana State University. It took me basically forever to decide what I wanted to major in, but I finally settled on biology. It's better than the other sciences, I guess, and I'm pretty decent at it. I've taken all kinds of biology classes, but I like marine biology best. It's just fun. That's why I want to go to grad school for marine biology.","Good Teamworker,Leadership,Organization","Ohio","Alumni"),
(8,"I graduated in May from the University of Pennsylvania with a degree in accounting, but my passion for numbers goes back much further than that. Even as a kid, I loved tax season. My parents used to think it was funny, and it definitely didn't endear me to other fifth graders. When I was 11, my mom let me do her taxes, and I just can't describe the satisfaction I felt when I saved her money. Wisely, she had an accountant check my work, and she came back shocked that I hadn't made any mistakes. She used the money from her refund to buy me books on accounting. For as long as I can remember, I've dreamt of working at H&R Block, and this internship opportunity is that dream come true.","Capable,Insightful","San Diego, CA","Freshman"),
(9,"I graduated this spring from Montana State University. It took me basically forever to decide what I wanted to major in, but I finally settled on biology. It's better than the other sciences, I guess, and I'm pretty decent at it. I've taken all kinds of biology classes, but I like marine biology best. It's just fun. That's why I want to go to grad school for marine biology.","Good Teamworker,Leadership,Organization","Ohio","Junior"),
(10,"I graduated in May from the University of Pennsylvania with a degree in accounting, but my passion for numbers goes back much further than that. Even as a kid, I loved tax season. My parents used to think it was funny, and it definitely didn't endear me to other fifth graders. When I was 11, my mom let me do her taxes, and I just can't describe the satisfaction I felt when I saved her money. Wisely, she had an accountant check my work, and she came back shocked that I hadn't made any mistakes. She used the money from her refund to buy me books on accounting. For as long as I can remember, I've dreamt of working at H&R Block, and this internship opportunity is that dream come true.","Capable,Insightful","San Francisco, CA","Doctorate");

insert into company_listings(employer_id,organization_name,position_title,location,job_type,experience_years,experience_level,salary,about_us,the_opportunity,skillset,benefits,task_responsibilities) values
(1,"Google","User Experience Designer","Pleasant Hill, Ca","Full Time","minimum 5 Years","Senior Level",105000,"Our mission is to organize the world’s information and make it universally accessible and useful.","Work with the top class engineers and mentors that will help you grow with the company and as an individual","1.Enthusiasm2.Willing to work hard3.Passionate","1.401k2.Good Salary3.great Experience","debugging,c++,collaboration"),
(1,"Google","Backend Developer","San Diego, Ca","Remote","Minimum 2 Years","Mid Level",15000,"Our mission is to organize the world’s information and make it universally accessible and useful.","Work with the top class engineers and mentors that will help you grow with the company and as an individual","1.Enthusiasm2.Willing to work hard3.Passionate","1.401k2.Good Salary3.Great Experience","debugging,c++,collaboration"),
(2,"Apple","Frontend Developer","san Diego, Ca","Contract","Maximum 10 Years","senior Level",10500,"Our mission is to organize the world’s information and make it universally accessible and useful.","Work with the top class engineers and mentors that will help you grow with the company and as an individual","1.Enthusiasm2.Willing to work hard3.Passionate","1.401k2.Good Salary3.Great Experience","debugging,c++,collaboration"),
(3,"Tesla","Full Stack Developer","Pleasant Hill, Ca","Internship","Minimum 3 Years","Directors",35000,"Our mission is to organize the world’s information and make it universally accessible and useful.","Work with the top class engineers and mentors that will help you grow with the company and as an individual","1.Enthusiasm2.Willing to work hard3.Passionate","1.401k2.Good Salary3.Great Experience","debugging,c++,collaboration");

insert into company_alerts(student_id,employer_id,listing_id,time,hidden) values 
(1,1,1,'2020-01-01 06:00:00',0),
(2,1,1,'2015-12-01 06:00:00',0),
(3,1,2,'2010-11-01 06:00:00',0),
(2,1,2,'2015-03-21 15:25:37',0);

insert into student_alerts(employer_id,student_id,listing_id,time,hidden) values 
(1,1,1,'2020-01-02 08:30:25',0),
(1,2,2,'2015-03-21 04:48:20',0);
-- -----------------------------------------------------
-- End  
-- -----------------------------------------------------
SET FOREIGN_KEY_CHECKS=1;

