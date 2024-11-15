CREATE DATABASE edoc;

USE edoc;

CREATE TABLE certificates (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255),
    course_name VARCHAR(255),
    certificate_id VARCHAR(255) UNIQUE,
    issue_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
