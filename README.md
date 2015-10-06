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
    module.exports = [
        'node build release'
        'git add -A',
        'git commit --verbose'
    ];

### run the task sequencer 

`tasksequence (path/to/config)`

eg 

`tasksequence /Users/charlieclark/Desktop/tasks.js`

optionally pass a path to cd to before running tasks

`tasksequence /Users/charlieclark/Desktop/tasks.js --from /Users/Desktop/`

