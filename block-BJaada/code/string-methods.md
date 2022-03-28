Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
3. `toLowerCase`
     parameter - these methods does not accept arguments
     return - string in lowercase
     ```js
     console.log(`Abcd`.toLowerCase()) //   abcd
     ```
     this method is used to return lower case of a string value
4. `trim`
    parameter-  does not accept arguments
    return string value
    ```js
    console.log(`abcd  `.trim()) // `abcd`
    ```
    this method removed whitespaces from start and end of string
5. `trimEnd`
  ```js
    console.log(`abcd  `.trimEnd()) // `abcd`
    ```
     this method removes whitespaces from end of a string
6. `trimStart`
  ```js
    console.log(`  abcd`.trimStart()) // `abcd`
    ```
     this method removes whitespaces from start of a string
7. `concat`
   parameter- can take any no. of arguments
   return- a combined string
   ```js
   console.log(`Hello`.concat(' ', 'world' , '!'))
   ```
   concat the string with given arguments
8. `endsWith`
    takes two argument, the character to be searched and the length of string which defaults to string.length
    returns true or false
    ```js
    console.log(`Hello World!`.endsWith('ld', `Hello World!`.length-1)) // true
    ```
    checks wether the string is ending with certain character or not
9. `includes`
     accepts the string to be searched as argument
     returns true or false
     ```js
     console.log(`hello`.includes('h')) //  true
     ```
     ccheck if the aguments string is present in string or not
10. `indexOf`
     accepts two parameter, on of which is an substring which needs to be searched in main string and second optional is length from where substring is searched for
     return index or -1 if substring not found
     ```js
     console.log(`hello`.indexOf('o'))
     ```
     used to searcch for a substring inside main string
11. `lastIndexOf`
     takes one argument the substring to be searched
     returns index if found, if not -1
     ```js
     console.log(`hello doja cat`.tolastIndexOf('o'))
     ```
     returns last index of occurence of substring
12. `padEnd`
    takes two argument, the length of resulting string and extra characcter needs to be added at end
    reurn resulting string
    ```js
    console.log(`he`.padEnd(5, 'llo'))
    ```
13. `padStart`
14. `repeat`
     takes a non negative integer as an argument
     return string 
     ```js
     console.log(`hello`.repeat(30))
     ```
     it repeat a string for given number of times and return repeated string
15. `replace`
     accepts two argument, one the substr which needs to be replaced and seccond one as the replacement
     returns updated string
     ```js
     console.log(`abc`.replace('c', 'a'))
    ```
16. `slice`
     accepts two argments, starting and end index, end index defaults to str.lemgth
     return sliced string
     ```js
     console.log(`hello`.slice(1,2))
     ```
     used to slice a string based on index
17. `split`
     accepts subtring as argument and breaks string based on argument
     return array of string
     console.log(`hello world`.split(' '))
18. `substring`
         accepts two argments, starting and end index, end index defaults to str.lemgth
     return sliced string
     ```js
     console.log(`hello`.substring(1,2))
     ```
     used to slice a string based on index, and index are swapped if seccond argument is smaller
