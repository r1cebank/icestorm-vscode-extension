import * as vscode from 'vscode';
import * as shell from 'shelljs';

let output = vscode.window.createOutputChannel('Icestorm');

type Settings = {
    type: string;
    sys: string;
    constraint: string;
    pnr: string;
    pack: string;
    write: string;
};

const runCommand = async (command: string, output: vscode.OutputChannel) => {
    return new Promise((resolve, reject) => {
        shell.exec(command, (code, stdout, stderr) => {
            output.append(stdout);
            output.append(stderr);
            if (code !== 0) {
                reject(new Error('Command execute failed...'));
            } else {
                resolve();
            }
        });
    });
};

export const buildProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.buildproject', async () => {
        const { sys, constraint, pnr, pack } = <Settings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.path);
            await runCommand('mkdir -p build', output);
            await runCommand(sys, output);
            await runCommand(constraint, output);
            await runCommand(pnr, output);
            await runCommand(pack, output);
        }
    });
};
