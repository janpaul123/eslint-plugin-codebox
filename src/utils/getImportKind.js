/**
 * Gets the used member syntax style.
 *
 * import 'my-module.js' --> none
 * import * as myModule from 'my-module.js' --> all
 * import {myMember} from 'my-module.js' --> named
 * import {foo, bar} from  'my-module.js' --> named
 * import FooBar from 'my-module.js'
 * @param {ASTNode} node - the ImportDeclaration node.
 * @returns {string} used member parameter style, ["all", "named", "default", "none"]
 */
export default function getImportKind(node) {
  const { specifiers } = node
  if (!specifiers.length) return 'none'
  else if (specifiers[0].type === 'ImportNamespaceSpecifier') return 'all'
  else if (specifiers[0].type === 'ImportDefaultSpecifier') return 'default'
  return 'named'
}
