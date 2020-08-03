export const JSONescaped = (json) => {
  return (
    json
      //Voor monaco editor nodig
      //.replace(/\\n/g, "\\r\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f")
      .replace(/\\v/g, "\\v")
  );
};

export const getUrlVars = (params) => {
  var vars = {};
  params.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
};

export const extractCompileError = (errMessage) => {
  try {
    //let responseJson = await errMessage.json();
    //let result = errMessage.message.match(/(?<=Line ).*(?=\n)/);
    let result = errMessage.match(/Details:.Line (\d):.(.*)/);
    let lineNumber = result[1];
    let errMess = result[2];
    return { lineNumber: lineNumber, errMess: errMess };
  } catch (e) {
    //alert(`Error trying to parse Compile error from MCP`);
  }
};
