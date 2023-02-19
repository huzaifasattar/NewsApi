const linkUrl = "https://newsapi.org/v2/everything";
const apiKey = "c297528c4a4248a291279c747daa60d0";

const makeQuerryParm = (params= {}) => {
  let querryPar = "";
  const ObjArray = Object.keys(params);

  ObjArray.forEach((item, id) => (querryPar += `${id === 0 ? "?" : "&"}${item} = ${params[item]}`)
  );
  return querryPar;
};
export const Api = (data) => {
  const parmObj = { ...data, apiKey };
  const querry = makeQuerryParm(parmObj);
  
  return fetch(`${linkUrl}${querry}`);
};

// const baseURL = "https://newsapi.org/v2/everything";

// const apiKey = "c297528c4a4248a291279c747daa60d0";

// const generateQueryParams = (params = {}) => {
//   let query = "";
//   const objArr = Object.keys(params);

//   objArr.forEach(
//     (key, i) => (query += `${i === 0 ? "?" : "&"}${key}=${params[key]}`)
//   );

//   return query;
// };

// export const Api = (data) => {
//   const paramsObj = { ...data, apiKey };
//   const queryParms = generateQueryParams(paramsObj);

  

//   return fetch(`${baseURL}${queryParms}`);
// };
