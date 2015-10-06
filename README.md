# tasksequence

easily sequence an array of tasks by pointing to a `.json` or `.js` file

## how to use

### install the node task globally

`npm install -g <repo>`

### create a config file as a valid json file, or a node module
 
#### eg 1 (config.json)
    [
        "node build release"
        "git add -A",
        "git commit --verbose"
    ]

#### eg 2 (config.js)
this allows you to build your array dynamically if necessary

    var tasks = [];
    var files = ['image1.jpg', 'image2.jpg'];
    
    tasks = files.map(function(file){
        return 'git commit -m "a stupid example" ' + file;
    });
    module.exports = tasks;

### run the task sequencer 

`tasksequence (path/to/config)`

eg 

`tasksequence /Users/charlieclark/Desktop/tasks.js`

optionally pass a path to cd to before running tasks

`tasksequence /Users/charlieclark/Desktop/tasks.js --from /Users/Desktop/`

