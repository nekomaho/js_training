escapeHtml = (str) => {
  if (!str) { return ''; }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#39;');

  return str;
}

function e(templates, ...values) {
  let result = '';
  for(let l = 0, len = templates.length; l < len; l++) {
    result += templates[l] + escapeHtml(values[l]);
  }

  return result;
}

let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは ${name}さん`);
