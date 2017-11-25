const caseRegex = /[QWERTYUIOPASDĐFGHJKLZXCVBNM].*/;

const matchCase = text => match => {
  if (match.match(caseRegex)) {
    return `${text[0]}`.toUpperCase() + text.slice(1);
  } else {
    return text;
  }
}

export const tieqviet = (str) => {
  /**
   * C = Ch, Tr; 
   * D = Đ; 
   * G = G, Gh; 
   * F = Ph; 
   * K = C, Q, K; 
   * Q = Ng, Ngh; 
   * R = R; 
   * S = S; 
   * X = Kh; 
   * W =Th; 
   * Z = d, gi, r.
   */
  return str
    .replace(/kh/gi, matchCase('x'))
    .replace(/(c(?!h)|[qk])/gi, matchCase('k'))
    .replace(/ch /gi, matchCase('k '))
    .replace(/(ch|tr)/gi, matchCase('c'))
    .replace(/(d|gi|r)/gi, matchCase('z'))
    .replace(/gì/gi, matchCase('zì'))
    .replace(/đ/gi, matchCase('d'))
    .replace(/ngh{0,1}/gi, matchCase('q'))
    .replace(/gh/gi, matchCase('g'))
    .replace(/ph/gi, matchCase('f'))
    .replace(/th/gi, matchCase('w'))
    .replace(/nh/gi, matchCase(`n'`))
}