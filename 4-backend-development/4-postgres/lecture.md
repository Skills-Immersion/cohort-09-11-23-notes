# Bad Related Data

## Your Local Library's Database Table

|title|author|genre|checkout_date|due_date|patron_name|account_number|
|---|---|---|---|---|---|---|
|To Kill a Mockingbird|Harper Lee|Legal Drama|Nov 28|Dec 7|Erin|5468351|
|The Dark Tower|Stephen King|Science Fiction|Nov 7|Nov 20|Jack|984321|
|Five Rings|Miyamoto Musashi|Self-help|null|null|null|null|
|The Cat In The Hat|Dr Seuss|Juvenile Fiction|Nov 28|Dec 7|Erin|5468351|
|The Dark Tower|Stephen King|Science Fiction|Nov 22|Dec 15|Aleksander|8464555|

This is bad because data gets duplicated across multiple rows, and if we have a book with no checkouts or a patron who's never checked out a book, we end up with rows that seem wrong, where many columns are null.

Instead, we'll create a books table, a checkouts table, and a patrons table