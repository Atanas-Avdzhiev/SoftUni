function generateReport() {
    const checkboxes = document.querySelectorAll("thead input[type='checkbox']");
    const rows = document.querySelectorAll("tbody tr");
    let result = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll("td");
        let reportRow = {};

        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                let columnName = checkboxes[j].name;
                reportRow[columnName] = cells[j].textContent.trim();
            }
        }
        result.push(reportRow);
    }
    document.querySelector("#output").value = JSON.stringify(result);
}