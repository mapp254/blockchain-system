// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {
    struct Certificate {
        string studentName;
        string courseName;
        string certificateId;
        uint256 issueDate;
    }

    mapping(string => Certificate) private certificates;

    function issueCertificate(string memory _studentName, string memory _courseName, string memory _certificateId) public {
        certificates[_certificateId] = Certificate(_studentName, _courseName, _certificateId, block.timestamp);
    }

    function verifyCertificate(string memory _certificateId) public view returns (string memory, string memory, uint256) {
        Certificate memory cert = certificates[_certificateId];
        require(bytes(cert.certificateId).length != 0, "Certificate not found");
        return (cert.studentName, cert.courseName, cert.issueDate);
    }
}
