// eslint-disable-next-line

import * as ace from "ace-builds/src-noconflict/ace";

const addMCPFuncToSnippets = (sn) => {
  // eslint-disable-next-line
  ace.define(
    "ace/snippets/lua",
    ["require", "exports", "module"],
    (e, t, n) => {
      // eslint-disable-next-line
      (t.snippetText = sn), (t.scope = "lua");
    }
  );
};
// eslint-disable-next-line
// eslint-disable-next-line
var snippets =
  'snippet #!\n\
	#!/usr/bin/env lua\n\
	$1\n\
snippet local\n\
	local ${1:x} = ${2:1}\n\
snippet fun\n\
	function ${1:fname}(${2:...})\n\
		${3:-- body}\n\
	end\n\
snippet for\n\
	for ${1:i}=${2:1},${3:10} do\n\
		${4:print(i)}\n\
	end\n\
snippet forp\n\
	for ${1:i},${2:v} in pairs(${3:table_name}) do\n\
	   ${4:-- body}\n\
	end\n\
snippet fori\n\
	for ${1:i},${2:v} in ipairs(${3:table_name}) do\n\
	   ${4:-- body}\n\
	end\n\
snippet PrintMCP\n\
	PrintToConsoleeeeee(${1:})'

export const addSnippet = (snippetsToAdd) => {
  var newSnips =""
  try{
    newSnips = snippetsToAdd.map((snippet,i) => {     
        
    addMCPFuncToSnippets(`snippet ${snippet.functionName}\n\
      ${snippet.functionName}(\${1:})\n\
    `)
    return `snippet ${snippet.functionName}\n\
      ${snippet.functionName}(\${1:})\n\
    `;  
      }).join('');      
      
      return newSnips;
  }catch(e){
    console.log(e)
  }
  
};

export default snippets;
