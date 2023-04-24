# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

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


## Method

I first created constants containing all of the different character types available: special characters, numbers, lowercase letters and uppercase letters. I then initialised variables for the selecting of the character types. I then created prompts and confirmation to allow the user to select the character types they would like in their password, making sure to add in special conditions such as making sure the password is of a certain length and also making sure the user has selected at least one character type. The password variable is then created and also the constant of available characters as selected by the user. I then made it so that if the user had selected character types, they would be enetered into the array of available characters. Finally, I created a for loop that takes a varaible "i" from 0 to the length of the password which selects a random character from the list of available characters and enters it into the password.

## Links

GitHub Repo: https://github.com/Tiernan-97/Password_Generator
Live Webpage: https://tiernan-97.github.io/Password_Generator

## Screenshot
<img href="./PassGenScreenShot.png" alt="Password Generator Screenshot">