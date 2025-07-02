//logic for our custom contact form
const businessAccountCheckboxId = 'businessAccount';
const companyInfoFieldId = 'companyInfo';
const contactReasonDropdownId = 'contactReason';
const productNameFieldId = 'productNameField';
const orderNumberFieldId = 'orderNumberField';

document.addEventListener('DOMContentLoaded', function() {
    // Find the contact form wrapper using the class name pattern.
    const contactFormWrapper = document.querySelector('[class*="custom-contact-form-"]');
    if (!contactFormWrapper) {
        console.warn('Custom contact form wrapper not found. The script will not run.');
        return;
    }
    // Get references to the elements we need to manipulate.
    const businessAccountCheckbox = contactFormWrapper.querySelector(`#${businessAccountCheckboxId}`);
    const companyInfoField = contactFormWrapper.querySelector(`#${companyInfoFieldId}`);
    const reasonDropdown = contactFormWrapper.querySelector(`#${contactReasonDropdownId}`);
    const productNameField = contactFormWrapper.querySelector(`#${productNameFieldId}`);
    const orderNumberField = contactFormWrapper.querySelector(`#${orderNumberFieldId}`);
    // Function to hide an element.
    const hideField = (element) => {
        if (element) {
            element.style.display = 'none';
        }
    };
    // Function to show an element.
    const showField = (element) => {
        if (element) {
            element.style.display = 'block';
        }
    };
    // Function to handle the visibility of fields based on the "Reason for Contact" dropdown.
    const handleReasonChange = () => {
            // Make sure all elements exist before proceeding.
            if (!reasonDropdown || !productNameField || !orderNumberField) return;

            const selectedReason = reasonDropdown.value;

            // Hide both fields by default.
            hideField(productNameField);
            hideField(orderNumberField);

            // Show the relevant field based on the selection.
            if (selectedReason === 'product') {
                showField(productNameField);
            } else if (selectedReason === 'order') {
                showField(orderNumberField);
            }
        }
        // Function to handle the visibility of the "Company Name" field.
    const handleBusinessAccountToggle = () => {
            // Make sure all elements exist before proceeding.
            if (!businessAccountCheckbox || !companyInfoField) return;
            if (businessAccountCheckbox.checked) {
                showField(companyInfoField);
            } else {
                hideField(companyInfoField);
            }
        }
        // --- INITIALIZATION ---
        // Set the initial state of the form when the page loads.
        // We call the handler functions once to hide the fields by default.    
    handleBusinessAccountToggle();
    handleReasonChange();
    // --- EVENT LISTENERS ---
    // Add an event listener to the "Business Account" checkbox.    
    // The 'change' event fires whenever the checkbox is checked or unchecked.
    if (businessAccountCheckbox) {
        businessAccountCheckbox.addEventListener('change', handleBusinessAccountToggle);
    }
    // Add an event listener to the "Reason for Contact" dropdown.
    // The 'change' event fires whenever a new option is selected.
    if (reasonDropdown) {
        reasonDropdown.addEventListener('change', handleReasonChange);
    }
});
// File: assets/contact-form-custom.js
// This script is designed to enhance the Shopify contact form with custom functionality.   






// console.log("Custom contact form script loaded.");