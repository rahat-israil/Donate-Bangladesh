// When Click the Blog button go to Blog Page
// document.getElementById('goToBlog').addEventListener('click', function () {
//   window.location.href = '/blog.html';
// });

// Click Donation button to go Donation Section
document.getElementById('btnDonation').addEventListener('click', function () {
  // console.log('Donation button clicked');
  document
    .getElementById('donationSection')
    .scrollIntoView({ behavior: 'smooth' });

  showDonationById('btnDonation');

  document.getElementById('btnHistory').classList.remove('primaryColor');
  document.getElementById('btnDonation').classList.add('primaryColor');
});

// Card 1
document
  .getElementById('donateNowBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    handleDonation(
      'donationInputField',
      'mainAccountBalance',
      'donationBalance',
      'transaction-container',
      'for Flood at Noakhali, Bangladesh'
    );
    document.getElementById('confirmationModal').classList.remove('hidden');
  });

// Card 2
document
  .getElementById('donateNowBtn2')
  .addEventListener('click', function (event) {
    event.preventDefault();

    handleDonation(
      'donationInputField2',
      'mainAccountBalance',
      'donationBalance2',
      'transaction-container',
      'for Flood Relief in Feni,Bangladesh'
    );
    document.getElementById('confirmationModal').classList.remove('hidden');
  });

// Card 3
document
  .getElementById('donateNowBtn3')
  .addEventListener('click', function (event) {
    event.preventDefault();

    handleDonation(
      'donationInputField3',
      'mainAccountBalance',
      'donationBalance3',
      'transaction-container',
      'for Injured in the Quota Movement'
    );
    document.getElementById('confirmationModal').classList.remove('hidden');
  });

// History button
document.getElementById('btnHistory').addEventListener('click', function () {
  showHistoryById('transaction-section');

  document.getElementById('btnHistory').classList.add('primaryColor');
  document.getElementById('btnDonation').classList.remove('primaryColor');
});

// Close Confirmation modal button
document.getElementById('closeModalBtn').addEventListener('click', function () {
  // Close the modal
  document.getElementById('confirmationModal').classList.add('hidden');
});
