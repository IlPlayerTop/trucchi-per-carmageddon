/**
 * playerTopFormat - Basic Formatting Utilities
 * Author: IlPlayerTop
 * License: Custom
 */

const playerTopFormat = {
    /**
     * Formats a number as currency.
     * @param {number} amount - The amount to format.
     * @param {string} [currency='USD'] - Currency code.
     * @returns {string}
     */
    toCurrency(amount, currency = 'USD') {
        if (typeof amount !== 'number') {
            console.error('[playerTopFormat] Invalid amount.');
            return '';
        }
        return amount.toLocaleString('en-US', { style: 'currency', currency });
    },

    /**
     * Capitalizes the first letter of a string.
     * @param {string} str - The string to format.
     * @returns {string}
     */
    capitalize(str) {
        if (typeof str !== 'string' || str.length === 0) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

// Example usage:
// console.log(playerTopFormat.toCurrency(1234.5)); // Output: $1,234.50
// console.log(playerTopFormat.capitalize('hello world')); // Output: Hello world

module.exports = playerTopFormat;
