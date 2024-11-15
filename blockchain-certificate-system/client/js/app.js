const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
    // ABI details go here, copy from compiled contract
];

let contract;
let web3;

window.onload = async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        contract = new web3.eth.Contract(contractABI, contractAddress);
    }

    document.getElementById('issueForm').onsubmit = async (e) => {
        e.preventDefault();
        const studentName = document.getElementById('studentName').value;
        const courseName = document.getElementById('courseName').value;
        const certificateId = document.getElementById('certificateId').value;

        await contract.methods.issueCertificate(studentName, courseName, certificateId).send({ from: ethereum.selectedAddress });
        alert('Certificate Issued');
    };

    document.getElementById('verifyForm').onsubmit = async (e) => {
        e.preventDefault();
        const certificateId = document.getElementById('verifyCertificateId').value;
        const cert = await contract.methods.verifyCertificate(certificateId).call();
        alert(`Student: ${cert[0]}, Course: ${cert[1]}, Issue Date: ${new Date(cert[2] * 1000).toLocaleString()}`);
    };
};
