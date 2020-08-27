import * as vscode from 'vscode';

import * as hardware from '../hardware';

const chips = [
    'Alchiery CU'
];

export const createProject = vscode.commands.registerCommand('icestorm.createproject', async () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    const projectName = await vscode.window.showInputBox({
        prompt: 'Name of the project?'
    });

    const projectDirs = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: 'Create',
        title: 'Where to create your new project?'
    });

    const fpgaType = await vscode.window.showQuickPick(chips, {
        canPickMany: false,
        placeHolder: 'What is the FPGA you are using?'
    });

    if (fpgaType && projectDirs?.length && projectName) {
        const projectDir = projectDirs[0];
        if (fpgaType === 'Alchiery CU') {
            hardware.AlchitryCU.createProject(projectName, projectDir);
        }
    } else {
        vscode.window.showErrorMessage('Error creating project, missing params.');
    }
});
