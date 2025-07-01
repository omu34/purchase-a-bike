//logic for our custom contact form





/**
 * This script enhances the Shopify contact form by adding conditional logic.
 * It's designed to work with the specific structure of your Liquid file,
 * handling the visibility of fields based on user selections.
 */

// We wait for the entire HTML document to be loaded and parsed before running our script.
document.addEventListener('DOMContentLoaded', function() {

    // Find the specific contact form section on the page.
    // This selector is designed to find the container div you provided.
    const contactFormWrapper = document.querySelector('[class*="custom-contact-form-"]');

    // If the contact form section doesn't exist on the page, we stop the script.
    if (!contactFormWrapper) {
        console.warn('Custom contact form wrapper not found. The script will not run.');
        return;
    }

    // Get references to all the interactive and conditional elements within the form.
    const businessAccountCheckbox = contactFormWrapper.querySelector('#businessAccount');
    const companyInfoField = contactFormWrapper.querySelector('#companyInfo');

    const reasonDropdown = contactFormWrapper.querySelector('#contactReason');
    const productNameField = contactFormWrapper.querySelector('#productNameField');
    const orderNumberField = contactFormWrapper.querySelector('#orderNumberField');

    /**
     * Hides an element by setting its display style to 'none'.
     * @param {HTMLElement} element - The element to hide.
     */
    const hideField = (element) => {
        if (element) {
            element.style.display = 'none';
        }
    };

    /**
     * Shows an element by setting its display style to 'block'.
     * @param {HTMLElement} element - The element to show.
     */
    const showField = (element) => {
        if (element) {
            element.style.display = 'block';
        }
    };

    /**
     * This function handles the visibility of fields based on the "Reason for Contact" dropdown.
     */
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
    };

    /**
     * This function handles the visibility of the "Company Name" field.
     */
    const handleBusinessAccountToggle = () => {
        // Make sure all elements exist before proceeding.
        if (!businessAccountCheckbox || !companyInfoField) return;

        if (businessAccountCheckbox.checked) {
            showField(companyInfoField);
        } else {
            hideField(companyInfoField);
        }
    };


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