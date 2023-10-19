function decimalToBinary(decimalNumber) {
  //Write you code here
	if (isNaN(decimalNumber) || decimalNumber < 0 || Math.floor(decimalNumber) !== decimalNumber) {
        return "Invalid input. Please enter a non-negative integer.";
    }

    // Handle the special case of 0 separately
    if (decimalNumber === 0) {
        return "0";
    }

    // Initialize an empty string to store the binary representation
    let binaryNumber = "";

    // Convert decimal to binary
    while (decimalNumber > 0) {
        // Append the remainder to the binary representation
        binaryNumber = (decimalNumber % 2) + binaryNumber;

        // Update the decimal number by dividing it by 2
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryNumber;
}