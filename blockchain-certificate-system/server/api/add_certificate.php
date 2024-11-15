<?php
include '../db/db_connect.php';

$studentName = $_POST['studentName'];
$courseName = $_POST['courseName'];
$certificateId = $_POST['certificateId'];

$sql = "INSERT INTO certificates (student_name, course_name, certificate_id) VALUES ('$studentName', '$courseName', '$certificateId')";
if ($conn->query($sql) === TRUE) {
    echo "Certificate added successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
