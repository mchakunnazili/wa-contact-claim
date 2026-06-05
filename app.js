if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

function parseVCF(vcf) {

    const nameMatch = vcf.match(/FN:(.*)/);

    const telMatch = vcf.match(/TEL.*:(.*)/);

    return {
        name: nameMatch ? nameMatch[1] : '',
        phone: telMatch ? telMatch[1] : ''
    };
}

document
.getElementById('claimBtn')
.addEventListener('click', () => {

    alert('Claim berhasil');

});
