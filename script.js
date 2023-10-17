function saveData() {
    const action = document.querySelector('input[type="text"]').value;
      const id = document.querySelectorAll('input[type="text"]')[1].value;
    const start = document.getElementById('start-date').value;
    const end = document.getElementById('end-date').value;

    const monthYear = document.getElementById('month-year').value;
      const excludeDates = document.getElementById('exclude-dates').value;
    const numDays = document.getElementById('num-days').value;
        const leadCount = document.getElementById('Lead count').value;
    const lastUpdated = document.getElementById('Last Updated').value;

    const expectedDRR = leadCount * numDays;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
           <td>${action}</td>
          <td>${id}</td>
        <td>${start}</td>
           <td>${end}</td>

            <td>${monthYear}</td>
        <td>${excludeDates}</td>
            <td>${numDays}</td>
        <td>${leadCount}</td>
            <td>${expectedDRR}</td>
           <td>${lastUpdated}</td>
    `;

    document.getElementById('tbody').appendChild(newRow);

    resetForm();
}

function resetForm() {
    document.querySelector('input[type="text"]').value = '';
    document.querySelectorAll('input[type="text"]')[1].value = '';

        document.getElementById('start-date').value = '';
        document.getElementById('end-date').value = '';
       document.getElementById('month-year').value = '';
        document.getElementById('exclude-dates').value = '';

        document.getElementById('num-days').value = '';
         document.getElementById('Lead count').value = '';
           document.getElementById('Last Updated').value = '';
}