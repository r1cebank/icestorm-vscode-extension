// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as commands from './commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Check the settings.iceproj file
	// vscode.workspace.fs.stat(new vscode.Uri());
	vscode.commands.executeCommand('icestorm.refreshproject');

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('icestorm plugin is active');

	// Register all commands
	context.subscriptions.push(commands.createProject(context));
	context.subscriptions.push(commands.buildProject(context));
	context.subscriptions.push(commands.programProject(context));
	context.subscriptions.push(commands.refreshProject(context));
}

// this method is called when your extension is deactivated
export function deactivate() { }
