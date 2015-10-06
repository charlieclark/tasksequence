#!/usr/bin/env node

var argv = require('yargs').argv;
var shell = require('./shellHelper');
var fs = require('fs');
var Promise = require('promise');
var path = require('path');

var filePath = argv._[0];
var execRoot = argv.from;

if (filePath) {

	var ext = path.extname(filePath);
	var isJSON = ext === ".json";
	var iJS = ext === ".js";

	console.log(isJSON, iJS, ext);

	if (isJSON || iJS) {
		(isJSON ? loadJSON() : loadJS()).then(function(tasks) {
			processTasks(tasks);
		}).catch(function(err) {
			console.log(err);
		})
	}
} else {

}

function processTasks(tasks) {
	if (execRoot) {
		tasks.unshift('cd ' + path.normalize(execRoot));
	}
	shell.series(tasks, function(err) {
		if (err) {
			console.log("errors bro!");
		} else {
			console.log("completed successfully");
		}
	});
}

function loadJS() {
	var tasks = require(filePath);
	return Promise.resolve(tasks);
}

function loadJSON() {
	return new Promise(function(resolve, reject) {
		fs.readFile(filePath, function(err, data) {
			if (err) reject(err);
			try {
				resolve(JSON.parse(data));
			} catch (e) {
				reject(e);
			}
		});
	});
}