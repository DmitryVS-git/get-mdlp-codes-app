function getValue() {

    const txtAreaMain = document.getElementById("txtAreaMain");
    const txtAreaRes = document.getElementById("txtAreaRes");

    const codes = (txtAreaMain.value.match(/(?<=<object_id>|<sgtin>|<sscc>)([^ ]*)(?=<\/object_id>|<\/sgtin>|<\/sscc>)/g)).sort();

    if (txtAreaRes.value !== null) {
        clearResults();
    }
    
    txtAreaRes.value = codes.join("\n");

};

function clearResults() {
    const txtAreaRes = document.getElementById("txtAreaRes");
    txtAreaRes.value = ""
};

function clearAll() {
    const txtAreaMain = document.getElementById("txtAreaMain");
    const txtAreaRes = document.getElementById("txtAreaRes");
    txtAreaRes.value = txtAreaMain.value = ""
};

function copyResults() {
    const copyText = document.getElementById("txtAreaRes");
    const btnCopy = document.querySelector(".btn-copy");

    if (copyText.value != "") {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value).then(() => {
            const label = document.querySelector(".copy-label");
            const icon = document.querySelector(".icon-copy");
            const originalText = label.textContent;

            btnCopy.disabled = true;
            label.textContent = "скопировано";
            // icon.getAttribute("src") = "adds/done.svg";
            icon.setAttribute("src", "adds/done.svg");


            setTimeout(() => {
                btnCopy.disabled = false;
                label.textContent = originalText;
                icon.setAttribute("src", "adds/copy.svg");  

            }, 1000);
        });  
        
    };
};