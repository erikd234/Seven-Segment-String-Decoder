# Seven-Segnment-String-Decoder


Web app that decodes strings of text to seven segment display binary and hexadecimal.

Enter some text or numbers and get hex and binary that can be written to a
seven segment display!

WEB app is now live at erikdahl.ca/apps/sevenseg/decoder <br/>
  
Example Usage: <br/>
Enter: <br/>
Text: "IGEN" <br/>
Mode: "Common Cathode" (Common Anode will compliment the binary string and give different HEX values) <br/>

Result:<br/>
I => Binary: 1001111, Hex: 4FH <br/>
G => Binary: 1000010, Hex: 42H <br/>
E => Binary: 0000110, Hex: 6H <br/>
N => Binary: 0101011, Hex: 2BH <br/>

Things to note: Not all letters and symbols can be represented on a 7 seg display! If a letter cannot be represented it will try the best it can or turn return the value that turns off the display.
For example 'k' or 'K' cannot be represented on a seven segment display and will turn display off.
