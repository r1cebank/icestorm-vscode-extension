import * as shell from 'shelljs';
import * as vscode from 'vscode';

export const runCommand = async (command: string, output: vscode.OutputChannel) => {
    return new Promise((resolve, reject) => {
        const shellProcess = shell.exec(command, { async: true });
        shellProcess.stdout?.on('data', (data) => {
            output.append(data);
        });
        shellProcess.stderr?.on('data', (data) => {
            output.append(data);
        });
        shellProcess.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error('Command execute failed...'));
            } else {
                resolve();
            }
        });
    });
};

export const checkRequirement = (tools: string[]): boolean => {
    for (let i = 0; i < tools.length; i++) {
        if (!shell.which(tools[i])) {
            vscode.window.showErrorMessage(`${tools[i]} is required to build this project`);
            return false;
        }
    }
    return true;
};

