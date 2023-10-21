# xml-json-tasks-21.2

There are two tasks from the lesson 21.2, which includes:

- Parsing XML from JavaScript
- Parsing JSON from JavaScript

There are two files in this repository which solves these tasks. The files are named:

```none
task-{number}.js
```

where `{number}` is the number of the task.

## Running

1. Clone the repository:

   ```shell
   git clone https://github.com/ivan-developer-01/xml-json-tasks-21.1.git
   ```

2. Go to the repository:

   ```shell
   cd xml-json-tasks-21.1
   ```

3. Run files:

   Note that the task-1 cannot be run in Node because it uses `DOMParser`, which is available only in browsers.

   ```shell
   $ node task-2.js
   ...
   ```

   Assuming you have Node installed.  
   If you do not have Node or want to run `task-1.js`, you can copy the code from files and paste it into your browser console.

## Task descriptions

1. > You are given a preparation and the result that you should get. Your task is to write code that will convert XML into a JS object and output it to the console.
   >
   > XML:
   >
   > ```javascript
   > <list>
   >  <student>
   >    <name lang="en">
   >      <first>Ivan</first>
   >      <second>Ivanov</second>
   >    </name>
   >    <age>35</age>
   >    <prof>teacher</prof>
   >  </student>
   >  <student>
   >    <name lang="ru">
   >      <first>Петр</first>
   >      <second>Петров</second>
   >    </name>
   >    <age>58</age>
   >    <prof>driver</prof>
   >  </student>
   > </list>
   > ```
   >
   > JS object:
   >
   > ```javascript
   > {
   >   list: [
   >     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
   >     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
   >   ]
   > }
   > ```
2. > Given is a sample JSON string:  
   >
   > ```json
   > {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
   > ```
   >
   > Your task is to create a JS object that, when converted to JSON, will return the same JSON string as the result as in the sample. Print the resulting line to the console.
