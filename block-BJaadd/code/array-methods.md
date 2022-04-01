Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`   

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - accepts a parameter which is a seperator, based on which it joins the array. If no seperator is specified, then by default it takes  , as the seperator
    -return a string value
    ```js
    let arr = [1, 22, undefined, `shivaji`]
    let arrNew =  arr.join(',')
    console.log(newArr)
    ``` 
    undefined, null or [] is considerd a '' while joining
    it does not mutate original array
3. `flat`
    -it taked depth as a parameter, which is no. of layers upto which nested array needs to be flattened. It also takes infinity as  a parameter
    -returns a flattened array
    ```js
    let arr = [1,[1,2],[[11,1],1]]
    arr.flat()
    // [1, 1, 2, Array(2), 1]
    arr.flat(Infinity)
    //[1, 1, 2, 11, 1, 1]
    ```
    flat is used to flatten a nested array for a given no. of layers
    it is also used to remove empty elements of array. It does not mutate original array
4. `push`
    -push takes n no. of elements which needs to be pushed into the last of array
    -return new length of array
    ```js
    let arr = [1,2,`abc`,3]
    arr.push(6,7,`abc`)
    ```
    it mutates the array and add elements to the last of array
5. `indexOf`
    -takes the elements as an argument which needs to be searched in the array
    -takes the index as argument from where searcch needs to be started(optional)
    -returns the very first index on which search element is found, if element not found returns -1
    ```js
    let arr = [0,8,9,`saas`]
    arr.indexOf(`saas`)//3
    arr.indexOf(0,-4) //0
    ```
    method is used to search for an element in the array
6. `lastIndexOf`
     -takes the elements as an argment which needs to be searched in the array
     -takes the index as argument from where searcch needs to be restarted(optional)
     -returns the very first index on which search element is found, if element not found returns -1
    ```js
    let arr = [0,8,9,`saas`,0]
    arr.indexOf(`0`)//4
    arr.indexOf(0,0) //4
    ```
    this method search array element backward and does not mutate original
7. `includes`
    - takes two arguments, the element to be searched
    - from Index where search needs to start (optional)
    - return true or false based on element found or not
    ```js
     let arr = [0,8,9,`saas`,0]
     let a = arr.includes(0,2) // true
    ```
8. `reverse`
    -no parameters
    -return reversed array
    ```js
    let arr = [0,8,9,`saas`,0]
    let new = arr.reverse()
    ```
    mutates the original array itself
9. `every`
    Note: Calling this method on an empty array will return true for any condition!
    - accepsts a callback function which acccepts following parameters:-
       element
       index & array(optional)
    - return true if every element of array fulfills condition in cb
    ```js
    let arr = [0,8,9,`saas`,0]
    let res = arr.every((num, index, array)=> {
        console.log(num, index, array)
        return Boolean(num) == true
    })
    ```
    is used to check that every element of the array follows a condition or not
10. `shift`
    -no parameter
    -returns the removed first element of the array
    ```js
    let arr = [0,8,9,`saas`,0]
    arr.shift()
    ```
    removes first element af array and index of remaianing element is decreased by 1
    mutates the original array
11. `splice`
     -accepts 3 parameters mostly 
        index at which item to added/deleted
        no. of item to deleted from index
        elements which needs to be added (ccould be n no of items)
    - returns the array of deleted items, if none deleted returns empty array
    ```js 
    let arr = [0,8,9,`saas`,0]
    arr.splice(1,2,3,4) // [0, 3, 4, 'saas', 0]
    ```
    this method is to replace items or to add items in between of array, it mutates the original array
12. `find`
     -accepts a callback functions as a argument which accepts three parameters
         the current element in array
         the index of current element
         array itself on which it is called
      - return the very first element itself which satisfies the condition else undefined
         ```js
         let arr = [0,8,9,`saas`,0]
         arr.find((num, index, array)=>{
             console.log(num, index,array)
             return num>3
         })

         let obj = [{name: `shiva`, sur: `vishnoi`},{name: `shiva1`, sur: `vishnoi1`},{name: `shiva2`, sur: `vishnoi2`}]
         obj.find((object, index, array)=>{
             console.log(object, index, array)
             return object.sur === `vishnoi1`
         })
         ```
       this method is used to searcch for very first element which satisfies the condition and it does not mutate the array
13. `unshift`
     - accepts n no. of elements as argument  which gets added to start of array
     - returns the length of new array
     ```js
     let arr = [0,8,9,`saas`,0]
     arr.unshift("a", 1 , 11)
     ```
     it mutates the original array and add values to the starting
14. `findIndex`
    - accepts callback function as argument which accepts element, index, array as argument
    - return the index of element which satisfies condition, return -1 if no eleement satisfies condition
    ```js
       let obj = [{name: `shiva`, sur: `vishnoi`},{name: `shiva1`, sur: `vishnoi1`},{name: `shiva2`, sur: `vishnoi2`}]
       obj.findIndex((object, index, array)=>{
           console.log(object, index, array)
           return name===`shiva1`
       }) // 1
    ```
    it is used to search for index of element which satisfies a certain condition and it does not mutate array
15. `filter`
     - it acccepts a callback function which accepts current element, index, array as argument
     - return new array with elements which return true in cb, return empty array if no element passes condition
     ```js
        let obj = [{name: `shiva`, sur: `vishnoi`},{name: `shiva1`, sur: `vishnoi1`},{name: `shiva2`, sur: `vishnoi2`}]
        obj.filter((object, index, array)=>{
            console.log(object, index, array)
            return object.name==`shiva`
        })
        ```
    this method is used to filter existing array based on given consition, it does not mutate. It traverse through whole array
16. `flat`
    -it taked depth as a parameter, which is no. of layers upto which nested array needs to be flattened. It also takes infinity as  a parameter
    -returns a flattened array
    ```js
    let arr = [1,[1,2],[[11,1],1]]
    arr.flat()
    // [1, 1, 2, Array(2), 1]
    arr.flat(Infinity)
    //[1, 1, 2, 11, 1, 1]
    ```
    flat is used to flatten a nested array for a given no. of layers
    it is also used to remove empty elements of array. It does not mutate original array
17. `forEach`
       - accepts a callback funcction, wwhich accepts element, index and array as arguments
       - return undefined
       ```js
          let obj = [{name: `shiva`, sur: `vishnoi`},{name: `shiva1`, sur: `vishnoi1`},{name: `shiva2`, sur: `vishnoi2`}]
          obj.forEach((object, index, array)=>{
              console.log(object.name.includes(`a`), index, array)
          })
          ```
        this method executes a function for each element of the array and it does not mutates
18. `map`
 - accepts a  callback function which accepts element, index and array as callback functions
 - return new array with operation performed on each element
 ```js
     let obj = [{name: `shiva`, sur: `vishnoi`},{name: `shiva1`, sur: `vishnoi1`},{name: `shiva2`, sur: `vishnoi2`}]
     obj.map((object, index, array)=>{
         console.log(object, index, array)
         object.name = `abcd`
         return object
     })
```
    this method is used when a function is to be executed on each element, returns a array in which each element is returned by cb, cb returns undefined if no return statement
19. `pop`
    - return element which has been deleted. return undefined for empty array
    - removes last element of array and cahnge slength
20. `reduce`
     - accepts a callback function and initial value cb accepts accumlator, element, index, array
     - can return any data type
     ```js
      let arr = [0,8,9,`saas`,0]
      arr.reduce((acc,element)=>{
          return acc+element
      }, '')
     ```
     is used to reduce array to single value, does not mutate
21. `slice`
takes start and end as parameneter and return a part or comlete array
```
let arr = [0,8,9,`saas`,0]
arr.slice(0,1)
```
22. `some`
- accepts a cb functn which accepts element, index and array
- return true if any of the element in array passes a condition, does not mutate
```
let arr = [0,8,9,`saas`,0]
arr.some((element)=>{
    return element === `saas`
})
```
