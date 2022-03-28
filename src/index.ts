import { commands } from 'vscode'
import type { ExtensionContext } from 'vscode'

export function activate(ctx: ExtensionContext) {
  ctx.subscriptions.push(
    commands.registerCommand('reveal.active', () =>
      commands.executeCommand('workbench.files.action.showActiveFileInExplorer')
    )
  )
}

export function deactivate() {}
