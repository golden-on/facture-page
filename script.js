$(document).ready(function() {
    $('#add-invoice').click(async function() {
        const date = $('#date').val();
        const invoiceNumber = $('#invoice-number').val();
        const supplier = $('#supplier').val();
        const accountNumber = $('#account-number').val();
        const nature = $('#nature').val();
        const tax = $('#tax').val();
        const rubrique = $('#rubrique').val();
        const amountHT = parseFloat($('#amount-ht').val());
        const taxRate = parseFloat($('#tax-rate').val());
        const amountTax = (amountHT * taxRate / 100).toFixed(2);
        const amountTTC = (amountHT + parseFloat(amountTax)).toFixed(2);

        const newRow = `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 border border-gray-300">${date}</td>
                <td class="px-6 py-4 border border-gray-300">${invoiceNumber}</td>
                <td class="px-6 py-4 border border-gray-300">${supplier}</td>
                <td class="px-6 py-4 border border-gray-300">${accountNumber}</td>
                <td class="px-6 py-4 border border-gray-300">${nature}</td>
                <td class="px-6 py-4 border border-gray-300">${tax}</td>
                <td class="px-6 py-4 border border-gray-300">${rubrique}</td>
                <td class="px-6 py-4 border border-gray-300">${amountHT.toFixed(2)}</td>
                <td class="px-6 py-4 border border-gray-300">${taxRate.toFixed(2)}</td>
                <td class="px-6 py-4 border border-gray-300">${amountTax}</td>
                <td class="px-6 py-4 border border-gray-300">${amountTTC}</td>
                <td class="px-6 py-4 border border-gray-300">
                    <button class="update-invoice bg-yellow-500 text-white p-2 rounded">
                        <i class="fas fa-edit">edt</i>
                    </button>
                    <button class="delete-invoice bg-red-500 text-white p-2 rounded">
                        <i class="fas fa-trash">sup</i>
                    </button>
                </td>
            </tr>
        `;

    $('#invoice-table-body').append(newRow);

        // Simulate async data addition
        await addDataAsync();

        // Update Supplier Section
        const supplierRow = `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 border border-gray-300">${date}</td>
                <td class="px-6 py-4 border border-gray-300">${invoiceNumber}</td>
                <td class="px-6 py-4 border border-gray-300">${accountNumber}</td>
                <td class="px-6 py-4 border border-gray-300">${amountHT.toFixed(2)} DH</td>
                <td class="px-6 py-4 border border-gray-300">${amountTax} DH</td>
                <td class="px-6 py-4 border border-gray-300">${amountTTC} DH</td>
                <td class="px-6 py-4 border border-gray-300">Oui</td>
                <td class="px-6 py-4 border border-gray-300">0.00 DH</td>
                <td class="px-6 py-4 border border-gray-300">0.00 DH</td>
            </tr>
        `;
        $('#supplier-table-body').append(supplierRow);

        // Update Payment Section
        const paymentRow = `
            <tr class="bg-gray-100">
            <td class="px-6 py-4 border border-gray-300">${date}</td>
            <td class="px-6 py-4 border border-gray-300">CHEQUE</td>
            <td class="px-6 py-4 border border-gray-300">${48965 + 1}</td>
            <td class="px-6 py-4 border border-gray-300">${amountHT.toFixed(2)} DH</td>
            <td class="px-6 py-4 border border-gray-300">CIH</td>
            </tr>
        `;
        $('#payment-table-body').append(paymentRow);

        clearInputs();
    });

    async function addDataAsync() {
        // Simulate an asynchronous operation (e.g., API call)
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    function clearInputs() {
        $('#date').val('');
        $('#invoice-number').val('');
        $('#supplier').val('');
        $('#account-number').val('');
        $('#nature').val('');
        $('#tax').val('');
        $('#rubrique').val('');
        $('#amount-ht').val('');
        $('#tax-rate').val('');
        $('#payment-mode').val('');
        $('#payment-ref').val('');
        $('#payment-amount').val('');
        $('#payment-establishment').val('');
    }

    $(document).on('click', '.delete-invoice', function() {
        $(this).closest('tr').remove();
    });

    $(document).on('click', '.update-invoice', function() {
        const row = $(this).closest('tr');
        const date = row.find('td:eq(0)').text();
        const invoiceNumber = row.find('td:eq(1)').text();
        const supplier = row.find('td:eq(2)').text();
        const accountNumber = row.find('td:eq(3)').text();
        const nature = row.find('td:eq(4)').text();
        const tax = row.find('td:eq(5)').text();
        const rubrique = row.find('td:eq(6)').text();
        const amountHT = row.find('td:eq(7)').text();
        const taxRate = row.find('td:eq(8)').text();

        $('#date').val(date);
        $('#invoice-number').val(invoiceNumber);
        $('#supplier').val(supplier);
        $('#account-number').val(accountNumber);
        $('#nature').val(nature);
        $('#tax').val(tax);
        $('#rubrique').val(rubrique);
        $('#amount-ht').val(amountHT);
        $('#tax-rate').val(taxRate);

        row.remove();
    });
});