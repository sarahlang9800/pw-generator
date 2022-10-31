# sarah-lang-password-generator

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria 
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Live URL
https://sarahlang9800.github.io/portfolio/

## Link to Code
https://github.com/sarahlang9800/portfolio

## Example Photo 
![Password Generator Example Picture](/Assets/images/pw-generator%20example%20photo.png)

## Discription 
* Asks the user for the length they would like their password to be
* If the users input is less than 8 or greater than 128 the user is promted to select a number inbetween.
* Gives the user four criterias and prompts them to select at least one.
* Once the user makes all of their selections a random password is generated that fits criteria of their input.