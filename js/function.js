// Donation Now Main Function
function handleDonation(
  donationInputFieldId,
  mainBalanceId,
  donationBalanceId,
  transactionContainerId,
  donationMessage
) {
  const donationInput = parseFloat(
    document.getElementById(donationInputFieldId).value
  );

  const mainBalance = parseFloat(
    document.getElementById(mainBalanceId).innerText
  );
  const donationBalanceTotal = parseFloat(
    document.getElementById(donationBalanceId).innerText
  );

  // Validate donation input
  if (
    isNaN(donationInput) ||
    donationInput < 0 ||
    donationInput > mainBalance
  ) {
    alert('Failed to Donate Money! Please try again.');
    return false;
  } else {
    // Calculate new balances
    const newDonationBalance = donationBalanceTotal + donationInput;
    const newMainBalance = mainBalance - donationInput;

    // Update account balance
    document.getElementById(mainBalanceId).innerText =
      newMainBalance.toFixed(2);
    document.getElementById(donationBalanceId).innerText =
      newDonationBalance.toFixed(2);

    // Add to transaction history
    const transactionDiv = document.createElement('div');
    transactionDiv.classList.add(
      'border-2',
      'rounded-lg',
      'w-4/6',
      'mx-auto',
      'p-5',
      'space-y-5'
    );

    transactionDiv.innerHTML = `
    <p class="text-lg font-bold">${donationInput} Taka is Donated ${donationMessage}</p>
    <p class="font-extralight">Date: ${currentDate} (Bangladesh Standard Time)</p>
  `;

    document.getElementById(transactionContainerId).appendChild(transactionDiv);

    // Clear the input field
    document.getElementById(donationInputFieldId).value = '';

    //alert('Successfully Added donation');
    return;
  }
}

// Day, Time, Date, TimeZone
const currentDate = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Dhaka',
  timeZoneName: 'short',
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

// History Buttton Function
function showHistoryById(id) {
  // hide all the sections
  document.getElementById('mainSection').classList.add('hidden');
  document.getElementById('footerSection').classList.add('hidden');

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove('hidden');
}

// Donation Buttton Function
function showDonationById(id) {
  // hide all the sections
  document.getElementById('headerSection').classList.remove('hidden');
  document.getElementById('mainSection').classList.remove('hidden');
  document.getElementById('footerSection').classList.remove('hidden');
  document.getElementById('transaction-section').classList.add('hidden');

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove('hidden');
}
