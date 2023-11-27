================================= JS I Mini-Project

Create an application that allows a user to find cheeses by filtering by type and searching by name or by country.

-- Application Flow

The application should flow in the following way

1. Greet users to the application in an alert.
2. The user should then be asked in a prompt to enter whether they want to search by cheese name or country of origin. Invalid input should cause the program to alert "invalid input" and halt further execution.
3. The user should be prompted to enter the search string.
4. Display to the user a list of cheeses that both are of the entered type and that start with the entered search string for either the cheese name or the country of origin, depending on what the user selected.

As an optional bonus, allow the user to specify the cheese type (hard/soft/semi-hard/all) before searching by either country of origin or cheese name.

-- Output Formatting

The application should format the output of given cheeses in this format:

"NAME_OF_CHEESE_1 from COUNTRY_OF_ORIGIN_1 (TYPE_1)\nNAME_OF_CHEESE_2 from COUNTRY_OF_ORIGIN_2 (TYPE_2)\n..."


Notice the new line character at the end of each cheese, formatting each cheese on it's own line in an alert, like so:

NAME_OF_CHEESE_1 from COUNTRY_OF_ORIGIN_1 (TYPE_1)
NAME_OF_CHEESE_2 from COUNTRY_OF_ORIGIN_2 (TYPE_2)
NAME_OF_CHEESE_3 from COUNTRY_OF_ORIGIN_3 (TYPE_3)
etc.

