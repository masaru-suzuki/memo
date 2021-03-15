import crypto from 'crypto';

//Hashの生成
//引数はnameよりも抽象的なstringが適切

export const gravatarPath = (string) => {
  const lowerCaseTrimString = string.trim().toLowerCase();
  // console.log('lowercase:' + lowerCaseTrimString);
  const md5 = crypto.createHash('md5');
  // console.log('md5'+md5.update);
  const digest = md5.update(lowerCaseTrimString,'binary').digest('hex');
  // console.log(digest);
  return `https://www.gravatar.com/avatar/${digest}/?d=retro`;
}
