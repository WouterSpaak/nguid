import * as vscode from 'vscode';
import { guid } from './guid';

export function activate(context: vscode.ExtensionContext) {
  const commandRef = vscode.commands.registerCommand('extension.nguid', () => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      editor.edit(builder => {
        builder.insert(editor.selection.active, guid());
      });
    } else {
      vscode.window.showInformationMessage('No editor open to insert guid.');
    }
  });
  context.subscriptions.push(commandRef);
}

export function deactivate() { }
