import * as shell from 'shelljs';
import * as vscode from 'vscode';
import * as YAML from 'yaml';

import { ProjectSettings } from './hardware';

export const saveProjectSettings = async (projectName: string, projectDir: vscode.Uri, settings: ProjectSettings) => {
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'iceproj.yml'), Buffer.from(YAML.stringify({
        ...settings,
        path: '',
        projectName
    })));
};

const pathJoin = (parts: string[], sep?: string) => {
    const separator = sep || '/';
    const replace = new RegExp(separator+'{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
}

const getOverridedPath = (command: string, path?: string): string => {
    let tool = command.split(' ')[0];
    if (!path) {
        return command;
    }
    if (!shell.which(tool)) {
        tool = pathJoin([path, tool]);
    }
    return [tool, ...command.split(' ').slice(1)].join(' ');
}

export const runCommand = async (command: string, output: vscode.OutputChannel, path?: string) => {
    return new Promise((resolve, reject) => {
        const shellProcess = shell.exec(getOverridedPath(command, path), { async: true });
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
                resolve(null);
            }
        });
    });
};

export const checkRequirement = (tools: string[], path?: string): boolean => {
    for (let i = 0; i < tools.length; i++) {
        let tool = tools[i];
        if (path) {
            tool = pathJoin([path, tool]);
        }
        if (!shell.which(tool)) {
            vscode.window.showErrorMessage(`${tools[i]} is required to build this project`);
            return false;
        }
    }
    return true;
};

